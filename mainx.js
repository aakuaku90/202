const crops = [
  {
    id: 1,
    name: 'Tomato',
    image: 'https://source.unsplash.com/150x150/?tomato',
    family: 'Solanaceae',
    color: 'Red',
    category: 'Fruit',
    nutritionalValue: 'Vitamin C, Lycopene',
    whereUsed: 'California',
    usedFor: ['Salads', 'Sauces', 'Salsas'],
    healthBenefits: 'Good for heart health and skin.',
    knowHow: 'Best stored at room temperature.',
    location: { lat: 36.7783, lng: -119.4179 }
  },
  {
    id: 2,
    name: 'Potato',
    image: 'https://source.unsplash.com/150x150/?potato',
    family: 'Solanaceae',
    color: 'Brown',
    category: 'Tuber',
    nutritionalValue: 'Carbohydrates',
    whereUsed: 'Ireland',
    usedFor: ['Fries', 'Mashed Potatoes', 'Stews'],
    healthBenefits: 'Provides energy and fiber.',
    knowHow: 'Store in a cool, dark place.',
    location: { lat: 53.4129, lng: -8.2439 }
  },
  {
    id: 3,
    name: 'Carrot',
    image: 'https://source.unsplash.com/150x150/?carrot',
    family: 'Apiaceae',
    color: 'Orange',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin A',
    whereUsed: 'India',
    usedFor: ['Juices', 'Soups', 'Snacks'],
    healthBenefits: 'Improves vision and skin health.',
    knowHow: 'Avoid storing with fruits like apples.',
    location: { lat: 20.5937, lng: 78.9629 }
  },
  {
    id: 4,
    name: 'Avocado',
    image: 'https://source.unsplash.com/150x150/?avocado',
    family: 'Lauraceae',
    color: 'Green',
    category: 'Fruit',
    nutritionalValue: 'Healthy fats, Vitamin E',
    whereUsed: 'Mexico',
    usedFor: ['Guacamole', 'Salads', 'Smoothies'],
    healthBenefits: 'Boosts brain health.',
    knowHow: 'Store unripe avocados at room temperature.',
    location: { lat: 23.6345, lng: -102.5528 }
  },
  {
    id: 5,
    name: 'Pumpkin',
    image: 'https://source.unsplash.com/150x150/?pumpkin',
    family: 'Cucurbitaceae',
    color: 'Orange',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin A, Fiber',
    whereUsed: 'United States',
    usedFor: ['Pies', 'Soups', 'Roasts'],
    healthBenefits: 'Good for digestion and immunity.',
    knowHow: 'Best stored in a cool, dry place.',
    location: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 6,
    name: 'Corn',
    image: 'https://source.unsplash.com/150x150/?corn',
    family: 'Poaceae',
    color: 'Yellow',
    category: 'Grain',
    nutritionalValue: 'Carbohydrates, Fiber',
    whereUsed: 'United States',
    usedFor: ['Tortillas', 'Popcorn', 'Cornbread'],
    healthBenefits: 'Provides energy and aids digestion.',
    knowHow: 'Store in a cool, dry place.',
    location: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 7,
    name: 'Wheat',
    image: 'https://source.unsplash.com/150x150/?wheat',
    family: 'Poaceae',
    color: 'Golden',
    category: 'Grain',
    nutritionalValue: 'Carbohydrates, Protein',
    whereUsed: 'China',
    usedFor: ['Bread', 'Pasta', 'Cereal'],
    healthBenefits: 'Source of energy and protein.',
    knowHow: 'Store in a cool, dry place.',
    location: { lat: 35.8617, lng: 104.1954 }
  },
  {
    id: 8,
    name: 'Rice',
    image: 'https://source.unsplash.com/150x150/?rice',
    family: 'Poaceae',
    color: 'White',
    category: 'Grain',
    nutritionalValue: 'Carbohydrates',
    whereUsed: 'India',
    usedFor: ['Pilaf', 'Sushi', 'Risotto'],
    healthBenefits: 'Provides energy.',
    knowHow: 'Store in a cool, dry place.',
    location: { lat: 20.5937, lng: 78.9629 }
  },
  {
    id: 9,
    name: 'Soybean',
    image: 'https://source.unsplash.com/150x150/?soybean',
    family: 'Fabaceae',
    color: 'Yellow',
    category: 'Legume',
    nutritionalValue: 'Protein, Fiber',
    whereUsed: 'Brazil',
    usedFor: ['Tofu', 'Soy Milk', 'Soy Sauce'],
    healthBenefits: 'Supports muscle growth and digestion.',
    knowHow: 'Store in a cool, dry place.',
    location: { lat: -14.2350, lng: -51.9253 }
  },
  {
    id: 10,
    name: 'Lettuce',
    image: 'https://source.unsplash.com/150x150/?lettuce',
    family: 'Asteraceae',
    color: 'Green',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin K, Folate',
    whereUsed: 'United States',
    usedFor: ['Salads', 'Sandwiches', 'Wraps'],
    healthBenefits: 'Supports bone health.',
    knowHow: 'Keep refrigerated.',
    location: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 11,
    name: 'Spinach',
    image: 'https://source.unsplash.com/150x150/?spinach',
    family: 'Amaranthaceae',
    color: 'Green',
    category: 'Vegetable',
    nutritionalValue: 'Iron, Vitamin C',
    whereUsed: 'China',
    usedFor: ['Smoothies', 'Soups', 'Salads'],
    healthBenefits: 'Boosts immunity and energy.',
    knowHow: 'Keep refrigerated.',
    location: { lat: 35.8617, lng: 104.1954 }
  },
  {
    id: 12,
    name: 'Broccoli',
    image: 'https://source.unsplash.com/150x150/?broccoli',
    family: 'Brassicaceae',
    color: 'Green',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin C, Fiber',
    whereUsed: 'Italy',
    usedFor: ['Soups', 'Stir-Fries', 'Salads'],
    healthBenefits: 'Supports immune function.',
    knowHow: 'Keep refrigerated.',
    location: { lat: 41.8719, lng: 12.5674 }
  },
  {
    id: 13,
    name: 'Cauliflower',
    image: 'https://source.unsplash.com/150x150/?cauliflower',
    family: 'Brassicaceae',
    color: 'White',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin C, Fiber',
    whereUsed: 'France',
    usedFor: ['Roasts', 'Gratins', 'Rice Substitute'],
    healthBenefits: 'Aids digestion.',
    knowHow: 'Keep refrigerated.',
    location: { lat: 46.6034, lng: 1.8883 }
  },
  {
    id: 14,
    name: 'Cabbage',
    image: 'https://source.unsplash.com/150x150/?cabbage',
    family: 'Brassicaceae',
    color: 'Green',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin C, Vitamin K',
    whereUsed: 'Germany',
    usedFor: ['Coleslaw', 'Soups', 'Stir-Fries'],
    healthBenefits: 'Boosts immunity.',
    knowHow: 'Store in a cool place.',
    location: { lat: 51.1657, lng: 10.4515 }
  },
  {
    id: 15,
    name: 'Peas',
    image: 'https://source.unsplash.com/150x150/?peas',
    family: 'Fabaceae',
    color: 'Green',
    category: 'Legume',
    nutritionalValue: 'Protein, Fiber',
    whereUsed: 'Russia',
    usedFor: ['Soups', 'Stir-Fries', 'Salads'],
    healthBenefits: 'Supports muscle growth.',
    knowHow: 'Keep refrigerated.',
    location: { lat: 61.5240, lng: 105.3188 }
  },
  {
    id: 16,
    name: 'Onion',
    image: 'https://source.unsplash.com/150x150/?onion',
    family: 'Amaryllidaceae',
    color: 'Purple',
    category: 'Vegetable',
    nutritionalValue: 'Antioxidants',
    whereUsed: 'India',
    usedFor: ['Curry', 'Stir-Fries', 'Soups'],
    healthBenefits: 'Improves digestion.',
    knowHow: 'Store in a cool, dark place.',
    location: { lat: 20.5937, lng: 78.9629 }
  },
  {
    id: 17,
    name: 'Zucchini',
    image: 'https://source.unsplash.com/150x150/?zucchini',
    family: 'Cucurbitaceae',
    color: 'Green',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin C, Fiber',
    whereUsed: 'Italy',
    usedFor: ['Grilled', 'Pasta', 'Salads'],
    healthBenefits: 'Good for digestion.',
    knowHow: 'Keep refrigerated.',
    location: { lat: 41.8719, lng: 12.5674 }
  },
  {
    id: 18,
    name: 'Eggplant',
    image: 'https://source.unsplash.com/150x150/?eggplant',
    family: 'Solanaceae',
    color: 'Purple',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin C, Fiber',
    whereUsed: 'Turkey',
    usedFor: ['Grilled', 'Casseroles', 'Dips'],
    healthBenefits: 'Supports heart health and weight management.',
    knowHow: 'Store in a cool, dry place.',
    location: { lat: 38.9637, lng: 35.2433 }
  },
  {
    id: 19,
    name: 'Chili Pepper',
    image: 'https://source.unsplash.com/150x150/?chili',
    family: 'Solanaceae',
    color: 'Red',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin C, Capsaicin',
    whereUsed: 'Mexico',
    usedFor: ['Spices', 'Salsas', 'Pickles'],
    healthBenefits: 'Boosts metabolism and immunity.',
    knowHow: 'Store in a dry, cool place.',
    location: { lat: 23.6345, lng: -102.5528 }
  },
  {
    id: 20,
    name: 'Banana',
    image: 'https://source.unsplash.com/150x150/?banana',
    family: 'Musaceae',
    color: 'Yellow',
    category: 'Fruit',
    nutritionalValue: 'Potassium, Vitamin C',
    whereUsed: 'Ecuador',
    usedFor: ['Smoothies', 'Snacks', 'Desserts'],
    healthBenefits: 'Supports heart health and digestion.',
    knowHow: 'Store at room temperature.',
    location: { lat: -1.8312, lng: -78.1834 }
  },
  {
    id: 21,
    name: 'Pineapple',
    image: 'https://source.unsplash.com/150x150/?pineapple',
    family: 'Bromeliaceae',
    color: 'Yellow',
    category: 'Fruit',
    nutritionalValue: 'Vitamin C, Bromelain',
    whereUsed: 'Costa Rica',
    usedFor: ['Juices', 'Desserts', 'Grilled'],
    healthBenefits: 'Improves digestion and reduces inflammation.',
    knowHow: 'Store at room temperature until ripe.',
    location: { lat: 9.7489, lng: -83.7534 }
  },
  {
    id: 22,
    name: 'Strawberry',
    image: 'https://source.unsplash.com/150x150/?strawberry',
    family: 'Rosaceae',
    color: 'Red',
    category: 'Fruit',
    nutritionalValue: 'Vitamin C, Antioxidants',
    whereUsed: 'United States',
    usedFor: ['Desserts', 'Smoothies', 'Jams'],
    healthBenefits: 'Boosts immunity and skin health.',
    knowHow: 'Store in a refrigerator.',
    location: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 23,
    name: 'Mango',
    image: 'https://source.unsplash.com/150x150/?mango',
    family: 'Anacardiaceae',
    color: 'Orange',
    category: 'Fruit',
    nutritionalValue: 'Vitamin A, Vitamin C',
    whereUsed: 'India',
    usedFor: ['Juices', 'Desserts', 'Pickles'],
    healthBenefits: 'Improves immunity and skin health.',
    knowHow: 'Store at room temperature until ripe.',
    location: { lat: 20.5937, lng: 78.9629 }
  },
  {
    id: 24,
    name: 'Cucumber',
    image: 'https://source.unsplash.com/150x150/?cucumber',
    family: 'Cucurbitaceae',
    color: 'Green',
    category: 'Vegetable',
    nutritionalValue: 'Water, Vitamin K',
    whereUsed: 'Greece',
    usedFor: ['Salads', 'Snacks', 'Sandwiches'],
    healthBenefits: 'Keeps you hydrated and supports skin health.',
    knowHow: 'Keep refrigerated.',
    location: { lat: 39.0742, lng: 21.8243 }
  },
  {
    id: 25,
    name: 'Papaya',
    image: 'https://source.unsplash.com/150x150/?papaya',
    family: 'Caricaceae',
    color: 'Orange',
    category: 'Fruit',
    nutritionalValue: 'Vitamin C, Papain',
    whereUsed: 'Thailand',
    usedFor: ['Smoothies', 'Desserts', 'Salads'],
    healthBenefits: 'Improves digestion and supports skin health.',
    knowHow: 'Store at room temperature until ripe.',
    location: { lat: 15.8700, lng: 100.9925 }
  },
  {
    id: 26,
    name: 'Coconut',
    image: 'https://source.unsplash.com/150x150/?coconut',
    family: 'Arecaceae',
    color: 'Brown',
    category: 'Fruit',
    nutritionalValue: 'Healthy fats, Fiber',
    whereUsed: 'Philippines',
    usedFor: ['Coconut Milk', 'Snacks', 'Desserts'],
    healthBenefits: 'Boosts energy and improves digestion.',
    knowHow: 'Store in a cool, dry place.',
    location: { lat: 12.8797, lng: 121.7740 }
  },
  {
    id: 27,
    name: 'Almond',
    image: 'https://source.unsplash.com/150x150/?almond',
    family: 'Rosaceae',
    color: 'Brown',
    category: 'Nut',
    nutritionalValue: 'Vitamin E, Magnesium',
    whereUsed: 'United States',
    usedFor: ['Snacks', 'Milk', 'Desserts'],
    healthBenefits: 'Good for heart health and skin.',
    knowHow: 'Store in an airtight container.',
    location: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 28,
    name: 'Walnut',
    image: 'https://source.unsplash.com/150x150/?walnut',
    family: 'Juglandaceae',
    color: 'Brown',
    category: 'Nut',
    nutritionalValue: 'Omega-3, Protein',
    whereUsed: 'United States',
    usedFor: ['Snacks', 'Baking', 'Salads'],
    healthBenefits: 'Improves brain health.',
    knowHow: 'Store in an airtight container in a cool, dry place.',
    location: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 29,
    name: 'Pecan',
    image: 'https://source.unsplash.com/150x150/?pecan',
    family: 'Juglandaceae',
    color: 'Brown',
    category: 'Nut',
    nutritionalValue: 'Healthy fats, Fiber',
    whereUsed: 'United States',
    usedFor: ['Pies', 'Snacks', 'Baking'],
    healthBenefits: 'Supports heart health.',
    knowHow: 'Store in an airtight container in a cool, dry place.',
    location: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 30,
    name: 'Peanut',
    image: 'https://source.unsplash.com/150x150/?peanut',
    family: 'Fabaceae',
    color: 'Brown',
    category: 'Legume',
    nutritionalValue: 'Protein, Healthy fats',
    whereUsed: 'China',
    usedFor: ['Butter', 'Snacks', 'Cooking Oil'],
    healthBenefits: 'Supports muscle growth and provides energy.',
    knowHow: 'Store in an airtight container.',
    location: { lat: 35.8617, lng: 104.1954 }
  },
  {
    id: 31,
    name: 'Cashew',
    image: 'https://source.unsplash.com/150x150/?cashew',
    family: 'Anacardiaceae',
    color: 'Cream',
    category: 'Nut',
    nutritionalValue: 'Healthy fats, Magnesium',
    whereUsed: 'India',
    usedFor: ['Snacks', 'Butter', 'Sauces'],
    healthBenefits: 'Good for bone health.',
    knowHow: 'Store in an airtight container.',
    location: { lat: 20.5937, lng: 78.9629 }
  },
  {
    id: 32,
    name: 'Macadamia',
    image: 'https://source.unsplash.com/150x150/?macadamia',
    family: 'Proteaceae',
    color: 'Cream',
    category: 'Nut',
    nutritionalValue: 'Healthy fats, Fiber',
    whereUsed: 'Australia',
    usedFor: ['Snacks', 'Desserts', 'Baking'],
    healthBenefits: 'Supports heart health.',
    knowHow: 'Store in an airtight container.',
    location: { lat: -25.2744, lng: 133.7751 }
  },
  {
    id: 33,
    name: 'Hazelnut',
    image: 'https://source.unsplash.com/150x150/?hazelnut',
    family: 'Betulaceae',
    color: 'Brown',
    category: 'Nut',
    nutritionalValue: 'Vitamin E, Healthy fats',
    whereUsed: 'Turkey',
    usedFor: ['Snacks', 'Spreads', 'Baking'],
    healthBenefits: 'Supports brain and skin health.',
    knowHow: 'Store in a cool, dry place.',
    location: { lat: 38.9637, lng: 35.2433 }
  },
  {
    id: 34,
    name: 'Chestnut',
    image: 'https://source.unsplash.com/150x150/?chestnut',
    family: 'Fagaceae',
    color: 'Brown',
    category: 'Nut',
    nutritionalValue: 'Carbohydrates, Fiber',
    whereUsed: 'China',
    usedFor: ['Roasting', 'Soups', 'Stuffings'],
    healthBenefits: 'Provides energy and supports digestion.',
    knowHow: 'Store in a cool, dry place.',
    location: { lat: 35.8617, lng: 104.1954 }
  },
  {
    id: 35,
    name: 'Grapes',
    image: 'https://source.unsplash.com/150x150/?grapes',
    family: 'Vitaceae',
    color: 'Purple',
    category: 'Fruit',
    nutritionalValue: 'Antioxidants, Vitamin C',
    whereUsed: 'Italy',
    usedFor: ['Wine', 'Snacks', 'Juices'],
    healthBenefits: 'Supports heart health.',
    knowHow: 'Store in a refrigerator.',
    location: { lat: 41.8719, lng: 12.5674 }
  },
  {
    id: 36,
    name: 'Blueberry',
    image: 'https://source.unsplash.com/150x150/?blueberry',
    family: 'Ericaceae',
    color: 'Blue',
    category: 'Fruit',
    nutritionalValue: 'Vitamin C, Antioxidants',
    whereUsed: 'United States',
    usedFor: ['Snacks', 'Smoothies', 'Baking'],
    healthBenefits: 'Improves brain and heart health.',
    knowHow: 'Store in a refrigerator.',
    location: { lat: 37.0902, lng: -95.7129 }
  },
];

let map;
let markers = [];

// Initialize Map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.8715, lng: -122.2600 }, // Default center (Berkeley)
    zoom: 3,
  });
}

// Clear all markers from the map
function clearMarkers() {
  markers.forEach(marker => marker.setMap(null));
  markers = [];
}

// Add a marker to the map
function addMarker(location, title) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: title,
  });
  markers.push(marker);
}

// Function to find similar crops dynamically based on family, category, and nutritional value
function findSimilarCrops(selectedCrop) {
  return crops.filter(crop => {
    if (crop.id === selectedCrop.id) return false; // Exclude the selected crop itself

    // Check similarity based on shared attributes
    const sameFamily = crop.family === selectedCrop.family;
    const sameCategory = crop.category === selectedCrop.category;
    const sharedNutritionalValues = crop.nutritionalValue
      .split(', ')
      .some(value => selectedCrop.nutritionalValue.split(', ').includes(value));

    // Define the similarity criteria
    return sameFamily || sameCategory || sharedNutritionalValues;
  });
}

// Display details of the selected crop
function displayDetails(crop) {
  const cropInfo = document.getElementById("crop-info");
  const cropImage = document.getElementById("crop-image-display");

  cropInfo.innerHTML = `
    <h2>Crop Details</h2>
    <p><strong>Name:</strong> ${crop.name}</p>
    <p><strong>Family:</strong> ${crop.family}</p>
    <p><strong>Color:</strong> ${crop.color}</p>
    <p><strong>Category:</strong> ${crop.category}</p>
    <p><strong>Nutritional Value:</strong> ${crop.nutritionalValue}</p>
    <p><strong>Mostly Used In:</strong> ${crop.whereUsed}</p>
    <p><strong>Mostly Used For:</strong> ${crop.usedFor.join(', ')}</p>
    <p><strong>Health Benefits:</strong> ${crop.healthBenefits}</p>
    <p><strong>Know-How:</strong> ${crop.knowHow}</p>
  `;

  cropImage.src = crop.image;
  cropImage.style.display = 'block';

  clearMarkers();
  if (crop.location) {
    addMarker(crop.location, crop.name);
    map.setCenter(crop.location);
  }

  displaySimilarCrops(crop);
}

// Display similar crops dynamically
function displaySimilarCrops(selectedCrop) {
  const container = document.getElementById("similar-crops");
  container.innerHTML = '<h2>Similar Crops</h2>';

  const similarCrops = findSimilarCrops(selectedCrop);

  similarCrops.forEach(similarCrop => {
    const similarCropDetails = `
      <div class="similar-crop-container">
        <div class="similar-crop-details">
          <div>
            <h3>${similarCrop.name}</h3>
            <p><strong>Family:</strong> ${similarCrop.family}</p>
            <p><strong>Color:</strong> ${similarCrop.color}</p>
            <p><strong>Category:</strong> ${similarCrop.category}</p>
            <p><strong>Nutritional Value:</strong> ${similarCrop.nutritionalValue}</p>
            <p><strong>Mostly Used For:</strong> ${similarCrop.usedFor.join(', ')}</p>
            <p><strong>Mostly Used In:</strong> ${similarCrop.whereUsed}</p>
            <p><strong>Health Benefits:</strong> ${similarCrop.healthBenefits}</p>
          </div>
          <div class="similar-crop-image">
            <img src="${similarCrop.image}" alt="${similarCrop.name}">
          </div>
        </div>
      </div>
    `;
    container.innerHTML += similarCropDetails;

    if (similarCrop.location) {
      addMarker(similarCrop.location, similarCrop.name);
    }
  });
}

// Handle crop selection
document.getElementById("explore-button").addEventListener("click", () => {
  const cropId = parseInt(document.getElementById("crop-select").value, 10);
  const crop = crops.find(crop => crop.id === cropId);

  if (crop) {
    displayDetails(crop);
  } else {
    document.getElementById("crop-info").innerHTML = "<p>Please select a valid crop.</p>";
    clearMarkers();
  }
});

function populateCropDropdown() {
  const cropSelect = document.getElementById("crop-select");

  crops.forEach(crop => {
    const option = document.createElement("option");
    option.value = crop.id; // Use the crop ID as the value
    option.textContent = crop.name; // Use the crop name as the text
    cropSelect.appendChild(option);
  });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", populateCropDropdown);