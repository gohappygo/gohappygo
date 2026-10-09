import { useEffect } from 'react';
import KycReturn from './kyc-return';

export default function KycMobileReturn() {
  useEffect(() => {
    const isMobileBrowser = /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
    if (isMobileBrowser) window.location.href = 'gohappygo://connect/kyc/return';
  }, []);

  return <KycReturn />;
}
