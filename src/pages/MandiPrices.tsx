
import { useState, useEffect } from 'react';
import { MapPin, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OfflineNotice } from '@/components/OfflineNotice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface PriceData {
  commodity: string;
  variety: string;
  market: string;
  price: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

const MandiPrices = () => {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  const mockPrices: PriceData[] = [
    { commodity: 'Wheat', variety: 'HD 2967', market: 'Pune APMC', price: 2150, unit: '₹/quintal', change: 2.5, trend: 'up' },
    { commodity: 'Rice', variety: 'Basmati', market: 'Mumbai APMC', price: 4200, unit: '₹/quintal', change: -1.2, trend: 'down' },
    { commodity: 'Cotton', variety: 'Hybrid', market: 'Akola APMC', price: 5800, unit: '₹/quintal', change: 3.8, trend: 'up' },
    { commodity: 'Soybean', variety: 'JS 335', market: 'Indore APMC', price: 4150, unit: '₹/quintal', change: 0.5, trend: 'stable' },
    { commodity: 'Sugarcane', variety: 'Co 86032', market: 'Kolhapur APMC', price: 280, unit: '₹/quintal', change: 1.8, trend: 'up' },
    { commodity: 'Onion', variety: 'Red', market: 'Nashik APMC', price: 1200, unit: '₹/quintal', change: -5.2, trend: 'down' },
  ];

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setLocation('Pune, Maharashtra');
        },
        () => {
          setLocation('Location unavailable');
        }
      );
    }

    // Simulate loading prices
    setTimeout(() => {
      setPrices(mockPrices);
      setIsLoading(false);
    }, 1500);
  }, []);

  const refreshPrices = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate price updates
      const updatedPrices = mockPrices.map(price => ({
        ...price,
        price: price.price + (Math.random() - 0.5) * 100,
        change: (Math.random() - 0.5) * 10,
        trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable' as 'up' | 'down' | 'stable'
      }));
      setPrices(updatedPrices);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <OfflineNotice />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('nav.prices')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Real-time market prices for agricultural commodities
              </p>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{location}</span>
                </div>
                <Button
                  onClick={refreshPrices}
                  variant="outline"
                  size="sm"
                  disabled={isLoading}
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prices.map((price, index) => (
                  <Card key={index} className="dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                        {price.commodity}
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {price.variety} • {price.market}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          ₹{Math.round(price.price).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {price.unit}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {price.trend === 'up' && (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        )}
                        {price.trend === 'down' && (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm font-medium ${
                          price.trend === 'up' ? 'text-green-600' :
                          price.trend === 'down' ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          {price.change > 0 ? '+' : ''}{price.change.toFixed(1)}%
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          from yesterday
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Prices are updated every 30 minutes. Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MandiPrices;
