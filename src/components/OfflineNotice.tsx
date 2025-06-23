
import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const OfflineNotice = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { t } = useLanguage();

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-orange-500 text-white px-4 py-2 text-sm">
      <div className="container mx-auto flex items-center justify-center space-x-2">
        <WifiOff className="w-4 h-4" />
        <span>{t('common.offline')}</span>
      </div>
    </div>
  );
};
