
import { CheckCircle, Award, Users, Zap, Target, Heart, Shield } from "lucide-react";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OfflineNotice } from '@/components/OfflineNotice';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, number: "10,000+", label: "Farmers Served" },
    { icon: Award, number: "5 Years", label: "Industry Experience" },
    { icon: CheckCircle, number: "99.9%", label: "System Uptime" },
    { icon: Zap, number: "40%", label: "Average Yield Boost" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to solve real agricultural challenges"
    },
    {
      icon: Heart,
      title: "Farmer-First",
      description: "Every solution we build is designed with farmers' needs and constraints in mind"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our platform works consistently, even in areas with limited internet connectivity"
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      expertise: "Agricultural Engineering, AI Research",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Head of Technology",
      expertise: "Machine Learning, Computer Vision",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Amit Patel",
      role: "Agricultural Scientist",
      expertise: "Crop Pathology, Sustainable Farming",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <OfflineNotice />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About AgroMate
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing agriculture in rural India through AI-powered solutions that are 
              accessible, affordable, and designed for farmers by farmers.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed">
                To empower every farmer in India with intelligent, accessible technology that increases 
                crop yields, reduces costs, and promotes sustainable farming practices. We believe that 
                technology should bridge gaps, not create them.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  AgroMate was born from a simple observation: while technology was transforming cities, 
                  rural farmers were still struggling with age-old challenges. Our founder, Dr. Rajesh Kumar, 
                  grew up in a farming family and witnessed firsthand how lack of timely information and 
                  expert advice could devastate entire harvests.
                </p>
                <p>
                  In 2019, we started as a small team of engineers and agricultural scientists with a big dream: 
                  to make advanced agricultural knowledge accessible to every farmer, regardless of their location 
                  or economic status. We began by developing AI models that could diagnose crop diseases from 
                  simple smartphone photos.
                </p>
                <p>
                  Today, AgroMate serves over 10,000 farmers across India, providing real-time market prices, 
                  disease detection, weather alerts, and personalized farming advice in local languages. 
                  Our technology works on basic smartphones and in areas with limited internet connectivity.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop"
                alt="Farmers using technology"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="dark:text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join the Agricultural Revolution
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to transform your farming with AI-powered insights? 
              Join thousands of farmers who are already benefiting from AgroMate.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
              Get Started Today
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
