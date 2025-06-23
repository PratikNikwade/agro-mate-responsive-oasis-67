
export interface CropKnowledge {
  crops: Record<string, any>;
  diseases: Record<string, any>;
  treatments: Record<string, any>;
  weather: Record<string, any>;
  farming: Record<string, any>;
}

export const cropKnowledgeBase: CropKnowledge = {
  crops: {
    wheat: {
      name: "Wheat",
      season: "Rabi (Winter)",
      sowingTime: "October-December",
      harvestTime: "March-April",
      waterRequirement: "450-650mm",
      temperature: "15-25°C",
      soilType: "Well-drained loamy soil",
      fertilizer: "120kg N, 60kg P2O5, 40kg K2O per hectare",
      yield: "25-30 quintals per hectare",
      diseases: ["Rust", "Smut", "Karnal bunt"],
      pests: ["Aphids", "Termites", "Army worms"]
    },
    rice: {
      name: "Rice",
      season: "Kharif (Monsoon)",
      sowingTime: "June-July",
      harvestTime: "October-November",
      waterRequirement: "1000-1200mm",
      temperature: "20-35°C",
      soilType: "Clay or clay loam with good water retention",
      fertilizer: "120kg N, 60kg P2O5, 40kg K2O per hectare",
      yield: "35-40 quintals per hectare",
      diseases: ["Blast", "Bacterial blight", "Brown spot"],
      pests: ["Brown planthopper", "Stem borer", "Gall midge"]
    },
    corn: {
      name: "Corn/Maize",
      season: "Kharif and Rabi",
      sowingTime: "June-July (Kharif), October-November (Rabi)",
      harvestTime: "September-October (Kharif), February-March (Rabi)",
      waterRequirement: "500-800mm",
      temperature: "21-27°C",
      soilType: "Well-drained fertile loamy soil",
      fertilizer: "150kg N, 75kg P2O5, 50kg K2O per hectare",
      yield: "40-50 quintals per hectare",
      diseases: ["Leaf blight", "Stalk rot", "Downy mildew"],
      pests: ["Fall armyworm", "Stem borer", "Aphids"]
    }
  },
  diseases: {
    rust: {
      symptoms: "Yellow or orange pustules on leaves",
      treatment: "Apply fungicides like Propiconazole",
      prevention: "Use resistant varieties, proper spacing"
    },
    blight: {
      symptoms: "Brown spots on leaves, stem lesions",
      treatment: "Spray with copper-based fungicides",
      prevention: "Avoid overhead irrigation, crop rotation"
    },
    blast: {
      symptoms: "Diamond-shaped lesions on leaves",
      treatment: "Apply Tricyclazole or Carbendazim",
      prevention: "Balanced fertilization, avoid dense planting"
    }
  },
  treatments: {
    fungicide: "Apply systemic fungicides during early morning or evening",
    irrigation: "Maintain proper water management to prevent waterlogging",
    fertilizer: "Apply balanced NPK fertilizers based on soil test results",
    pesticide: "Use integrated pest management (IPM) practices"
  },
  weather: {
    temperature: {
      high: "Provide shade, increase irrigation frequency",
      low: "Use protective covers, reduce irrigation"
    },
    rainfall: {
      excess: "Ensure proper drainage, apply fungicides",
      deficit: "Implement drip irrigation, mulching"
    }
  },
  farming: {
    organicMethods: [
      "Vermicompost application",
      "Green manuring",
      "Crop rotation",
      "Biological pest control",
      "Natural fertilizers"
    ],
    sustainablePractices: [
      "Water conservation techniques",
      "Soil health management",
      "Integrated nutrient management",
      "Zero tillage farming",
      "Precision agriculture"
    ]
  }
};

export const getAdvancedCropAdvice = (query: string): string => {
  const lowercaseQuery = query.toLowerCase();
  
  // Disease identification and treatment
  if (lowercaseQuery.includes('yellow') && lowercaseQuery.includes('leaves')) {
    return "Yellow leaves can indicate: 1) Nitrogen deficiency - Apply urea @ 50kg/hectare 2) Overwatering - Improve drainage 3) Iron deficiency - Apply iron chelate 4) Pest attack - Check for aphids or mites. Soil test recommended for accurate diagnosis.";
  }
  
  if (lowercaseQuery.includes('brown') && lowercaseQuery.includes('spots')) {
    return "Brown spots suggest fungal diseases like blight. Immediate action: 1) Remove affected leaves 2) Apply Mancozeb @ 2g/liter 3) Improve air circulation 4) Avoid overhead watering 5) Apply preventive fungicide spray every 15 days.";
  }
  
  // Fertilizer recommendations
  if (lowercaseQuery.includes('fertilizer') || lowercaseQuery.includes('nutrients')) {
    return "NPK recommendations: 1) Basal dose: 50% N + 100% P + 100% K at sowing 2) Top dressing: 25% N at 30 days, 25% N at 60 days 3) Micronutrients: Zinc sulphate @ 25kg/hectare if deficient 4) Organic: Compost @ 5 tonnes/hectare annually.";
  }
  
  // Irrigation guidance
  if (lowercaseQuery.includes('water') || lowercaseQuery.includes('irrigation')) {
    return "Irrigation schedule: 1) Critical stages: Germination, flowering, grain filling 2) Frequency: Light irrigation every 7-10 days 3) Avoid waterlogging 4) Mulching reduces water requirement by 30% 5) Drip irrigation saves 40-50% water compared to flood irrigation.";
  }
  
  // Pest management
  if (lowercaseQuery.includes('pest') || lowercaseQuery.includes('insect')) {
    return "Integrated Pest Management: 1) Monitor weekly using pheromone traps 2) Biological control: Release Trichogramma @ 50,000/hectare 3) Chemical control: Use recommended insecticides only when threshold reached 4) Neem oil @ 3ml/liter for organic control.";
  }
  
  // Weather-related advice
  if (lowercaseQuery.includes('weather') || lowercaseQuery.includes('rain')) {
    return "Weather management: 1) Excess rain: Ensure drainage, apply fungicides 2) Drought: Mulching, drip irrigation, drought-tolerant varieties 3) High temperature: Shade nets, frequent light irrigation 4) Monitor weather forecasts for timely interventions.";
  }
  
  // Market prices and timing
  if (lowercaseQuery.includes('price') || lowercaseQuery.includes('market')) {
    return "Market strategy: 1) Check daily mandi prices on eNAM portal 2) Store properly to get better prices later 3) Direct marketing through FPOs 4) Contract farming for assured prices 5) Value addition increases profits by 20-30%.";
  }
  
  // Soil health
  if (lowercaseQuery.includes('soil')) {
    return "Soil health management: 1) Annual soil testing essential 2) pH 6.0-7.5 optimal for most crops 3) Organic matter should be >1.5% 4) Green manuring with legumes 5) Avoid continuous monocropping 6) Use biofertilizers for soil health improvement.";
  }
  
  // Default comprehensive advice
  return "For best farming results: 1) Use certified seeds from authorized dealers 2) Follow recommended spacing and planting depth 3) Apply balanced fertilizers based on soil test 4) Monitor crops weekly for pests and diseases 5) Maintain farm records for better decision making 6) Connect with agricultural extension services for location-specific advice.";
};
