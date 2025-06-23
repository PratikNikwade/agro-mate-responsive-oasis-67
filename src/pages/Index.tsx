
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <OfflineNotice />
      <Hero />
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
    </div>
  );
};

export default Index;
