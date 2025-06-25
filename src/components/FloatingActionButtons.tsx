
import { useState } from 'react';
import { Camera, Mic, Plus, X, MessageCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const actions = [
    {
      icon: Camera,
      label: 'Scan Crop',
      path: '/scan-crop',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Mic,
      label: 'Voice Assistant',
      path: '/voice-assistant',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: TrendingUp,
      label: 'Market Prices',
      path: '/mandi-prices',
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`flex flex-col items-end space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <Link key={index} to={action.path}>
            <Button
              size="lg"
              className={`${action.color} rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              <action.icon className="w-6 h-6" />
            </Button>
          </Link>
        ))}
      </div>
      
      <Button
        size="lg"
        className={`rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 ${isOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </Button>
    </div>
  );
};
