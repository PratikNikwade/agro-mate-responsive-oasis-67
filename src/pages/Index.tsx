
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <OfflineNotice />
      <Hero />
      <Services />
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
