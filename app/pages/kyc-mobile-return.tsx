import { useEffect, useState } from 'react';
import KycReturn from './kyc-return';

const APP_RETURN_URL = 'gohappygo://connect/kyc/return';

export default function KycMobileReturn() {
  const [isMobileBrowser, setIsMobileBrowser] = useState(false);

  useEffect(() => {
    const mobile = /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
    setIsMobileBrowser(mobile);
    // The universal link opens the app directly when it is verified. When it is not,
    // this page loads in the browser: try the custom scheme, and keep a button as
    // fallback because browsers often block scripted navigation without a user gesture.
    if (mobile) window.location.href = APP_RETURN_URL;
  }, []);

  return <KycReturn openAppUrl={isMobileBrowser ? APP_RETURN_URL : undefined} />;
}
