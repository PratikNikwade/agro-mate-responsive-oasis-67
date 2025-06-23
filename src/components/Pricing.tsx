
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small farms and individual farmers",
      features: [
        "Up to 10 acres monitoring",
        "Basic weather alerts",
        "Crop health tracking",
        "Mobile app access",
        "Email support",
        "Monthly reports"
      ],
      popular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for medium-sized farms and agricultural businesses",
      features: [
        "Up to 100 acres monitoring",
        "Advanced weather intelligence",
        "AI-powered disease detection",
        "Soil analysis & recommendations",
        "Priority support",
        "Real-time alerts",
        "Custom reporting",
        "Integration with farm equipment"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large agricultural operations and cooperatives",
      features: [
        "Unlimited acres monitoring",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced analytics dashboard",
        "API access",
        "White-label options",
        "On-site training",
        "Custom integrations"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Pricing Plans
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with a free trial on any plan. No credit card required. 
            Scale as your farm grows with our flexible pricing options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-500 border-2 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No setup fees or hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              No long-term contracts
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              30-day money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
