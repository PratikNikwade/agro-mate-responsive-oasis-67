
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { OfflineNotice } from "@/components/OfflineNotice";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <OfflineNotice />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
