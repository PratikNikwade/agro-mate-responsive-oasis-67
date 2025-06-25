
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Thermometer, Droplets, Sun, Wind, Bell, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const FarmDashboard = () => {
  const { t, language } = useLanguage();
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 28,
    humidity: 65,
    rainfall: 12,
    windSpeed: 15
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'reminder',
      message: language === 'hi' ? 'आज गेहूं की सिंचाई का समय है' : language === 'mr' ? 'आज गहूचे पाणी देण्याची वेळ आहे' : 'Time to water your wheat crop today',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'alert',
      message: language === 'hi' ? 'मौसम विभाग ने बारिश की चेतावनी दी है' : language === 'mr' ? 'हवामान खात्याने पावसाचा इशारा दिला आहे' : 'Weather department issued rain warning',
      priority: 'high'
    }
  ]);

  const quickStats = [
    {
      title: language === 'hi' ? 'फसल स्वास्थ्य' : language === 'mr' ? 'पीक आरोग्य' : 'Crop Health',
      value: '94%',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: language === 'hi' ? 'मिट्टी नमी' : language === 'mr' ? 'मातीची ओलावा' : 'Soil Moisture',
      value: '72%',
      icon: Droplets,
      color: 'text-blue-600'
    },
    {
      title: language === 'hi' ? 'तापमान' : language === 'mr' ? 'तापमान' : 'Temperature',
      value: `${currentWeather.temperature}°C`,
      icon: Thermometer,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white flex items-center">
              <Sun className="w-5 h-5 mr-2" />
              {language === 'hi' ? 'आज का मौसम' : language === 'mr' ? 'आजचे हवामान' : 'Today\'s Weather'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Thermometer className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {currentWeather.temperature}°C
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {currentWeather.humidity}%
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {currentWeather.windSpeed} km/h
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {currentWeather.rainfall}mm
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              {language === 'hi' ? 'आज की सूचनाएं' : language === 'mr' ? 'आजच्या सूचना' : 'Today\'s Notifications'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg flex items-start space-x-2 ${
                    notification.priority === 'high' 
                      ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' 
                      : 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                  }`}
                >
                  <AlertTriangle className={`w-4 h-4 mt-0.5 ${notification.priority === 'high' ? 'text-red-500' : 'text-yellow-500'}`} />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {notification.message}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
