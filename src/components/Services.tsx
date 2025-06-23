
import { Smartphone, BarChart3, CloudRain, Leaf, Users, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Smart Monitoring",
      description: "Real-time crop and soil monitoring with IoT sensors and mobile alerts for optimal farm management.",
      features: ["24/7 Monitoring", "Mobile Alerts", "IoT Integration"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced analytics and insights to optimize yield, reduce costs, and make data-driven decisions.",
      features: ["Yield Prediction", "Cost Analysis", "Performance Metrics"]
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Precise weather forecasting and climate data to plan farming activities and protect crops.",
      features: ["7-Day Forecast", "Climate Analysis", "Risk Assessment"]
    },
    {
      icon: Leaf,
      title: "Crop Management",
      description: "Comprehensive crop lifecycle management with disease detection and treatment recommendations.",
      features: ["Disease Detection", "Growth Tracking", "Treatment Plans"]
    },
    {
      icon: Users,
      title: "Farm Collaboration",
      description: "Connect with agricultural experts, share knowledge, and collaborate with other farmers.",
      features: ["Expert Network", "Knowledge Sharing", "Community Support"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies to protect your agricultural investments.",
      features: ["Risk Analysis", "Insurance Integration", "Emergency Alerts"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Agricultural Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From smart monitoring to data analytics, we provide comprehensive tools 
            to transform your farming operations and maximize productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
