
import { useState } from 'react';
import { Search, Leaf, Calendar, Thermometer, Droplets, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CropInfo {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  season: string;
  growthPeriod: string;
  waterRequirement: string;
  temperatureRange: string;
  soilType: string[];
  nutrients: string[];
  diseases: string[];
  pests: string[];
  harvestTime: string;
  yield: string;
  marketPrice: string;
  image: string;
}

export const CropDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cropDatabase: CropInfo[] = [
    {
      id: '1',
      name: 'Wheat',
      scientificName: 'Triticum aestivum',
      category: 'Cereal',
      season: 'Rabi',
      growthPeriod: '120-150 days',
      waterRequirement: 'Medium (450-650mm)',
      temperatureRange: '15-25°C',
      soilType: ['Loamy', 'Clay loam'],
      nutrients: ['Nitrogen', 'Phosphorus', 'Potassium'],
      diseases: ['Rust', 'Smut', 'Blight'],
      pests: ['Aphids', 'Termites', 'Cutworms'],
      harvestTime: 'March-April',
      yield: '25-30 quintals/hectare',
      marketPrice: '₹2,200-2,500/quintal',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'Rice',
      scientificName: 'Oryza sativa',
      category: 'Cereal',
      season: 'Kharif',
      growthPeriod: '90-120 days',
      waterRequirement: 'High (1000-1200mm)',
      temperatureRange: '20-35°C',
      soilType: ['Clay', 'Silty clay'],
      nutrients: ['Nitrogen', 'Phosphorus', 'Potassium', 'Zinc'],
      diseases: ['Blast', 'Bacterial blight', 'Sheath blight'],
      pests: ['Brown planthopper', 'Stem borer', 'Leaf folder'],
      harvestTime: 'October-November',
      yield: '35-40 quintals/hectare',
      marketPrice: '₹2,000-2,300/quintal',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'Tomato',
      scientificName: 'Solanum lycopersicum',
      category: 'Vegetable',
      season: 'Year-round',
      growthPeriod: '70-90 days',
      waterRequirement: 'Medium (400-600mm)',
      temperatureRange: '18-29°C',
      soilType: ['Sandy loam', 'Loamy'],
      nutrients: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium'],
      diseases: ['Early blight', 'Late blight', 'Fusarium wilt'],
      pests: ['Whitefly', 'Aphids', 'Fruit borer'],
      harvestTime: '70-90 days after transplanting',
      yield: '400-500 quintals/hectare',
      marketPrice: '₹15-25/kg',
      image: '/placeholder.svg'
    }
  ];

  const categories = ['all', 'cereal', 'vegetable', 'fruit', 'pulse', 'oilseed'];

  const filteredCrops = cropDatabase.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crop.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           crop.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Comprehensive Crop Database
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Complete information about crops, growing conditions, and best practices
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search crops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Crop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <Card key={crop.id} className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="dark:text-white">{crop.name}</CardTitle>
                <Badge variant="outline">{crop.category}</Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                {crop.scientificName}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="dark:text-gray-300">{crop.season}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-green-500" />
                  <span className="dark:text-gray-300">{crop.growthPeriod}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Thermometer className="w-4 h-4 text-red-500" />
                  <span className="dark:text-gray-300">{crop.temperatureRange}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <span className="dark:text-gray-300">{crop.waterRequirement}</span>
                </div>
              </div>

              {/* Soil Types */}
              <div>
                <p className="text-sm font-medium dark:text-white mb-1">Soil Types:</p>
                <div className="flex flex-wrap gap-1">
                  {crop.soilType.map((soil, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {soil}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Nutrients */}
              <div>
                <p className="text-sm font-medium dark:text-white mb-1">Key Nutrients:</p>
                <div className="flex flex-wrap gap-1">
                  {crop.nutrients.map((nutrient, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {nutrient}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Yield & Price */}
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                <p className="text-sm dark:text-gray-300">
                  <strong>Yield:</strong> {crop.yield}
                </p>
                <p className="text-sm dark:text-gray-300">
                  <strong>Market Price:</strong> {crop.marketPrice}
                </p>
              </div>

              {/* Common Issues */}
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium text-red-600 dark:text-red-400">Common Diseases:</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {crop.diseases.join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-orange-600 dark:text-orange-400">Common Pests:</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {crop.pests.join(', ')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
