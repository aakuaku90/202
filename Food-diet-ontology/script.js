// Semantic network data
const nodes = [
  // Food Items
  { id: 1, type: 'FoodItem', name: 'Vegan Sushi Roll', image: 'https://media.istockphoto.com/id/1135088145/photo/internet-online-shopping-concept-with-computer-and-cart.jpg?s=2048x2048&w=is&k=20&c=M8yG2ZVBPQro38rWL3xD4Xg-KGFs2ZQwXA8xCCYmUx0=' },
  { id: 2, type: 'FoodItem', name: 'Gluten-Free Pasta', image: 'https://source.unsplash.com/150x150/?pasta,gluten-free' },
  { id: 3, type: 'FoodItem', name: 'Chicken Burrito', image: 'https://source.unsplash.com/150x150/?burrito,chicken' },
  { id: 4, type: 'FoodItem', name: 'Falafel Wrap', image: 'https://source.unsplash.com/150x150/?falafel,wrap' },
  { id: 5, type: 'FoodItem', name: 'BBQ Chicken Pizza', image: 'https://source.unsplash.com/150x150/?pizza,bbq-chicken' },
  { id: 6, type: 'FoodItem', name: 'Avocado Toast', image: 'https://source.unsplash.com/150x150/?avocado,toast' },
  { id: 7, type: 'FoodItem', name: 'Beef Pho', image: 'https://source.unsplash.com/150x150/?pho,beef' },
  { id: 8, type: 'FoodItem', name: 'Vegan Salad Bowl', image: 'https://source.unsplash.com/150x150/?salad,vegan' },
  { id: 9, type: 'FoodItem', name: 'Shrimp Tacos', image: 'https://source.unsplash.com/150x150/?tacos,shrimp' },
  { id: 10, type: 'FoodItem', name: 'Gluten-Free Pancakes', image: 'https://source.unsplash.com/150x150/?pancakes,gluten-free' },
  // New Food Items
  { id: 11, type: 'FoodItem', name: 'Kung Pao Chicken', image: 'https://source.unsplash.com/150x150/?kung-pao-chicken' },
  { id: 12, type: 'FoodItem', name: 'Paneer Tikka', image: 'https://source.unsplash.com/150x150/?paneer-tikka' },
  { id: 13, type: 'FoodItem', name: 'Pad Thai', image: 'https://source.unsplash.com/150x150/?pad-thai' },
  { id: 14, type: 'FoodItem', name: 'French Crepes', image: 'https://source.unsplash.com/150x150/?crepes,french' },
  { id: 15, type: 'FoodItem', name: 'Keto Steak Salad', image: 'https://source.unsplash.com/150x150/?steak,salad,keto' },
  { id: 16, type: 'FoodItem', name: 'Paleo Chicken Nuggets', image: 'https://source.unsplash.com/150x150/?chicken,nuggets,paleo' },
  { id: 17, type: 'FoodItem', name: 'Low-Carb Zucchini Noodles', image: 'https://source.unsplash.com/150x150/?zucchini,noodles,low-carb' },
  { id: 18, type: 'FoodItem', name: 'Pescatarian Grilled Salmon', image: 'https://source.unsplash.com/150x150/?grilled,salmon' },
  { id: 19, type: 'FoodItem', name: 'Nut-Free Almond Milk Latte', image: 'https://source.unsplash.com/150x150/?almond,milk,latte' },
  { id: 20, type: 'FoodItem', name: 'Dairy-Free Vegan Ice Cream', image: 'https://source.unsplash.com/150x150/?vegan,ice-cream' },


  // Cuisines
  { id: 21, type: 'Cuisine', name: 'Japanese' },
  { id: 22, type: 'Cuisine', name: 'Italian' },
  { id: 23, type: 'Cuisine', name: 'Mexican' },
  { id: 24, type: 'Cuisine', name: 'Middle Eastern' },
  { id: 25, type: 'Cuisine', name: 'American' },
  { id: 26, type: 'Cuisine', name: 'Vietnamese' },
  // New Cuisines
  { id: 27, type: 'Cuisine', name: 'Chinese' },
  { id: 28, type: 'Cuisine', name: 'Indian' },
  { id: 29, type: 'Cuisine', name: 'Thai' },
  { id: 30, type: 'Cuisine', name: 'French' },

  // Dietary Preferences
  { id: 31, type: 'Dietary', name: 'Vegan' },
  { id: 32, type: 'Dietary', name: 'Gluten-Free' },
  { id: 33, type: 'Dietary', name: 'Halal' },
  { id: 34, type: 'Dietary', name: 'Vegetarian' },
  { id: 35, type: 'Dietary', name: 'Dairy-Free' },
  { id: 36, type: 'Dietary', name: 'Nut-Free' },
  // New Dietary Preferences
  { id: 37, type: 'Dietary', name: 'Keto' },
  { id: 38, type: 'Dietary', name: 'Paleo' },
  { id: 39, type: 'Dietary', name: 'Low-Carb' },
  { id: 40, type: 'Dietary', name: 'Pescatarian' },

  // Dining Locations
  { id: 41, type: 'Location', name: 'Golden Bear Café', latitude: 37.8701, longitude: -122.2595, address: 'UC Berkeley Campus', hours: { open: '07:00', close: '19:00' } },
  { id: 42, type: 'Location', name: 'Crossroads Dining Hall', latitude: 37.8688, longitude: -122.2565, address: '2415 Bowditch St', hours: { open: '07:00', close: '21:00' } },
  { id: 43, type: 'Location', name: 'La Burrita', latitude: 37.8685, longitude: -122.2588, address: '2530 Durant Ave', hours: { open: '11:00', close: '22:00' } },
  { id: 44, type: 'Location', name: 'Cheese Board Pizza', latitude: 37.8796, longitude: -122.2689, address: '1512 Shattuck Ave', hours: { open: '11:30', close: '15:00' } },
  { id: 45, type: 'Location', name: 'Café Réveille', latitude: 37.8719, longitude: -122.2585, address: '2000 Bancroft Way', hours: { open: '07:00', close: '15:00' } },
  { id: 46, type: 'Location', name: 'Pho K & K', latitude: 37.8732, longitude: -122.2680, address: '2523 Durant Ave', hours: { open: '10:00', close: '22:00' } },
  { id: 47, type: 'Location', name: 'Dragon Palace', latitude: 37.8720, longitude: -122.2711, address: '3000 Harrison St', hours: { open: '11:00', close: '22:00' } },
  { id: 48, type: 'Location', name: 'Bombay Bistro', latitude: 37.8690, longitude: -122.2650, address: '4000 Hopkins St', hours: { open: '10:00', close: '20:00' } },
  { id: 49, type: 'Location', name: 'Thai Spice', latitude: 37.8705, longitude: -122.2620, address: '5000 Durant Ave', hours: { open: '11:00', close: '21:00' } },
  { id: 50, type: 'Location', name: 'Le Petit Café', latitude: 37.8712, longitude: -122.2590, address: '6000 University Ave', hours: { open: '08:00', close: '18:00' } },
];

const edges = [
  // Food Item to Cuisine
  { from: 1, to: 21, relation: 'is a' }, // Vegan Sushi Roll - Japanese
  { from: 2, to: 22, relation: 'is a' }, // Gluten-Free Pasta - Italian
  { from: 3, to: 23, relation: 'is a' }, // Chicken Burrito - Mexican
  { from: 4, to: 24, relation: 'is a' }, // Falafel Wrap - Middle Eastern
  { from: 5, to: 25, relation: 'is a' }, // BBQ Chicken Pizza - American
  { from: 6, to: 25, relation: 'is a' }, // Avocado Toast - American
  { from: 7, to: 26, relation: 'is a' }, // Beef Pho - Vietnamese
  { from: 8, to: 34, relation: 'suitable for' }, // Vegan Salad Bowl - Vegetarian
  { from: 9, to: 23, relation: 'is a' }, // Shrimp Tacos - Mexican
  { from: 10, to: 25, relation: 'is a' }, // Gluten-Free Pancakes - American
  // New Food Items to Cuisines
  { from: 11, to: 27, relation: 'is a' }, // Kung Pao Chicken - Chinese
  { from: 12, to: 28, relation: 'is a' }, // Paneer Tikka - Indian
  { from: 13, to: 29, relation: 'is a' }, // Pad Thai - Thai
  { from: 14, to: 30, relation: 'is a' }, // French Crepes - French
  { from: 15, to: 25, relation: 'is a' }, // Keto Steak Salad - American
  { from: 16, to: 25, relation: 'is a' }, // Paleo Chicken Nuggets - American
  { from: 17, to: 25, relation: 'is a' }, // Low-Carb Zucchini Noodles - American
  { from: 18, to: 25, relation: 'is a' }, // Pescatarian Grilled Salmon - American
  { from: 19, to: 25, relation: 'is a' }, // Nut-Free Almond Milk Latte - American
  { from: 20, to: 25, relation: 'is a' }, // Dairy-Free Vegan Ice Cream - American

  // Food Item to Dietary Preference
  { from: 1, to: 31, relation: 'suitable for' }, // Vegan Sushi Roll - Vegan
  { from: 2, to: 32, relation: 'suitable for' }, // Gluten-Free Pasta - Gluten-Free
  { from: 3, to: 33, relation: 'suitable for' }, // Chicken Burrito - Halal
  { from: 4, to: 31, relation: 'suitable for' }, // Falafel Wrap - Vegan
  { from: 5, to: 36, relation: 'suitable for' }, // BBQ Chicken Pizza - Nut-Free
  { from: 6, to: 35, relation: 'suitable for' }, // Avocado Toast - Dairy-Free
  { from: 7, to: 33, relation: 'suitable for' }, // Beef Pho - Halal
  { from: 8, to: 31, relation: 'suitable for' }, // Vegan Salad Bowl - Vegan
  { from: 9, to: 35, relation: 'suitable for' }, // Shrimp Tacos - Dairy-Free
  { from: 10, to: 32, relation: 'suitable for' }, // Gluten-Free Pancakes - Gluten-Free
  // New Food Items to Dietary Preferences
  { from: 11, to: 37, relation: 'suitable for' }, // Kung Pao Chicken - Keto
  { from: 12, to: 34, relation: 'suitable for' }, // Paneer Tikka - Vegetarian
  { from: 13, to: 31, relation: 'suitable for' }, // Pad Thai - Vegan
  { from: 14, to: 35, relation: 'suitable for' }, // French Crepes - Dairy-Free
  { from: 15, to: 37, relation: 'suitable for' }, // Keto Steak Salad - Keto
  { from: 16, to: 38, relation: 'suitable for' }, // Paleo Chicken Nuggets - Paleo
  { from: 17, to: 39, relation: 'suitable for' }, // Low-Carb Zucchini Noodles - Low-Carb
  { from: 18, to: 40, relation: 'suitable for' }, // Pescatarian Grilled Salmon - Pescatarian
  { from: 19, to: 36, relation: 'suitable for' }, // Nut-Free Almond Milk Latte - Nut-Free
  { from: 20, to: 31, relation: 'suitable for' }, // Dairy-Free Vegan Ice Cream - Vegan

  // Food Item to Location
  { from: 1, to: 41, relation: 'served at' }, // Vegan Sushi Roll - Golden Bear Café
  { from: 2, to: 42, relation: 'served at' }, // Gluten-Free Pasta - Crossroads Dining Hall
  { from: 3, to: 43, relation: 'served at' }, // Chicken Burrito - La Burrita
  { from: 4, to: 44, relation: 'served at' }, // Falafel Wrap - Cheese Board Pizza
  { from: 5, to: 45, relation: 'served at' }, // BBQ Chicken Pizza - Café Réveille
  { from: 6, to: 45, relation: 'served at' }, // Avocado Toast - Café Réveille
  { from: 7, to: 46, relation: 'served at' }, // Beef Pho - Pho K & K
  { from: 8, to: 41, relation: 'served at' }, // Vegan Salad Bowl - Golden Bear Café
  { from: 9, to: 43, relation: 'served at' }, // Shrimp Tacos - La Burrita
  { from: 10, to: 42, relation: 'served at' }, // Gluten-Free Pancakes - Crossroads Dining Hall
  // New Food Items to Locations
  { from: 11, to: 47, relation: 'served at' }, // Kung Pao Chicken - Dragon Palace
  { from: 12, to: 48, relation: 'served at' }, // Paneer Tikka - Bombay Bistro
  { from: 13, to: 49, relation: 'served at' }, // Pad Thai - Thai Spice
  { from: 14, to: 50, relation: 'served at' }, // French Crepes - Le Petit Café
  { from: 15, to: 41, relation: 'served at' }, // Keto Steak Salad - Golden Bear Café
  { from: 16, to: 42, relation: 'served at' }, // Paleo Chicken Nuggets - Crossroads Dining Hall
  { from: 17, to: 43, relation: 'served at' }, // Low-Carb Zucchini Noodles - La Burrita
  { from: 18, to: 47, relation: 'served at' }, // Pescatarian Grilled Salmon - Dragon Palace
  { from: 19, to: 45, relation: 'served at' }, // Nut-Free Almond Milk Latte - Café Réveille
  { from: 20, to: 50, relation: 'served at' }, // Dairy-Free Vegan Ice Cream - Le Petit Café
];

// Global variables for the map and markers
let map;
let markers = [];

// Initialize Map - Must be in the global scope for the Google Maps API callback
function initMap() {
  // Default center at UC Berkeley
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.8715, lng: -122.2600 },
    zoom: 14,
  });
}

// Function to get recommendations based on user preferences
function getRecommendations() {
  const dietaryPreference = document.getElementById('dietary').value;
  const preferredCuisine = document.getElementById('cuisine').value;

  // Save user preferences for future visits
  localStorage.setItem('dietaryPreference', dietaryPreference);
  localStorage.setItem('preferredCuisine', preferredCuisine);

  // Filter food items based on preferences
  const recommendedFoodItems = nodes.filter(node => {
    if (node.type === 'FoodItem') {
      let matchesDietary = true;
      let matchesCuisine = true;

      // Check dietary preference
      if (dietaryPreference) {
        matchesDietary = edges.some(edge => {
          return edge.from === node.id &&
                 edge.relation === 'suitable for' &&
                 nodes.find(n => n.id === edge.to && n.name === dietaryPreference);
        });
      }

      // Check preferred cuisine
      if (preferredCuisine) {
        matchesCuisine = edges.some(edge => {
          return edge.from === node.id &&
                 edge.relation === 'is a' &&
                 nodes.find(n => n.id === edge.to && n.name === preferredCuisine);
        });
      }

      return matchesDietary && matchesCuisine;
    }
    return false;
  });

  displayRecommendations(recommendedFoodItems);
}

// Function to display recommendations
function displayRecommendations(foodItems) {
  const list = document.getElementById('recommendations-list');
  list.innerHTML = ''; // Clear previous results

  // Clear existing markers on the map
  clearMarkers();

  if (foodItems.length === 0) {
    list.innerHTML = '<li>No food items match your preferences.</li>';
    return;
  }

  foodItems.forEach(item => {
    // Find the location
    const locationEdge = edges.find(edge => edge.from === item.id && edge.relation === 'served at');
    const locationNode = nodes.find(node => node.id === locationEdge.to);

    // Create list item
    const listItem = document.createElement('li');
    listItem.classList.add('recommendation-item');

    listItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="recommendation-details">
        <h3>${item.name}</h3>
        <p><strong>Served at:</strong> ${locationNode.name}</p>
        <p><strong>Address:</strong> ${locationNode.address}</p>
        <p><strong>Operating Hours:</strong> ${locationNode.hours.open} - ${locationNode.hours.close}</p>
      </div>
    `;

    list.appendChild(listItem);

    // Add marker to the map
    addMarker(locationNode);
  });

  // Center map on Berkeley
  centerMapOnBerkeley();
}

// Function to add marker to the map
function addMarker(locationNode) {
  const marker = new google.maps.Marker({
    position: { lat: locationNode.latitude, lng: locationNode.longitude },
    map: map,
    title: locationNode.name,
  });

  // Optional: Add info window to the marker
  const infoWindow = new google.maps.InfoWindow({
    content: `<h3>${locationNode.name}</h3><p>${locationNode.address}</p><p>Operating Hours: ${locationNode.hours.open} - ${locationNode.hours.close}</p>`,
  });

  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });

  markers.push(marker);
}

// Function to clear markers from the map
function clearMarkers() {
  markers.forEach(marker => marker.setMap(null));
  markers = [];
}

// Function to center map on Berkeley
function centerMapOnBerkeley() {
  const berkeleyLatLng = { lat: 37.8715, lng: -122.2600 };
  map.setCenter(berkeleyLatLng);
}

// Load saved preferences on page load
window.onload = function () {
  const savedDietary = localStorage.getItem('dietaryPreference');
  const savedCuisine = localStorage.getItem('preferredCuisine');

  if (savedDietary) {
    document.getElementById('dietary').value = savedDietary;
  }

  if (savedCuisine) {
    document.getElementById('cuisine').value = savedCuisine;
  }

  // Optionally, trigger recommendations on load if preferences are saved
  // if (savedDietary || savedCuisine) {
  //   getRecommendations();
  // }
};