
import { useState, useEffect } from 'react';
import { Calendar, Bell, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface Reminder {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  category: 'planting' | 'watering' | 'fertilizing' | 'harvesting';
  completed: boolean;
}

export const SeasonalReminders = () => {
  const { language } = useLanguage();
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: language === 'hi' ? 'गेहूं की बुवाई' : language === 'mr' ? 'गहूची लागवड' : 'Wheat Sowing',
      description: language === 'hi' ? 'अक्टूबर-नवंबर में गेहूं की बुवाई का समय' : language === 'mr' ? 'ऑक्टोबर-नोव्हेंबरमध्ये गहूची लागवड करण्याची वेळ' : 'Time for wheat sowing in October-November',
      dueDate: '2024-10-15',
      category: 'planting',
      completed: false
    },
    {
      id: 2,
      title: language === 'hi' ? 'धान की कटाई' : language === 'mr' ? 'भाताची कापणी' : 'Rice Harvesting',
      description: language === 'hi' ? 'धान की फसल कटाई के लिए तैयार' : language === 'mr' ? 'भाताचे पीक कापणीसाठी तयार' : 'Rice crop ready for harvesting',
      dueDate: '2024-11-01',
      category: 'harvesting',
      completed: false
    },
    {
      id: 3,
      title: language === 'hi' ? 'सिंचाई करें' : language === 'mr' ? 'पाणी द्या' : 'Irrigation',
      description: language === 'hi' ? 'फसलों में पानी दें' : language === 'mr' ? 'पिकांना पाणी द्या' : 'Water the crops',
      dueDate: '2024-12-26',
      category: 'watering',
      completed: false
    }
  ]);

  const toggleReminder = (id: number) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, completed: !reminder.completed }
          : reminder
      )
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'planting': return 'text-green-600';
      case 'watering': return 'text-blue-600';
      case 'fertilizing': return 'text-yellow-600';
      case 'harvesting': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const upcomingReminders = reminders.filter(r => !r.completed).slice(0, 3);

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-white flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          {language === 'hi' ? 'मौसमी रिमाइंडर' : language === 'mr' ? 'हंगामी स्मरणपत्रे' : 'Seasonal Reminders'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingReminders.map((reminder) => (
            <div
              key={reminder.id}
              className={`p-4 rounded-lg border transition-all ${
                reminder.completed 
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                  : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className={`font-medium ${reminder.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                    {reminder.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {reminder.description}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <Bell className={`w-4 h-4 ${getCategoryColor(reminder.category)}`} />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(reminder.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleReminder(reminder.id)}
                  className={reminder.completed ? 'text-green-600' : 'text-gray-400'}
                >
                  <CheckCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
