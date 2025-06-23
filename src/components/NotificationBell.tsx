
import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useLanguage } from '@/contexts/LanguageContext';

export const NotificationBell = () => {
  const [notifications] = useState([
    { id: 1, title: 'Weather Alert', message: 'Heavy rain expected tomorrow', time: '2 min ago' },
    { id: 2, title: 'Crop Update', message: 'Wheat prices increased by 5%', time: '1 hour ago' },
    { id: 3, title: 'New Feature', message: 'AI crop detection is now live', time: '2 hours ago' },
  ]);
  const { t } = useLanguage();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">
          <Bell className="h-4 w-4" />
          {notifications.length > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 hover:bg-red-500">
              {notifications.length}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" align="end">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-sm text-gray-900 dark:text-white">{notification.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{notification.time}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
