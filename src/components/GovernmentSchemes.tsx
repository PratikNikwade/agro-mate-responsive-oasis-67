
import { FileText, IndianRupee, Calendar, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export const GovernmentSchemes = () => {
  const { t } = useLanguage();

  const schemes = [
    {
      id: 1,
      name: 'PM-KISAN Samman Nidhi',
      description: 'Direct income support to farmer families across the country',
      amount: '₹6,000/year',
      eligibility: 'Small & Marginal Farmers',
      deadline: '31st March 2024',
      status: 'Active',
      type: 'Financial Support',
      documents: ['Aadhaar Card', 'Bank Details', 'Land Records']
    },
    {
      id: 2,
      name: 'Crop Insurance Scheme',
      description: 'Comprehensive risk solution for production risks in agriculture',
      amount: 'Up to ₹2,00,000',
      eligibility: 'All Farmers',
      deadline: '15th April 2024',
      status: 'Open',
      type: 'Insurance',
      documents: ['Crop Details', 'Land Documents', 'Bank Account']
    },
    {
      id: 3,
      name: 'Soil Health Card Scheme',
      description: 'Promote soil test based nutrient management',
      amount: 'Free Testing',
      eligibility: 'All Farmers',
      deadline: 'Ongoing',
      status: 'Active',
      type: 'Technical Support',
      documents: ['Farmer ID', 'Land Records']
    },
    {
      id: 4,
      name: 'Kisan Credit Card',
      description: 'Affordable credit for agriculture and allied activities',
      amount: 'Up to ₹3,00,000',
      eligibility: 'Farmers with Land',
      deadline: 'Ongoing',
      status: 'Active',
      type: 'Credit',
      documents: ['Identity Proof', 'Address Proof', 'Land Documents']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Open': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Financial Support': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Insurance': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Technical Support': return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300';
      case 'Credit': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Government Schemes for Farmers</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore various government initiatives and schemes designed to support farmers and boost agricultural productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schemes.map((scheme) => (
            <Card key={scheme.id} className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{scheme.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{scheme.description}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <Badge className={getStatusColor(scheme.status)}>
                      {scheme.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className={getTypeColor(scheme.type)}>
                    {scheme.type}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <IndianRupee className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium">{scheme.amount}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">{scheme.deadline}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Eligibility:</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{scheme.eligibility}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Required Documents:</p>
                  <div className="flex flex-wrap gap-1">
                    {scheme.documents.map((doc, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20">
            View All Schemes
          </Button>
        </div>
      </div>
    </section>
  );
};
