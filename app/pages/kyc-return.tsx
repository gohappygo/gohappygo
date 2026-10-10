import { isAxiosError } from 'axios';
import { AlertCircle, Check, Clock, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { getDiditKycStatus, type KycStatus } from '~/services/kycService';
import { type AuthState, useAuthStore } from '~/store/auth';

type ReturnStatus =
  | KycStatus
  | 'checking'
  | 'unauthenticated'
  | 'inReview'
  | 'incomplete'
  | 'expired';

// Didit appends `status` to the return URL (documented values: Approved, Declined, In Review).
// All Didit session statuses are mapped so none falls through. This is only a display hint:
// the real result is validated by the backend (webhook) and this page grants nothing by itself.
const parseDiditStatus = (raw: string | null): ReturnStatus | null => {
  if (!raw) return null;

  switch (raw.trim().toLowerCase().replace(/[_-]+/g, ' ')) {
    case 'approved':
      return 'approved';
    case 'declined':
      return 'rejected';
    case 'in review':
      return 'inReview';
    case 'not started':
    case 'in progress':
    case 'awaiting user':
    case 'resubmitted':
      return 'incomplete';
    case 'expired':
    case 'abandoned':
    case 'kyc expired':
      return 'expired';
    default:
      return null;
  }
};

type BadgeTone = 'success' | 'review' | 'pending';

const badgeStyles: Record<BadgeTone, string> = {
  success: 'bg-[#22c55e]',
  review: 'bg-[#0f6ea9]',
  pending: 'bg-[#ef4444]',
};

// Same screen as the mobile app: title, intro, stylised ID card with a status badge, details.
function StatusScreen({
  tone,
  title,
  intro,
  details,
  onClose,
  onContinue,
  openAppUrl,
}: {
  tone: BadgeTone;
  title: string;
  intro: string;
  details?: string;
  onClose: () => void;
  onContinue: () => void;
  openAppUrl?: string;
}) {
  const { t } = useTranslation();
  const BadgeIcon = tone === 'success' ? Check : tone === 'review' ? Clock : X;

  return (
    <main className="min-h-screen bg-white px-6 py-4">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-md flex-col">
        <button
          type="button"
          aria-label={t('pages.kycReturn.close')}
          onClick={onClose}
          className="-ml-2 mb-5 flex h-11 w-11 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        <h1 className="text-2xl font-black leading-[30px] text-[#17212b]">{title}</h1>
        <p className="mt-3.5 text-[15px] font-semibold leading-[21px] text-slate-700">{intro}</p>

        <div className="relative mx-auto my-9 aspect-[1.45] w-full max-w-[340px]">
          <img
            src="/images/kyc-identity-card.webp"
            alt=""
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-contain"
            aria-hidden="true"
          />
          <div
            className={`absolute bottom-[2%] right-[4%] flex h-[84px] w-[84px] items-center justify-center rounded-full border-[5px] border-white ${badgeStyles[tone]}`}
          >
            <BadgeIcon className="h-[54px] w-[54px] text-white" strokeWidth={3} aria-hidden="true" />
          </div>
        </div>

        <div className="mt-auto pb-6">
          {details && <p className="text-[13px] font-semibold leading-[19px] text-slate-500">{details}</p>}
          <p className="mt-1 text-[13px] font-semibold leading-[19px] text-slate-500">
            {t('pages.kycReturn.privacyBefore')}
            <Link to="/privacy-policy" className="font-extrabold text-[#16a34a]">
              {t('pages.kycReturn.privacyLink')}
            </Link>
            .
          </p>
          {openAppUrl && (
            <a
              href={openAppUrl}
              className="mt-[18px] flex min-h-[54px] w-full items-center justify-center rounded-[27px] bg-[#0067a8] text-base font-black text-white"
            >
              {t('pages.kycReturn.openApp')}
            </a>
          )}
          <button
            type="button"
            onClick={onContinue}
            className={`flex min-h-[54px] w-full items-center justify-center rounded-[27px] text-base font-black ${
              openAppUrl
                ? 'mt-3 border border-slate-300 bg-white text-slate-700'
                : 'mt-[18px] bg-[#0067a8] text-white'
            }`}
          >
            {t('pages.kycReturn.continue')}
          </button>
        </div>
      </div>
    </main>
  );
}

export default function KycReturn({ openAppUrl }: { openAppUrl?: string } = {}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isLoggedIn = useAuthStore((s: AuthState) => s.isLoggedIn);
  const urlStatus = parseDiditStatus(searchParams.get('status'));
  const [status, setStatus] = useState<ReturnStatus>(urlStatus ?? 'checking');

  useEffect(() => {
    // The status is already known from the URL: no login needed to display it.
    if (urlStatus) return;

    const syncKycStatus = async () => {
      try {
        const response = await getDiditKycStatus();
        setStatus(response.kycStatus === 'in_review' ? 'inReview' : response.kycStatus);
      } catch (error: unknown) {
        setStatus(
          isAxiosError(error) && error.response?.status === 401 ? 'unauthenticated' : 'failed'
        );
      }
    };

    void syncKycStatus();
  }, [urlStatus]);

  const goHome = status === 'unauthenticated' || !isLoggedIn;
  const leave = () => navigate(goHome ? '/' : '/profile');

  if (status === 'approved') {
    return (
      <StatusScreen
        tone="success"
        title={t('pages.kycReturn.successTitle')}
        intro={t('pages.kycReturn.successIntro')}
        details={t('pages.kycReturn.successDetails')}
        onClose={leave}
        onContinue={leave}
        openAppUrl={openAppUrl}
      />
    );
  }

  if (status === 'inReview') {
    return (
      <StatusScreen
        tone="review"
        title={t('pages.kycReturn.pendingTitle')}
        intro={t('pages.kycReturn.inReviewIntro')}
        details={t('pages.kycReturn.inReviewDetails')}
        onClose={leave}
        onContinue={leave}
        openAppUrl={openAppUrl}
      />
    );
  }

  if (status === 'rejected' || status === 'expired') {
    return (
      <StatusScreen
        tone="pending"
        title={t('pages.kycReturn.title')}
        intro={t(status === 'rejected' ? 'pages.kycReturn.rejected' : 'pages.kycReturn.expired')}
        onClose={leave}
        onContinue={leave}
        openAppUrl={openAppUrl}
      />
    );
  }

  if (status === 'pending' || status === 'uninitiated' || status === 'incomplete') {
    const isIncomplete = status === 'incomplete';
    return (
      <StatusScreen
        tone="pending"
        title={t(isIncomplete ? 'pages.kycReturn.incompleteTitle' : 'pages.kycReturn.pendingTitle')}
        intro={t(isIncomplete ? 'pages.kycReturn.incomplete' : 'pages.kycReturn.pendingIntro')}
        details={t('pages.kycReturn.pendingDetails')}
        onClose={leave}
        onContinue={leave}
        openAppUrl={openAppUrl}
      />
    );
  }

  // Failed, unauthenticated and checking keep the simple status card.
  const isChecking = status === 'checking';
  const messageKey = status === 'unauthenticated'
    ? 'pages.kycReturn.unauthenticated'
    : status === 'failed'
      ? 'pages.kycReturn.failed'
      : 'pages.kycReturn.checking';

  return (
    <main className="min-h-[70vh] bg-gray-50 px-4 py-16 flex items-center justify-center">
      <section className="w-full max-w-lg bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
          {isChecking ? (
            <ShieldCheck className="h-8 w-8 text-blue-600 animate-pulse" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-8 w-8 text-blue-600" aria-hidden="true" />
          )}
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{t('pages.kycReturn.title')}</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600" aria-live="polite">
          {t(messageKey)}
        </p>
        {openAppUrl && (
          <a
            href={openAppUrl}
            className="mt-7 block w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t('pages.kycReturn.openApp')}
          </a>
        )}
        {!isChecking && (
          <button
            type="button"
            onClick={leave}
            className="mt-7 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t(goHome ? 'pages.kycReturn.home' : 'pages.kycReturn.profile')}
          </button>
        )}
      </section>
    </main>
  );
}
