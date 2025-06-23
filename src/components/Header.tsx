
import { useState } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.scan', path: '/scan-crop' },
    { key: 'nav.prices', path: '/mandi-prices' },
    { key: 'nav.voice', path: '/voice-assistant' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
              AgroMate
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors ${
                  isActivePath(item.path) ? 'text-green-600 dark:text-green-400 font-medium' : ''
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-green-50 dark:bg-green-900' : ''}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('hi')} className={language === 'hi' ? 'bg-green-50 dark:bg-green-900' : ''}>
                  हिंदी
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('mr')} className={language === 'mr' ? 'bg-green-50 dark:bg-green-900' : ''}>
                  मराठी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="h-9 w-9 p-0">
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400">
              {t('nav.login')}
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors ${
                    isActivePath(item.path) ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              <div className="flex items-center justify-between px-3 pt-4">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={toggleTheme} className="h-9 w-9 p-0">
                    {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                        <Globe className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
                      <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-green-50 dark:bg-green-900' : ''}>
                        English
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage('hi')} className={language === 'hi' ? 'bg-green-50 dark:bg-green-900' : ''}>
                        हिंदी
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage('mr')} className={language === 'mr' ? 'bg-green-50 dark:bg-green-900' : ''}>
                        मराठी
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 w-full">
                  {t('nav.login')}
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 w-full">
                  {t('nav.getStarted')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
