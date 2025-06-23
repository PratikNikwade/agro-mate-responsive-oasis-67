
import { useState, useEffect } from 'react';
import { Activity, Thermometer, Droplets, Sun, Wind, Leaf, AlertTriangle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface CropData {
  id: string;
  name: string;
  health: 'excellent' | 'good' | 'average' | 'poor';
  temperature: number;
  humidity: number;
  soilMoisture: number;
  growth: number;
  diseases: string[];
  recommendations: string[];
}

export const CropMonitoring = () => {
  const [crops, setCrops] = useState<CropData[]>([]);
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate real-time crop data
    const mockCrops: CropData[] = [
      {
        id: '1',
        name: 'Wheat',
        health: 'good',
        temperature: 22,
        humidity: 65,
        soilMoisture: 45,
        growth: 75,
        diseases: [],
        recommendations: ['Apply nitrogen fertilizer', 'Monitor for rust disease']
      },
      {
        id: '2',
        name: 'Rice',
        health: 'excellent',
        temperature: 28,
        humidity: 80,
        soilMoisture: 85,
        growth: 60,
        diseases: [],
        recommendations: ['Maintain water level', 'Apply potash fertilizer']
      },
      {
        id: '3',
        name: 'Corn',
        health: 'average',
        temperature: 25,
        humidity: 55,
        soilMoisture: 35,
        growth: 40,
        diseases: ['Leaf blight'],
        recommendations: ['Increase irrigation', 'Apply fungicide treatment']
      }
    ];
    setCrops(mockCrops);
    setSelectedCrop(mockCrops[0].id);
  }, []);

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'average': return 'bg-yellow-500';
      case 'poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const selectedCropData = crops.find(crop => crop.id === selectedCrop);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Real-Time Crop Monitoring
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Monitor your crops in real-time with advanced sensors and AI analytics
        </p>
      </div>

      {/* Crop Selection */}
      <div className="flex flex-wrap gap-2 justify-center">
        {crops.map((crop) => (
          <Button
            key={crop.id}
            variant={selectedCrop === crop.id ? "default" : "outline"}
            onClick={() => setSelectedCrop(crop.id)}
            className="flex items-center space-x-2"
          >
            <Leaf className="w-4 h-4" />
            <span>{crop.name}</span>
            <Badge variant="outline" className={`ml-2 ${getHealthColor(crop.health)} text-white border-0`}>
              {crop.health}
            </Badge>
          </Button>
        ))}
      </div>

      {selectedCropData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Temperature */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Temperature</p>
                  <p className="text-2xl font-bold dark:text-white">{selectedCropData.temperature}°C</p>
                </div>
                <Thermometer className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          {/* Humidity */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Humidity</p>
                  <p className="text-2xl font-bold dark:text-white">{selectedCropData.humidity}%</p>
                </div>
                <Droplets className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          {/* Soil Moisture */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Soil Moisture</p>
                  <p className="text-2xl font-bold dark:text-white">{selectedCropData.soilMoisture}%</p>
                </div>
                <Wind className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          {/* Growth Progress */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Growth</p>
                  <p className="text-2xl font-bold dark:text-white">{selectedCropData.growth}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedCropData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Disease Alerts */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span>Disease Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedCropData.diseases.length > 0 ? (
                <div className="space-y-2">
                  {selectedCropData.diseases.map((disease, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                      <span className="text-yellow-800 dark:text-yellow-200">{disease}</span>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        Alert
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-green-600 dark:text-green-400">No diseases detected</p>
              )}
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Activity className="w-5 h-5 text-blue-500" />
                <span>AI Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedCropData.recommendations.map((recommendation, index) => (
                  <div key={index} className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <span className="text-blue-800 dark:text-blue-200">{recommendation}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
