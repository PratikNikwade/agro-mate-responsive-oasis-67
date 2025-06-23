
import { useState, useEffect } from 'react';
import { Users, Eye, TrendingUp, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const LiveAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    activeUsers: 42,
    pageViews: 1248,
    conversionRate: 12.5,
    countries: 8
  });
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        activeUsers: Math.max(1, prev.activeUsers + Math.floor(Math.random() * 10) - 5),
        pageViews: prev.pageViews + Math.floor(Math.random() * 5),
        conversionRate: Math.max(0, prev.conversionRate + (Math.random() - 0.5) * 2),
        countries: prev.countries + (Math.random() > 0.9 ? 1 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Live Analytics</h2>
          <p className="text-gray-600 dark:text-gray-300">Real-time insights from our platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{analytics.activeUsers}</p>
              </div>
              <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="mt-2 flex items-center text-sm text-green-600 dark:text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              Live now
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Page Views</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{analytics.pageViews.toLocaleString()}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Today</p>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{analytics.conversionRate.toFixed(1)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">↗ +2.1% from yesterday</p>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Countries</p>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{analytics.countries}</p>
              </div>
              <Globe className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Active regions</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
