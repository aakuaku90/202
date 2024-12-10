const crops = [
  {
    id: 1,
    name: 'Carrot',
    image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=800',
    family: 'Apiaceae',
    color: 'Orange',
    category: 'Root',
    nutritionalValue: 'Beta-carotene, Fiber, Vitamin K1, Potassium, Antioxidants',
    whereUsed: 'Worldwide',
    usedFor: ['Salads', 'Soups', 'Juices'],
    healthBenefits: 'Improves eye health, aids digestion, and supports heart health.',
    knowHow: 'Store in the refrigerator, preferably in a perforated plastic bag.',
    location: { lat: 52.1326, lng: 5.2913 },
    region: 'Europe',
    season: ['Spring', 'Fall'],
    soil: 'Sandy loam',
    isOrganic: true,
  },
  {
    id: 2,
    name: 'Spinach',
    image: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=800',
    family: 'Amaranthaceae',
    color: 'Green',
    category: 'Leafy green',
    nutritionalValue: 'Vitamin A, Vitamin C, Vitamin K1, Folic acid, Iron, Calcium',
    whereUsed: 'Worldwide',
    usedFor: ['Salads', 'Smoothies', 'Stir-fries'],
    healthBenefits: 'Supports immune function, bone health, and reduces oxidative stress.',
    knowHow: 'Store in a cool, dry place; refrigerate to maintain freshness.',
    location: { lat: 40.7128, lng: -74.0060 },
    region: 'North America',
    season: ['Spring', 'Fall'],
    soil: 'Loamy',
    isOrganic: false,
  },
  {
    id: 3,
    name: 'Broccoli',
    image: 'https://cdn.mos.cms.futurecdn.net/r8NK24bmcMgSib5zWKKQkW.jpg',
    family: 'Brassicaceae',
    color: 'Green',
    category: 'Cruciferous',
    nutritionalValue: 'Vitamin C, Vitamin K, Fiber, Potassium, Folate',
    whereUsed: 'Worldwide',
    usedFor: ['Steamed dishes', 'Stir-fries', 'Salads'],
    healthBenefits: 'Promotes heart health, supports digestion, and has anti-inflammatory properties.',
    knowHow: 'Store in the refrigerator, unwashed, in a plastic bag.',
    location: { lat: 37.7749, lng: -122.4194 },
    region: 'North America',
    season: ['Fall', 'Winter'],
    soil: 'Clay loam',
    isOrganic: true,
  },
  {
    id: 4,
    name: 'Sweet Potato',
    image: 'https://img.freepik.com/premium-photo/sweet-potato-with-white-background-high-quality-ult_889056-10556.jpg',
    family: 'Convolvulaceae',
    color: 'Orange',
    category: 'Root',
    nutritionalValue: 'Vitamin A, Vitamin C, Manganese, Fiber, Potassium',
    whereUsed: 'Worldwide',
    usedFor: ['Baking', 'Mashing', 'Roasting'],
    healthBenefits: 'Supports vision, boosts immune function, and regulates blood sugar levels.',
    knowHow: 'Store in a cool, dark, and well-ventilated place.',
    location: { lat: 35.6895, lng: 139.6917 },
    region: 'Asia',
    season: ['Fall', 'Winter'],
    soil: 'Sandy loam',
    isOrganic: false,
  },
  {
    id: 5,
    name: 'Bell Pepper',
    image: 'https://tse3.mm.bing.net/th?id=OIP.iKKOYUvcgZGOKZnCNK2EAwHaE8&pid=Api',
    family: 'Solanaceae',
    color: 'Red, Green, Yellow, Orange',
    category: 'Fruit',
    nutritionalValue: 'Vitamin C, Vitamin A, Vitamin B6, Folate, Fiber',
    whereUsed: 'Worldwide',
    usedFor: ['Salads', 'Stir-fries', 'Grilling'],
    healthBenefits: 'Enhances immune function, supports eye health, and reduces inflammation.',
    knowHow: 'Store in the refrigerator crisper drawer.',
    location: { lat: 34.0522, lng: -118.2437 },
    region: 'North America',
    season: ['Summer', 'Fall'],
    soil: 'Loamy',
    isOrganic: true,
},
{
  id: 6,
  name: 'Tomato',
  image: 'https://images.pexels.com/photos/965740/pexels-photo-965740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  family: 'Solanaceae',
  color: 'Red',
  category: 'Fruit',
  nutritionalValue: 'Vitamin C, Potassium, Folate, Vitamin K',
  whereUsed: 'Worldwide',
  usedFor: ['Salads', 'Sauces', 'Salsas'],
  healthBenefits: 'Supports heart health, skin health, and reduces cancer risk.',
  knowHow: 'Store at room temperature away from direct sunlight.',
  location: { lat: 41.9028, lng: 12.4964 },
  region: 'Europe',
  season: ['Summer'],
  soil: 'Loamy',
  isOrganic: true,
},
{
  id: 7,
  name: 'Potato',
  image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  family: 'Solanaceae',
  color: 'Brown',
  category: 'Tuber',
  nutritionalValue: 'Carbohydrates, Vitamin C, Potassium, Vitamin B6',
  whereUsed: 'Worldwide',
  usedFor: ['Mashed', 'Fried', 'Baked'],
  healthBenefits: 'Provides energy, supports digestion, and maintains blood pressure.',
  knowHow: 'Store in a cool, dark, and dry place.',
  location: { lat: 53.3498, lng: -6.2603 },
  region: 'Europe',
  season: ['Fall'],
  soil: 'Sandy loam',
  isOrganic: false,
},
{
  id: 8,
  name: 'Lettuce',
  image: 'https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg',
  family: 'Asteraceae',
  color: 'Green',
  category: 'Leafy green',
  nutritionalValue: 'Vitamin A, Vitamin K, Folate, Iron',
  whereUsed: 'Worldwide',
  usedFor: ['Salads', 'Sandwiches', 'Wraps'],
  healthBenefits: 'Supports eye health, bone health, and aids digestion.',
  knowHow: 'Store in the refrigerator, preferably in a crisper drawer.',
  location: { lat: 48.8566, lng: 2.3522 },
  region: 'Europe',
  season: ['Spring', 'Fall'],
  soil: 'Loamy',
  isOrganic: true,
},
{
  id: 9,
  name: 'Eggplant',
  image: 'https://veritablevegetable.com/wp-content/uploads/2020/07/Eggplant-Globe-scaled.jpg',
  family: 'Solanaceae',
  color: 'Purple',
  category: 'Fruit',
  nutritionalValue: 'Vitamin B1, Vitamin B6, Potassium, Fiber, Antioxidants',
  whereUsed: 'Worldwide',
  usedFor: ['Grilling', 'Roasting', 'Casseroles'],
  healthBenefits: 'Supports heart health, aids digestion, and improves brain function.',
  knowHow: 'Store in a cool, dry place, avoiding refrigeration.',
  location: { lat: 40.7128, lng: -74.0060 },
  region: 'Asia',
  season: ['Summer', 'Fall'],
  soil: 'Sandy loam',
  isOrganic: true,
},
{
  id: 10,
  name: 'Lettuce',
  image: 'https://www.accidentinjurylawyerblog.com/files/2011/10/lettuce.jpg',
  family: 'Asteraceae',
  color: 'Green',
  category: 'Leafy green',
  nutritionalValue: 'Vitamin A, Vitamin K, Folate, Fiber',
  whereUsed: 'Worldwide',
  usedFor: ['Salads', 'Wraps', 'Sandwiches'],
  healthBenefits: 'Supports bone health, aids hydration, and improves digestion.',
  knowHow: 'Store in the refrigerator in a perforated bag.',
  location: { lat: 37.7749, lng: -122.4194 },
  region: 'North America',
  season: ['Spring', 'Fall'],
  soil: 'Loamy',
  isOrganic: false,
},
  {
    id: 12,
    name: 'Zucchini',
    image: 'https://foodrevolution.org/wp-content/uploads/2018/07/blog-featured-zuch1-20180724.jpg',
    family: 'Cucurbitaceae',
    color: 'Green',
    category: 'Fruit',
    nutritionalValue: 'Vitamin A, Vitamin C, Manganese, Fiber, Antioxidants',
    whereUsed: 'Worldwide',
    usedFor: ['Grilling', 'Roasting', 'Baking'],
    healthBenefits: 'Improves eye health, supports digestion, and aids weight management.',
    knowHow: 'Store in a cool, dry place, preferably in a perforated bag.',
    location: { lat: 41.9028, lng: 12.4964 },
    region: 'Europe',
    season: ['Summer', 'Fall'],
    soil: 'Loamy',
    isOrganic: false,
  },
  {
    id: 13,
    name: 'Pumpkin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Pumpkin.jpg',
    family: 'Cucurbitaceae',
    color: 'Orange',
    category: 'Fruit',
    nutritionalValue: 'Vitamin A, Fiber, Potassium, Antioxidants',
    whereUsed: 'Worldwide',
    usedFor: ['Pies', 'Soups', 'Roasting'],
    healthBenefits: 'Boosts immunity, supports heart health, and improves skin health.',
    knowHow: 'Store in a cool, dark, and dry place.',
    location: { lat: 35.6895, lng: 139.6917 },
    region: 'Asia',
    season: ['Fall', 'Winter'],
    soil: 'Loamy',
    isOrganic: true,
  },
  {
    id: 14,
    name: 'Peas',
    image: 'https://morningchores.com/wp-content/uploads/2021/04/english-peas-1.jpg',
    family: 'Fabaceae',
    color: 'Green',
    category: 'Legume',
    nutritionalValue: 'Protein, Fiber, Vitamin C, Vitamin A',
    whereUsed: 'Worldwide',
    usedFor: ['Soups', 'Stir-fries', 'Salads'],
    healthBenefits: 'Supports muscle growth, improves digestion, and boosts immunity.',
    knowHow: 'Store in the refrigerator in a sealed container.',
    location: { lat: 51.1657, lng: 10.4515 },
    region: 'Europe',
    season: ['Spring', 'Summer'],
    soil: 'Loamy',
    isOrganic: false,
  },
  {
    id: 15,
    name: 'Strawberries',
    image: 'https://fthmb.tqn.com/8N--FKD3l4jBSzkv_qDCHXDqkP8%3D/4027x3219/filters%3Afill%28auto%2C1%29/table-top-strawberries-175637731-59a6cde4519de200104f8ce6.jpg',
    family: 'Rosaceae',
    color: 'Red',
    category: 'Fruit',
    nutritionalValue: 'Vitamin C, Fiber, Antioxidants, Manganese',
    whereUsed: 'Worldwide',
    usedFor: ['Desserts', 'Smoothies', 'Jams'],
    healthBenefits: 'Boosts immunity, supports skin health, and reduces inflammation.',
    knowHow: 'Store in the refrigerator and wash just before consuming.',
    location: { lat: 37.7749, lng: -122.4194 },
    region: 'North America',
    season: ['Spring', 'Summer'],
    soil: 'Sandy loam',
    isOrganic: true,
  },
  {
    id: 16,
    name: 'Corn',
    image: 'https://www.simplebites.net/wp-content/uploads/2010/08/corncobs.jpg',
    family: 'Poaceae',
    color: 'Yellow',
    category: 'Grain',
    nutritionalValue: 'Carbohydrates, Fiber, Vitamin C, Magnesium',
    whereUsed: 'Worldwide',
    usedFor: ['Roasting', 'Boiling', 'Snacks'],
    healthBenefits: 'Provides energy, aids digestion, and supports eye health.',
    knowHow: 'Store in the refrigerator with husks intact to maintain freshness.',
    location: { lat: 19.4326, lng: -99.1332 },
    region: 'North America',
    season: ['Summer', 'Fall'],
    soil: 'Loamy',
    isOrganic: false,
  },
  {
    id: 17,
    name: 'Watermelon',
    image: 'https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg',
    family: 'Cucurbitaceae',
    color: 'Green and Red',
    category: 'Fruit',
    nutritionalValue: 'Water, Vitamin C, Vitamin A, Lycopene',
    whereUsed: 'Worldwide',
    usedFor: ['Snacks', 'Juices', 'Desserts'],
    healthBenefits: 'Hydrates the body, supports heart health, and reduces oxidative stress.',
    knowHow: 'Store in a cool, dry place; refrigerate once sliced.',
    location: { lat: 30.0444, lng: 31.2357 },
    region: 'Africa',
    season: ['Summer'],
    soil: 'Sandy loam',
    isOrganic: true,
  },
  {
    id: 18,
    name: 'Onion',
    image: 'https://foodgardening.mequoda.com/wp-content/uploads/2021/03/Three-varieties-of-onions.jpg',
    family: 'Amaryllidaceae',
    color: 'Red, White, Yellow',
    category: 'Vegetable',
    nutritionalValue: 'Vitamin C, Antioxidants, Fiber, Sulfur Compounds',
    whereUsed: 'Worldwide',
    usedFor: ['Cooking', 'Salads', 'Pickling'],
    healthBenefits: 'Boosts immunity, supports heart health, and improves digestion.',
    knowHow: 'Store in a cool, dry, and ventilated area away from sunlight.',
    location: { lat: 28.6139, lng: 77.209 },
    region: 'Asia',
    season: ['Winter', 'Spring'],
    soil: 'Loamy',
    isOrganic: false,
  },
  {
    id: 19,
    name: 'Beetroot',
    image: 'https://extrawellness.net/wp-content/uploads/2018/08/benefits-of-beets2.jpg',
    family: 'Amaranthaceae',
    color: 'Red',
    category: 'Root',
    nutritionalValue: 'Vitamin C, Iron, Folate, Fiber, Potassium',
    whereUsed: 'Worldwide',
    usedFor: ['Salads', 'Juices', 'Roasting'],
    healthBenefits: 'Supports blood health, improves stamina, and boosts digestion.',
    knowHow: 'Store in the refrigerator with the leaves removed.',
    location: { lat: 50.1109, lng: 8.6821 },
    region: 'Europe',
    season: ['Fall', 'Winter'],
    soil: 'Loamy',
    isOrganic: true,
  },
  {
    id: 20,
    name: 'Garlic',
    image: 'https://doubledeckerfarm.com/wp-content/uploads/2022/09/Garlic-beauty-shot-scaled.jpg',
    family: 'Amaryllidaceae',
    color: 'White',
    category: 'Bulb',
    nutritionalValue: 'Vitamin B6, Vitamin C, Manganese, Selenium, Fiber',
    whereUsed: 'Worldwide',
    usedFor: ['Cooking', 'Pickling', 'Seasoning'],
    healthBenefits: 'Supports immune function, lowers cholesterol, and improves heart health.',
    knowHow: 'Store in a cool, dry place away from sunlight.',
    location: { lat: 31.2304, lng: 121.4737 },
    region: 'Asia',
    season: ['Spring', 'Fall'],
    soil: 'Loamy',
    isOrganic: true,
  },
  {
    id: 21,
    name: 'Radish',
    image: 'https://www.lovethegarden.com/sites/default/files/content/articles/UK_freshly-harvested-radishes.jpg',
    family: 'Brassicaceae',
    color: 'Red, White',
    category: 'Root',
    nutritionalValue: 'Vitamin C, Folate, Potassium, Fiber',
    whereUsed: 'Worldwide',
    usedFor: ['Salads', 'Pickling', 'Cooking'],
    healthBenefits: 'Supports digestion, detoxifies the liver, and boosts immunity.',
    knowHow: 'Store in the refrigerator in a plastic bag.',
    location: { lat: 48.8566, lng: 2.3522 },
    region: 'Europe',
    season: ['Spring', 'Fall'],
    soil: 'Sandy loam',
    isOrganic: false,
  },
  {
    id: 22,
    name: 'Celery',
    image: 'https://www.thespruceeats.com/thmb/UaeC5Uc6Dv9VL1wvn_tSK2g6mxw%3D/1500x1000/filters%3Afill%28auto%2C1%29/what-is-celery-5199268-hero-01-cb9c645dfb614f0a8eef5b0c316ce16d.jpg',
    family: 'Apiaceae',
    color: 'Green',
    category: 'Stalk',
    nutritionalValue: 'Vitamin K, Vitamin A, Potassium, Fiber',
    whereUsed: 'Worldwide',
    usedFor: ['Soups', 'Juices', 'Snacks'],
    healthBenefits: 'Reduces inflammation, supports heart health, and improves hydration.',
    knowHow: 'Store in the refrigerator wrapped in aluminum foil.',
    location: { lat: 34.0522, lng: -118.2437 },
    region: 'North America',
    season: ['Spring', 'Fall'],
    soil: 'Loamy',
    isOrganic: false,
  },
  {
    id: 23,
    name: 'Cauliflower',
    image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/5299/h1018g16207257715328.jpg',
    family: 'Brassicaceae',
    color: 'White',
    category: 'Cruciferous',
    nutritionalValue: 'Vitamin C, Vitamin K, Fiber, Folate',
    whereUsed: 'Worldwide',
    usedFor: ['Steaming', 'Roasting', 'Gratins'],
    healthBenefits: 'Supports bone health, aids digestion, and reduces inflammation.',
    knowHow: 'Store in the refrigerator in a perforated plastic bag.',
    location: { lat: 41.9028, lng: 12.4964 },
    region: 'Europe',
    season: ['Winter', 'Spring'],
    soil: 'Loamy',
    isOrganic: true,
  }
];


let map;
let markers = [];

// Initialize the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.8715, lng: -122.2600 },
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

// Display crop details
function displayDetails(crop) {
  const cropInfo = document.getElementById("crop-info");
  const cropImage = document.getElementById("crop-image-display");

  if (crop) {
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
  } else {
    cropInfo.innerHTML = '<p>No crop selected or the current crop does not match the filters.</p>';
    cropImage.style.display = 'none';
    clearMarkers();
  }
}

// Display similar crops
function displaySimilarCrops(selectedCrop) {
  const container = document.getElementById("similar-crops");
  container.innerHTML = '<h2>Similar Crops</h2>';

  const similarCrops = findSimilarCrops(selectedCrop);

  if (similarCrops.length === 0) {
    container.innerHTML = '<p>No similar crops found.</p>';
    return;
  }

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

// Modified `findSimilarCrops` to fetch similar crops
function findSimilarCrops(selectedCrop) {
  return crops.filter(crop => {
    if (crop.id === selectedCrop.id) return false; // Exclude the selected crop itself

    const sameFamily = crop.family === selectedCrop.family;
    const sameCategory = crop.category === selectedCrop.category;
    const sharedNutritionalValues = crop.nutritionalValue
      .split(', ')
      .some(value => selectedCrop.nutritionalValue.split(', ').includes(value));

    // Return crops with similar properties
    return sameFamily || sameCategory || sharedNutritionalValues;
  });
}

// Filter crops based on criteria
function filterCrops() {
  const region = document.getElementById("region-select").value;
  const season = document.getElementById("season-select").value;
  const soil = document.getElementById("soil-select").value;
  const organicOnly = document.getElementById("organic-check").checked;

  const cropSelect = document.getElementById("crop-select");
  const cropId = parseInt(cropSelect.value, 10);
  const currentCrop = crops.find(crop => crop.id === cropId);

  if (!currentCrop) {
    document.getElementById("crop-info").innerHTML = '<p>Please select a crop first.</p>';
    document.getElementById("similar-crops").innerHTML = '';
    return;
  }

  // Display the selected crop regardless of the filter
  displayDetails(currentCrop);

  // Filter similar crops
  const filteredSimilarCrops = findSimilarCrops(currentCrop).filter(crop => {
    const matchesRegion = !region || crop.region === region;
    const matchesSeason = !season || crop.season.includes(season);
    const matchesSoil = !soil || crop.soil === soil;
    const matchesOrganic = !organicOnly || crop.isOrganic;

    return matchesRegion && matchesSeason && matchesSoil && matchesOrganic;
  });

  // Display filtered similar crops
  const container = document.getElementById("similar-crops");
  container.innerHTML = '<h2>Similar Crops</h2>';

  if (filteredSimilarCrops.length) {
    filteredSimilarCrops.forEach(similarCrop => {
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
    });
  } else {
    container.innerHTML = '<p>No similar crops match the selected filters.</p>';
  }
}


// Populate dropdown on page load
function populateCropDropdown() {
  const cropSelect = document.getElementById("crop-select");
  crops.forEach(crop => {
    const option = document.createElement("option");
    option.value = crop.id;
    option.textContent = crop.name;
    cropSelect.appendChild(option);
  });
}

// Handle crop selection
document.getElementById("explore-button").addEventListener("click", () => {
  const cropId = parseInt(document.getElementById("crop-select").value, 10);
  const crop = crops.find(crop => crop.id === cropId);
  displayDetails(crop);
});

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
  populateCropDropdown();
  document.getElementById("region-select").addEventListener("change", filterCrops);
  document.getElementById("season-select").addEventListener("change", filterCrops);
  document.getElementById("soil-select").addEventListener("change", filterCrops);
  document.getElementById("organic-check").addEventListener("change", filterCrops);
});
