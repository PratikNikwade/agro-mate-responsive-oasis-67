
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OfflineNotice } from '@/components/OfflineNotice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactUs = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9876543210', '+91 8765432109'],
      description: 'Mon-Sat, 9 AM - 6 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@agromate.in', 'hello@agromate.in'],
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Tech Park, Pune', 'Maharashtra, India 411001'],
      description: 'Visit us during business hours'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: ['Monday - Saturday', '9:00 AM - 6:00 PM IST'],
      description: 'Emergency support available 24/7'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <OfflineNotice />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Have questions about AgroMate? Need support? We're here to help you succeed in your farming journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      className="dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    We're committed to supporting farmers with the best possible service. 
                    Choose the most convenient way to reach us.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="flex items-start space-x-4 pt-6">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-600 dark:text-gray-300">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {info.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* FAQ Link */}
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Quick Questions?
                    </h3>
                    <p className="text-green-700 dark:text-green-300 text-sm mb-4">
                      Check out our frequently asked questions for instant answers to common queries.
                    </p>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400">
                      View FAQ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Support Promise */}
            <div className="mt-16 text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Support Promise
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We understand that farming doesn't wait. That's why we're committed to providing 
                fast, knowledgeable support when you need it most. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
