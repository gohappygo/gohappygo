import api from './Api';

export type OnboardingClient = 'web' | 'mobile';

export interface OnboardingLinkResponse {
  url: string;
}

export interface AccountStatusResponse {
  accountId: string | null;
  status: string;
  chargesEnabled: boolean;
  transfersEnabled: boolean;
  detailsSubmitted: boolean;
}

const normalizeApiError = (error: unknown) => {
  if (typeof error === 'object' && error !== null && 'response' in error) {
    const response = (error as { response?: { data?: unknown } }).response;
    return response?.data || error;
  }

  return error;
};

export const getOnboardingLink = async (
  client: OnboardingClient = 'web'
): Promise<OnboardingLinkResponse> => {
  try {
    const response = await api.get('/stripe/onboarding-link', { params: { client } });
    return response.data;
  } catch (error: unknown) {
    console.error('Error getting onboarding link:', error);
    throw normalizeApiError(error);
  }
};

export const getAccountStatus = async (): Promise<AccountStatusResponse> => {
  try {
    const response = await api.get('/stripe/account-status');
    return response.data;
  } catch (error: unknown) {
    console.error('Error getting account status:', error);
    throw normalizeApiError(error);
  }
};
