
import { useState, useRef } from 'react';
import { Camera, Upload, X, Loader, AlertCircle, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OfflineNotice } from '@/components/OfflineNotice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ScanCrop = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    setAnalysis(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleImageSelect(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        disease: 'Leaf Blight',
        confidence: 92,
        severity: 'Moderate',
        treatment: 'Apply copper-based fungicide. Remove affected leaves. Improve air circulation.',
        prevention: 'Avoid overhead watering. Ensure proper spacing between plants.'
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setAnalysis(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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
                {t('nav.scan')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Upload a photo of your crop to detect diseases and get treatment recommendations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Upload Crop Image</CardTitle>
                </CardHeader>
                <CardContent>
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Selected crop"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={clearImage}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Take a photo or upload an image of your crop
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Image
                      </Button>
                    </div>
                  )}

                  {selectedImage && !isAnalyzing && !analysis && (
                    <div className="mt-6 text-center">
                      <Button
                        onClick={analyzeImage}
                        className="bg-green-600 hover:bg-green-700 w-full"
                        size="lg"
                      >
                        Analyze Crop
                      </Button>
                    </div>
                  )}

                  {isAnalyzing && (
                    <div className="mt-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <Loader className="w-6 h-6 animate-spin text-green-600" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Analyzing image...
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Analysis Results */}
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Analysis Results</CardTitle>
                </CardHeader>
                <CardContent>
                  {analysis ? (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-orange-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Disease Detected: {analysis.disease}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Confidence</div>
                          <div className="text-2xl font-bold text-green-600">{analysis.confidence}%</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Severity</div>
                          <div className="text-2xl font-bold text-orange-600">{analysis.severity}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Treatment Recommendation
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          {analysis.treatment}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Prevention Tips
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          {analysis.prevention}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 dark:text-gray-400">
                        Upload an image to see analysis results
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScanCrop;
