import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { LiveAnalytics } from "@/components/LiveAnalytics";
import { CropHelpline } from "@/components/CropHelpline";
import { GovernmentSchemes } from "@/components/GovernmentSchemes";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { OfflineNotice } from "@/components/OfflineNotice";
import { AIChatbot } from "@/components/AIChatbot";
import { CropMonitoring } from "@/components/CropMonitoring";
import { CropDatabase } from "@/components/CropDatabase";
import { FloatingActionButtons } from "@/components/FloatingActionButtons";
import { GlobalSearch } from "@/components/GlobalSearch";
import { FarmDashboard } from "@/components/FarmDashboard";
import { SeasonalReminders } from "@/components/SeasonalReminders";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <OfflineNotice />
      <GlobalSearch />
      <Hero />
      
      {/* New Farm Dashboard Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Farm Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Real-time insights and personalized recommendations for your farm
            </p>
          </div>
          <FarmDashboard />
        </div>
      </section>

      {/* Seasonal Reminders Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SeasonalReminders />
          </div>
        </div>
      </section>

      <Services />
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CropMonitoring />
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CropDatabase />
        </div>
      </section>
      <LiveAnalytics />
      <About />
      <CropHelpline />
      <GovernmentSchemes />
      <Pricing />
      <Contact />
      <Footer />
      <AIChatbot />
      <FloatingActionButtons />
    </div>
  );
};

export default Index;
