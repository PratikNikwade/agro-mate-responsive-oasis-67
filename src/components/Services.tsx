
import { Smartphone, BarChart3, CloudRain, Leaf, Users, Shield, Camera, TrendingUp, Mic } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Camera,
      title: t('services.cropScan'),
      description: t('services.cropScanDesc'),
      features: ["AI Disease Detection", "Instant Analysis", "Treatment Recommendations"],
      link: "/scan-crop"
    },
    {
      icon: TrendingUp,
      title: t('services.mandiPrices'),
      description: t('services.mandiPricesDesc'),
      features: ["Real-time Prices", "Location-based", "Market Trends"],
      link: "/mandi-prices"
    },
    {
      icon: Mic,
      title: t('services.voiceAssistant'),
      description: t('services.voiceAssistantDesc'),
      features: ["Multi-language Support", "Voice Recognition", "Expert Advice"],
      link: "/voice-assistant"
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Precise weather forecasting and climate data to plan farming activities and protect crops.",
      features: ["7-Day Forecast", "Climate Analysis", "Risk Assessment"],
      link: "/"
    },
    {
      icon: Users,
      title: "Farm Collaboration",
      description: "Connect with agricultural experts, share knowledge, and collaborate with other farmers.",
      features: ["Expert Network", "Knowledge Sharing", "Community Support"],
      link: "/"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies to protect your agricultural investments.",
      features: ["Risk Analysis", "Insurance Integration", "Emergency Alerts"],
      link: "/"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700 h-full cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                    <service.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
