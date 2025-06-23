
import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAdvancedCropAdvice, cropKnowledgeBase } from '@/utils/cropKnowledge';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: 'Hello! I\'m your advanced AI farming assistant with comprehensive crop knowledge. I can help you with:\n\n🌾 Crop diseases & treatments\n💧 Irrigation & fertilizer advice\n🐛 Pest management\n🌡️ Weather-related guidance\n💰 Market prices & strategies\n🌱 Soil health management\n\nAsk me anything about farming!', 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const { t, language } = useLanguage();

  const getIntelligentResponse = (userQuery: string): string => {
    const query = userQuery.toLowerCase();
    
    // Check for specific crop queries
    for (const [cropName, cropData] of Object.entries(cropKnowledgeBase.crops)) {
      if (query.includes(cropName)) {
        if (query.includes('disease') || query.includes('problem')) {
          return `Common diseases in ${cropData.name}: ${cropData.diseases.join(', ')}. For treatment, apply appropriate fungicides and maintain proper field hygiene. Would you like specific treatment recommendations?`;
        }
        if (query.includes('fertilizer') || query.includes('nutrient')) {
          return `For ${cropData.name}: Apply ${cropData.fertilizer}. Best time is during ${cropData.sowingTime}. Split application recommended for better nutrient use efficiency.`;
        }
        if (query.includes('when') || query.includes('time')) {
          return `${cropData.name} farming schedule:\n🌱 Sowing: ${cropData.sowingTime}\n🌾 Harvest: ${cropData.harvestTime}\n🌡️ Temperature: ${cropData.temperature}\n💧 Water: ${cropData.waterRequirement}`;
        }
        return `${cropData.name} overview:\n🏷️ Season: ${cropData.season}\n🌱 Sowing: ${cropData.sowingTime}\n🌾 Harvest: ${cropData.harvestTime}\n💧 Water need: ${cropData.waterRequirement}\n🌡️ Temperature: ${cropData.temperature}\n📈 Expected yield: ${cropData.yield}`;
      }
    }

    // Disease-specific responses
    if (query.includes('yellow') || query.includes('पीला') || query.includes('पिवळा')) {
      return getAdvancedCropAdvice('yellow leaves');
    }
    
    if (query.includes('brown') || query.includes('भूरा') || query.includes('तपकिरी')) {
      return getAdvancedCropAdvice('brown spots');
    }

    // Weather queries
    if (query.includes('weather') || query.includes('rain') || query.includes('मौसम') || query.includes('हवामान')) {
      return "Weather impact on crops:\n🌧️ Excess rain: Ensure proper drainage, apply preventive fungicides\n☀️ High temperature: Use mulching, increase irrigation frequency\n🌨️ Cold weather: Use protective covers, reduce irrigation\n💨 Strong winds: Provide support to tall crops\n\nMonitor 7-day weather forecast for better planning!";
    }

    // Pest management
    if (query.includes('pest') || query.includes('insect') || query.includes('कीट') || query.includes('किडे')) {
      return "Integrated Pest Management (IPM):\n🔍 Weekly monitoring essential\n🦋 Use pheromone traps for early detection\n🌿 Neem oil (3ml/liter) for organic control\n🐛 Release beneficial insects like Trichogramma\n💊 Chemical pesticides only when threshold reached\n🔄 Rotate between different chemical groups\n\nWhich specific pest are you dealing with?";
    }

    // Market and pricing
    if (query.includes('price') || query.includes('market') || query.includes('भाव') || query.includes('बाजार')) {
      return "Market intelligence:\n📊 Check daily prices on eNAM portal\n🏪 Compare local mandi vs online prices\n📦 Proper storage increases price by 15-20%\n🤝 Join FPOs for better bargaining power\n📋 Contract farming ensures fixed prices\n💼 Value addition doubles profit margins\n\nWould you like current price trends for any specific crop?";
    }

    // Fertilizer guidance
    if (query.includes('fertilizer') || query.includes('nutrient') || query.includes('खाद') || query.includes('खत')) {
      return getAdvancedCropAdvice('fertilizer');
    }

    // Irrigation queries
    if (query.includes('water') || query.includes('irrigation') || query.includes('पानी') || query.includes('सिंचाई')) {
      return getAdvancedCropAdvice('irrigation');
    }

    // Soil health
    if (query.includes('soil') || query.includes('मिट्टी') || query.includes('माती')) {
      return getAdvancedCropAdvice('soil');
    }

    // Organic farming
    if (query.includes('organic') || query.includes('natural') || query.includes('जैविक')) {
      return "Organic farming practices:\n🌱 Vermicompost: 2-3 tonnes/hectare\n🍃 Green manuring with legumes\n🔄 Crop rotation prevents soil depletion\n🐛 Biological pest control using beneficial insects\n🌿 Neem, turmeric for natural pesticides\n💚 Certified organic gets 20-30% premium prices\n\nTransition period: 3 years for certification";
    }

    // Technology and modern farming
    if (query.includes('technology') || query.includes('modern') || query.includes('तकनीक')) {
      return "Modern farming technology:\n📱 Soil sensors for real-time monitoring\n🛰️ Satellite imaging for crop health\n🚜 GPS-guided tractors for precision farming\n💧 Automated drip irrigation systems\n🌡️ Weather stations for micro-climate data\n📊 Farm management software for record keeping\n\nWhich technology interests you most?";
    }

    // Default intelligent response
    return "I understand you're asking about farming. Here's what I can help you with:\n\n🌾 **Crop Management**: Disease identification, treatment recommendations\n💧 **Irrigation**: Water scheduling, conservation techniques\n🌱 **Nutrition**: Fertilizer recommendations, soil health\n🐛 **Pest Control**: IPM strategies, organic solutions\n🌤️ **Weather**: Climate adaptation, seasonal planning\n💰 **Economics**: Market prices, profit optimization\n\nCould you please be more specific about your farming challenge? For example:\n• \"My wheat leaves are turning yellow\"\n• \"When should I apply fertilizer to rice?\"\n• \"How to control pests in tomato?\"\n• \"Current market price of onions\"";
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage: Message = { 
      id: Date.now(), 
      text: message, 
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Get intelligent AI response
    setTimeout(() => {
      const botResponse: Message = { 
        id: Date.now() + 1, 
        text: getIntelligentResponse(message), 
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
    
    setMessage('');
  };

  const quickQuestions = [
    'My crop leaves are turning yellow',
    'When to apply fertilizer?',
    'How to control pests naturally?',
    'Current market prices',
    'Weather impact on crops',
    'Soil health improvement',
    'Organic farming methods',
    'Disease identification help'
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-lg"
        size="lg"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-green-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-semibold">AI Farm Expert</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-green-700">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg text-sm whitespace-pre-line ${
                  msg.sender === 'user' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1">
              {quickQuestions.slice(0, 4).map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-6 px-2"
                  onClick={() => {
                    setMessage(question);
                    setTimeout(sendMessage, 100);
                  }}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about farming..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} size="sm" className="bg-green-600 hover:bg-green-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};
