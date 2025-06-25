
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAdvancedCropAdvice } from '@/utils/cropKnowledge';

export const GlobalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const { t, language } = useLanguage();

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      // Simulate search results
      const mockResults = [
        language === 'hi' ? 'गेहूं की बुवाई का समय' : language === 'mr' ? 'गहूची लागवड करण्याची वेळ' : 'Wheat sowing time',
        language === 'hi' ? 'धान की बीमारियां' : language === 'mr' ? 'भाताचे रोग' : 'Rice diseases',
        language === 'hi' ? 'मक्का में कीड़े' : language === 'mr' ? 'मक्यामध्ये किडे' : 'Corn pests',
        language === 'hi' ? 'खाद कब डालें' : language === 'mr' ? 'खत कधी टाकावे' : 'When to apply fertilizer'
      ].filter(result => 
        result.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(mockResults);
    } else {
      setResults([]);
    }
  };

  if (!isOpen) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-20 right-4 z-40 bg-white dark:bg-gray-800 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Search className="w-4 h-4" />
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
      <Card className="w-full max-w-2xl mx-4 dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Search className="w-5 h-5 text-gray-400" />
            <Input
              placeholder={language === 'hi' ? 'खोजें...' : language === 'mr' ? 'शोधा...' : 'Search...'}
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="border-none focus:ring-0 text-lg"
              autoFocus
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {results.length > 0 && (
            <div className="space-y-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  onClick={() => {
                    console.log('Search result clicked:', result);
                    setIsOpen(false);
                  }}
                >
                  <p className="text-gray-700 dark:text-gray-300">{result}</p>
                </div>
              ))}
            </div>
          )}
          
          {query && results.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                {language === 'hi' ? 'कोई परिणाम नहीं मिला' : language === 'mr' ? 'कोणताही परिणाम सापडला नाही' : 'No results found'}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
