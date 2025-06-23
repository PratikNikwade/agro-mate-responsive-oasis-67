
import { ArrowRight, Leaf, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                <Leaf className="w-4 h-4 mr-2" />
                Smart Agriculture Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight font-sans">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/scan-crop">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-lg px-8 py-3 w-full sm:w-auto">
                  {t('hero.startTrial')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20 text-lg px-8 py-3">
                {t('hero.watchDemo')}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.activeFarms')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">25%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.yieldIncrease')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">30%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.costReduction')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Farm Dashboard</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">HEALTHY</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Crop Health</div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">OPTIMAL</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">7.2</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Soil pH</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Moisture Level</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
