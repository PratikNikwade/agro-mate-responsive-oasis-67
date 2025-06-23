
import { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, MessageCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OfflineNotice } from '@/components/OfflineNotice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your agricultural assistant. You can ask me questions about farming, crop diseases, weather, or market prices in Hindi, Marathi, or English.',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const { t, language } = useLanguage();

  const startListening = () => {
    setIsListening(true);
    
    // Simulate listening and speech recognition
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: language === 'hi' ? 'मेरी फसल में पत्तियां पीली हो रही हैं। क्या करूं?' : 
              language === 'mr' ? 'माझ्या पिकाची पाने पिवळी होत आहेत. काय करावे?' :
              'My crop leaves are turning yellow. What should I do?',
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setIsListening(false);

      // Simulate AI response
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          text: language === 'hi' ? 'पत्तियों का पीला होना नाइट्रोजन की कमी या पानी की अधिकता के कारण हो सकता है। मिट्टी की जांच कराएं और जल निकासी की व्यवस्था करें।' :
                language === 'mr' ? 'पानांचे पिवळे होणे नायट्रोजनची कमतरता किंवा जास्त पाण्यामुळे होऊ शकते. जमिनीची तपासणी करा आणि पाणी निघण्याची व्यवस्था करा.' :
                'Yellow leaves can indicate nitrogen deficiency or overwatering. Test your soil and ensure proper drainage. Consider applying nitrogen-rich fertilizer.',
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, response]);
        
        // Text to speech
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(response.text);
          utterance.lang = language === 'hi' ? 'hi-IN' : language === 'mr' ? 'mr-IN' : 'en-US';
          setIsSpeaking(true);
          utterance.onend = () => setIsSpeaking(false);
          speechSynthesis.speak(utterance);
        }
      }, 1500);
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <OfflineNotice />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('nav.voice')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Ask questions about farming in your preferred language
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Voice Controls */}
              <div className="lg:col-span-1">
                <Card className="dark:bg-gray-800 dark:border-gray-700 sticky top-24">
                  <CardHeader>
                    <CardTitle className="dark:text-white text-center">Voice Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="relative">
                      <Button
                        size="lg"
                        className={`w-24 h-24 rounded-full ${
                          isListening 
                            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                            : 'bg-green-600 hover:bg-green-700'
                        }`}
                        onClick={isListening ? stopListening : startListening}
                      >
                        {isListening ? (
                          <MicOff className="w-8 h-8" />
                        ) : (
                          <Mic className="w-8 h-8" />
                        )}
                      </Button>
                      {isListening && (
                        <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {isListening ? 'Listening...' : 'Tap to start speaking'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Supported: English, हिंदी, मराठी
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      onClick={toggleSpeech}
                      disabled={!isSpeaking}
                      className="w-full"
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-4 h-4 mr-2" />
                          Stop Speaking
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 mr-2" />
                          Text-to-Speech Ready
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Chat Messages */}
              <div className="lg:col-span-2">
                <Card className="dark:bg-gray-800 dark:border-gray-700 h-96">
                  <CardHeader>
                    <CardTitle className="dark:text-white flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Conversation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 overflow-y-auto space-y-4 pr-2">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isUser
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))}
                      {isListening && (
                        <div className="flex justify-end">
                          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Questions */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Questions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      language === 'hi' ? 'मौसम कैसा रहेगा?' : language === 'mr' ? 'हवामान कसे असेल?' : 'How will the weather be?',
                      language === 'hi' ? 'फसल में कीड़े लगे हैं' : language === 'mr' ? 'पिकामध्ये किडे लागले आहेत' : 'My crop has pests',
                      language === 'hi' ? 'मंडी भाव क्या है?' : language === 'mr' ? 'मंडी भाव काय आहे?' : 'What are market prices?',
                      language === 'hi' ? 'खाद कब डालें?' : language === 'mr' ? 'खत कधी टाकावे?' : 'When to apply fertilizer?'
                    ].map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-left justify-start h-auto p-4 border-gray-300 dark:border-gray-600"
                        onClick={() => {
                          const newMessage: Message = {
                            id: Date.now().toString(),
                            text: question,
                            isUser: true,
                            timestamp: new Date()
                          };
                          setMessages(prev => [...prev, newMessage]);
                        }}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VoiceAssistant;
