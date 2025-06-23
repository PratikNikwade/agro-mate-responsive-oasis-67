
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.scan': 'Scan Crop',
    'nav.prices': 'Mandi Prices',
    'nav.voice': 'Voice Assistant',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',
    
    // Home page
    'hero.title': 'Revolutionize Your Agricultural Future',
    'hero.subtitle': 'Empower your farming with cutting-edge AI technology. AgroMate provides intelligent solutions for crop monitoring, disease detection, and sustainable farming practices.',
    'hero.startTrial': 'Start Free Trial',
    'hero.watchDemo': 'Watch Demo',
    'hero.activeFarms': 'Active Farms',
    'hero.yieldIncrease': 'Yield Increase',
    'hero.costReduction': 'Cost Reduction',
    
    // Services
    'services.title': 'Complete Agricultural Solutions',
    'services.subtitle': 'From smart monitoring to AI-powered diagnostics, we provide comprehensive tools to transform your farming operations.',
    'services.cropScan': 'Crop Disease Detection',
    'services.cropScanDesc': 'AI-powered image analysis to identify plant diseases and pests with instant treatment recommendations.',
    'services.mandiPrices': 'Real-time Market Prices',
    'services.mandiPricesDesc': 'Get current mandi prices for your crops with location-based market intelligence.',
    'services.voiceAssistant': 'Voice Assistant',
    'services.voiceAssistantDesc': 'Ask questions in Hindi, Marathi, or English and get instant agricultural advice.',
    
    // Common
    'common.offline': 'You are currently offline. Some features may not be available.',
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong. Please try again.',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
  },
  hi: {
    // Header
    'nav.home': 'होम',
    'nav.scan': 'फसल स्कैन',
    'nav.prices': 'मंडी भाव',
    'nav.voice': 'आवाज़ सहायक',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क करें',
    'nav.login': 'लॉगिन',
    'nav.getStarted': 'शुरू करें',
    
    // Home page
    'hero.title': 'अपने कृषि भविष्य में क्रांति लाएं',
    'hero.subtitle': 'अत्याधुनिक AI तकनीक से अपनी खेती को सशक्त बनाएं। एग्रोमेट फसल निगरानी, रोग पहचान और टिकाऊ खेती के लिए बुद्धिमान समाधान प्रदान करता है।',
    'hero.startTrial': 'मुफ्त ट्रायल शुरू करें',
    'hero.watchDemo': 'डेमो देखें',
    'hero.activeFarms': 'सक्रिय खेत',
    'hero.yieldIncrease': 'उत्पादन वृद्धि',
    'hero.costReduction': 'लागत में कमी',
    
    // Services
    'services.title': 'संपूर्ण कृषि समाधान',
    'services.subtitle': 'स्मार्ट निगरानी से लेकर AI-संचालित निदान तक, हम आपके खेती के कार्यों को बदलने के लिए व्यापक उपकरण प्रदान करते हैं।',
    'services.cropScan': 'फसल रोग पहचान',
    'services.cropScanDesc': 'पौधों की बीमारियों और कीटों की पहचान के लिए AI-संचालित चित्र विश्लेषण तुरंत उपचार सुझावों के साथ।',
    'services.mandiPrices': 'वास्तविक समय बाजार भाव',
    'services.mandiPricesDesc': 'स्थान-आधारित बाजार बुद्धिमत्ता के साथ अपनी फसलों के लिए वर्तमान मंडी भाव प्राप्त करें।',
    'services.voiceAssistant': 'आवाज़ सहायक',
    'services.voiceAssistantDesc': 'हिंदी, मराठी या अंग्रेजी में सवाल पूछें और तुरंत कृषि सलाह पाएं।',
    
    // Common
    'common.offline': 'आप वर्तमान में ऑफलाइन हैं। कुछ सुविधाएं उपलब्ध नहीं हो सकती हैं।',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'कुछ गलत हुआ। कृपया पुनः प्रयास करें।',
    'common.back': 'वापस',
    'common.next': 'अगला',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
  },
  mr: {
    // Header
    'nav.home': 'होम',
    'nav.scan': 'पीक स्कॅन',
    'nav.prices': 'मंडी भाव',
    'nav.voice': 'आवाज सहाय्यक',
    'nav.about': 'आमच्याबद्दल',
    'nav.contact': 'संपर्क करा',
    'nav.login': 'लॉगिन',
    'nav.getStarted': 'सुरुवात करा',
    
    // Home page
    'hero.title': 'तुमच्या कृषी भविष्यात क्रांती घडवा',
    'hero.subtitle': 'अत्याधुनिक AI तंत्रज्ञानाने तुमची शेती सशक्त करा। एग्रोमेट पीक निरीक्षण, रोग ओळख आणि शाश्वत शेतीसाठी बुद्धिमान उपाय प्रदान करते.',
    'hero.startTrial': 'मोफत चाचणी सुरू करा',
    'hero.watchDemo': 'डेमो पहा',
    'hero.activeFarms': 'सक्रिय शेत',
    'hero.yieldIncrease': 'उत्पादन वाढ',
    'hero.costReduction': 'खर्च कमी',
    
    // Services
    'services.title': 'संपूर्ण कृषी उपाय',
    'services.subtitle': 'स्मार्ट निरीक्षणापासून AI-चालित निदानापर्यंत, आम्ही तुमच्या शेती कामांना बदलण्यासाठी व्यापक साधने प्रदान करतो.',
    'services.cropScan': 'पीक रोग ओळख',
    'services.cropScanDesc': 'झाडांच्या आजारांची आणि कीडांची ओळख करण्यासाठी AI-चालित प्रतिमा विश्लेषण तत्काळ उपचार सूचनांसह.',
    'services.mandiPrices': 'वास्तविक वेळ बाजार भाव',
    'services.mandiPricesDesc': 'स्थान-आधारित बाजार बुद्धिमत्तेसह तुमच्या पिकांसाठी सध्याचे मंडी भाव मिळवा.',
    'services.voiceAssistant': 'आवाज सहाय्यक',
    'services.voiceAssistantDesc': 'मराठी, हिंदी किंवा इंग्रजीत प्रश्न विचारा आणि तत्काळ कृषी सल्ला मिळवा.',
    
    // Common
    'common.offline': 'तुम्ही सध्या ऑफलाइन आहात. काही वैशिष्ट्ये उपलब्ध नसू शकतात.',
    'common.loading': 'लोड होत आहे...',
    'common.error': 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.',
    'common.back': 'परत',
    'common.next': 'पुढे',
    'common.submit': 'सबमिट करा',
    'common.cancel': 'रद्द करा',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('agromate-language') as Language;
    if (savedLanguage && ['en', 'hi', 'mr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('agromate-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
