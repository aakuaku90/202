// Crop data with family and nutritional value
const crops = [
  { id: 1, name: 'Tomato', family: 'Solanaceae', color: 'Red', category: 'Fruit', nutritionalValue: ['Vitamin C', 'Lycopene'], usedFor: ['Salads', 'Sauces'] },
  { id: 2, name: 'Potato', family: 'Solanaceae', color: 'Brown', category: 'Tuber', nutritionalValue: ['Carbohydrates'], usedFor: ['Fries', 'Stews'] },
  { id: 3, name: 'Carrot', family: 'Apiaceae', color: 'Orange', category: 'Vegetable', nutritionalValue: ['Vitamin A'], usedFor: ['Juices', 'Soups'] },
  { id: 4, name: 'Avocado', family: 'Lauraceae', color: 'Green', category: 'Fruit', nutritionalValue: ['Healthy fats', 'Vitamin E'], usedFor: ['Salads', 'Smoothies'] },
  { id: 5, name: 'Pumpkin', family: 'Cucurbitaceae', color: 'Orange', category: 'Vegetable', nutritionalValue: ['Vitamin A', 'Fiber'], usedFor: ['Soups', 'Roasts'] }
];

// Family descriptions
const familyDescriptions = {
  Solanaceae: 'The Solanaceae family includes crops such as tomatoes and potatoes, known for their diverse uses in cooking.',
  Apiaceae: 'The Apiaceae family includes crops such as carrots, known for their high Vitamin A content.',
  Lauraceae: 'The Lauraceae family includes crops such as avocados, rich in healthy fats.',
  Cucurbitaceae: 'The Cucurbitaceae family includes crops such as pumpkins, known for their fiber and Vitamin A content.'
};

// Create nodes and edges for the network
const nodes = [];
const edges = [];

// Add family nodes
const families = [...new Set(crops.map(crop => crop.family))];
families.forEach((family, index) => {
  nodes.push({
    id: `family-${index}`,
    label: family,
    group: 'Family',
    shape: 'hexagon',
    size: 40,
    description: familyDescriptions[family] // Attach description
  });
});

// Add crop nodes and connections
crops.forEach(crop => {
  nodes.push({
    id: crop.id,
    label: crop.name,
    group: 'Crop',
    shape: 'ellipse',
    size: 35,
    details: crop
  });

  // Connect crop to its family
  const familyId = nodes.find(node => node.label === crop.family).id;
  edges.push({
    from: crop.id,
    to: familyId,
    label: 'Is a family of',
    color: { color: '#FFA500' },
  });

  // Add "Used For" nodes and connections
  crop.usedFor.forEach((use, index) => {
    const useNodeId = `use-${crop.id}-${index}`;
    nodes.push({ id: useNodeId, label: use, group: 'Uses', size: 30 });
    edges.push({ from: crop.id, to: useNodeId, label: 'Used For' });
  });
});

// Visualization options
const options = {
  nodes: {
    shape: 'dot',
    font: { size: 24 },
    margin: 20,
  },
  edges: {
    font: { align: 'middle', size: 16 },
    arrows: { to: { enabled: true, scaleFactor: 1.5 } },
    color: { color: '#cccccc' },
    length: 300,
  },
  physics: {
    enabled: true,
    solver: 'repulsion',
    repulsion: {
      nodeDistance: 250,
      centralGravity: 0.1,
      springLength: 200,
      springConstant: 0.05,
    },
  },
  interaction: {
    zoomView: false, // Disable zooming
    dragView: true,
  },
  groups: {
    Crop: { color: { background: '#FFD700', border: '#FFC107' } },
    Family: { color: { background: '#4CAF50', border: '#388E3C' } },
    Uses: { color: { background: '#FF9800', border: '#F57C00' } },
  }
};

// Initialize network
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('network');
  const data = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
  const network = new vis.Network(container, data, options);

  // Add click event listener
  network.on('click', params => {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      const node = nodes.find(n => n.id === nodeId);
      if (node) {
        showDetails(node);
      }
    }
  });

  // Close popup when the close button is clicked
  document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('details-popup').style.display = 'none';
  });
});

// Display node details
function showDetails(node) {
  const detailsPopup = document.getElementById('details-popup');
  const popupContent = document.getElementById('popup-content');
  
  if (node.group === 'Crop' && node.details) {
    const { name, family, color, category, nutritionalValue, usedFor } = node.details;
    popupContent.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Family:</strong> ${family}</p>
      <p><strong>Color:</strong> ${color}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Nutritional Value:</strong> ${nutritionalValue.join(', ')}</p>
      <p><strong>Used For:</strong> ${usedFor.join(', ')}</p>
    `;
  } else if (node.group === 'Family') {
    popupContent.innerHTML = `
      <h2>${node.label}</h2>
      <p>${node.description}</p>
    `;
  } else {
    popupContent.innerHTML = `<h2>${node.label}</h2>`;
  }

  detailsPopup.style.display = 'block';
}