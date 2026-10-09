import { isAxiosError } from 'axios';
import { AlertCircle, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { getDiditKycStatus, type KycStatus } from '~/services/kycService';

type ReturnStatus = KycStatus | 'checking' | 'unauthenticated';

export default function KycReturn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<ReturnStatus>('checking');

  useEffect(() => {
    const syncKycStatus = async () => {
      try {
        const response = await getDiditKycStatus();
        setStatus(response.kycStatus);
      } catch (error: unknown) {
        setStatus(
          isAxiosError(error) && error.response?.status === 401 ? 'unauthenticated' : 'failed'
        );
      }
    };

    void syncKycStatus();
  }, []);

  const isChecking = status === 'checking';
  const isApproved = status === 'approved';
  const isPending = status === 'pending' || status === 'uninitiated';
  const isRejected = status === 'rejected';
  const Icon = isApproved ? CheckCircle : isPending || isChecking ? Clock : AlertCircle;
  const iconColor = isApproved ? 'text-green-600' : isRejected ? 'text-red-600' : 'text-blue-600';
  const messageKey =
    status === 'approved'
      ? 'pages.kycReturn.approved'
      : isPending
        ? 'pages.kycReturn.pending'
        : status === 'rejected'
          ? 'pages.kycReturn.rejected'
          : status === 'unauthenticated'
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
            <Icon className={`h-8 w-8 ${iconColor}`} aria-hidden="true" />
          )}
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{t('pages.kycReturn.title')}</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600" aria-live="polite">
          {t(messageKey)}
        </p>
        {!isChecking && (
          <button
            type="button"
            onClick={() => navigate(status === 'unauthenticated' ? '/' : '/profile')}
            className="mt-7 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t(status === 'unauthenticated' ? 'pages.kycReturn.home' : 'pages.kycReturn.profile')}
          </button>
        )}
      </section>
    </main>
  );
}
