
import { CheckCircle, Award, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Farmers Served" },
    { icon: Award, number: "5 Years", label: "Industry Experience" },
    { icon: CheckCircle, number: "99.9%", label: "System Uptime" },
    { icon: Zap, number: "40%", label: "Average Yield Boost" }
  ];

  const features = [
    "AI-powered crop disease detection",
    "Real-time soil moisture monitoring",
    "Weather-based irrigation scheduling",
    "Automated reporting and analytics",
    "Mobile-first responsive design",
    "24/7 customer support"
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                About AgroMate
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Pioneering the Future of
                <span className="text-green-600 block">Smart Agriculture</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                AgroMate combines cutting-edge technology with deep agricultural expertise to deliver 
                innovative solutions that help farmers increase productivity, reduce costs, and promote 
                sustainable farming practices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Learn More About Us
            </Button>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Why Choose AgroMate?
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-semibold">Proven Results</h3>
              </div>
              <p className="text-green-100 mb-4">
                Our technology has helped thousands of farmers achieve measurable improvements 
                in crop yield, resource efficiency, and overall farm profitability.
              </p>
              <div className="text-2xl font-bold">
                Join the agricultural revolution today!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
