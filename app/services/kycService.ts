import api from './Api';

export type KycStatus = 'uninitiated' | 'pending' | 'approved' | 'rejected' | 'failed';

export type KycStatusResponse = {
  kycStatus: KycStatus;
  kycUpdatedAt: string | null;
  kycProvider: string | null;
  isVerified: boolean;
};

export const getDiditKycStatus = async (): Promise<KycStatusResponse> => {
  const response = await api.get<KycStatusResponse>('/kyc/status');
  return response.data;
};
