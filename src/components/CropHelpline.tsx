
import { Phone, MapPin, Clock, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const CropHelpline = () => {
  const { t } = useLanguage();

  const helplines = [
    {
      id: 1,
      name: 'Agricultural Extension Center',
      phone: '+91-9876543210',
      location: 'District Agriculture Office, Mumbai',
      hours: '24/7 Available',
      distance: '2.5 km',
      specialists: ['Crop Disease', 'Pest Control', 'Soil Health']
    },
    {
      id: 2,
      name: 'Farmer Support Center',
      phone: '+91-9876543211',
      location: 'Krishi Vigyan Kendra, Pune',
      hours: '8 AM - 8 PM',
      distance: '5.2 km',
      specialists: ['Irrigation', 'Seeds', 'Fertilizers']
    },
    {
      id: 3,
      name: 'Crop Emergency Helpline',
      phone: '+91-9876543212',
      location: 'State Agriculture Department',
      hours: '24/7 Emergency',
      distance: '8.1 km',
      specialists: ['Emergency Response', 'Weather Alerts', 'Crop Insurance']
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nearest Crop Helpline Centers</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get immediate assistance from agricultural experts in your area. Available 24/7 for emergency support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helplines.map((center) => (
            <Card key={center.id} className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{center.name}</h3>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">{center.distance}</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="h-4 w-4 mr-3 text-green-600 dark:text-green-400" />
                    <span className="text-sm">{center.phone}</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-3 text-green-600 dark:text-green-400" />
                    <span className="text-sm">{center.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-3 text-green-600 dark:text-green-400" />
                    <span className="text-sm">{center.hours}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Users className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Specialists:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {center.specialists.map((specialist, index) => (
                      <span key={index} className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        {specialist}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    Directions
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
