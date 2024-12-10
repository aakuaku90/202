// Define the nodes
const nodes = new vis.DataSet([
   // Food Items
   { id: 1, label: 'Vegan Sushi Roll', group: 'FoodItem' },
   { id: 2, label: 'Gluten-Free Pasta', group: 'FoodItem' },
   { id: 3, label: 'Chicken Burrito', group: 'FoodItem' },
   { id: 4, label: 'Falafel Wrap', group: 'FoodItem' },
   { id: 5, label: 'BBQ Chicken Pizza', group: 'FoodItem' },
   { id: 6, label: 'Avocado Toast', group: 'FoodItem' },
   // New Food Items
   { id: 7, label: 'Beef Pho', group: 'FoodItem' },
   { id: 8, label: 'Vegan Salad Bowl', group: 'FoodItem' },
   { id: 9, label: 'Shrimp Tacos', group: 'FoodItem' },
   { id: 10, label: 'Gluten-Free Pancakes', group: 'FoodItem' },
   // Cuisines
   { id: 11, label: 'Japanese', group: 'Cuisine' },
   { id: 12, label: 'Italian', group: 'Cuisine' },
   { id: 13, label: 'Mexican', group: 'Cuisine' },
   { id: 14, label: 'Middle Eastern', group: 'Cuisine' },
   { id: 15, label: 'American', group: 'Cuisine' },
   { id: 16, label: 'Vietnamese', group: 'Cuisine' },
   // Dietary Preferences
   { id: 17, label: 'Vegan', group: 'Dietary' },
   { id: 18, label: 'Gluten-Free', group: 'Dietary' },
   { id: 19, label: 'Halal', group: 'Dietary' },
   { id: 20, label: 'Dairy-Free', group: 'Dietary' },
   // Dining Locations
   { id: 21, label: 'Golden Bear Café', group: 'Location' },
   { id: 22, label: 'Crossroads Dining Hall', group: 'Location' },
   { id: 23, label: 'La Burrita', group: 'Location' },
   { id: 24, label: 'Cheese Board Pizza', group: 'Location' },
   { id: 25, label: 'Café Réveille', group: 'Location' },
   { id: 26, label: 'Pho K & K', group: 'Location' },
 ]);
 
 // Define the edges (relationships)
 const edges = new vis.DataSet([
   // Relationships for Vegan Sushi Roll
   { from: 1, to: 11, label: 'is a', arrows: 'to' },
   { from: 1, to: 17, label: 'suitable for', arrows: 'to' },
   { from: 1, to: 21, label: 'served at', arrows: 'to' },
   // Relationships for Gluten-Free Pasta
   { from: 2, to: 12, label: 'is a', arrows: 'to' },
   { from: 2, to: 18, label: 'suitable for', arrows: 'to' },
   { from: 2, to: 22, label: 'served at', arrows: 'to' },
   // Relationships for Chicken Burrito
   { from: 3, to: 13, label: 'is a', arrows: 'to' },
   { from: 3, to: 19, label: 'suitable for', arrows: 'to' },
   { from: 3, to: 23, label: 'served at', arrows: 'to' },
   // Relationships for Falafel Wrap
   { from: 4, to: 14, label: 'is a', arrows: 'to' },
   { from: 4, to: 17, label: 'suitable for', arrows: 'to' },
   { from: 4, to: 24, label: 'served at', arrows: 'to' },
   // Relationships for BBQ Chicken Pizza
   { from: 5, to: 15, label: 'is a', arrows: 'to' },
   { from: 5, to: 20, label: 'suitable for', arrows: 'to' },
   { from: 5, to: 25, label: 'served at', arrows: 'to' },
   // Relationships for Avocado Toast
   { from: 6, to: 15, label: 'is a', arrows: 'to' },
   { from: 6, to: 20, label: 'suitable for', arrows: 'to' },
   { from: 6, to: 25, label: 'served at', arrows: 'to' },
   // Relationships for Beef Pho
   { from: 7, to: 16, label: 'is a', arrows: 'to' },
   { from: 7, to: 19, label: 'suitable for', arrows: 'to' },
   { from: 7, to: 26, label: 'served at', arrows: 'to' },
   // Relationships for Vegan Salad Bowl
   { from: 8, to: 17, label: 'suitable for', arrows: 'to' },
   { from: 8, to: 21, label: 'served at', arrows: 'to' },
   // Relationships for Shrimp Tacos
   { from: 9, to: 13, label: 'is a', arrows: 'to' },
   { from: 9, to: 20, label: 'suitable for', arrows: 'to' },
   { from: 9, to: 23, label: 'served at', arrows: 'to' },
   // Relationships for Gluten-Free Pancakes
   { from: 10, to: 15, label: 'is a', arrows: 'to' },
   { from: 10, to: 18, label: 'suitable for', arrows: 'to' },
   { from: 10, to: 22, label: 'served at', arrows: 'to' },
]);

// Network container
const container = document.getElementById('network');

// Provide data and options to the network
const data = { nodes: nodes, edges: edges };

// Define options
const options = {
  nodes: {
    shape: 'dot', // Set node shape
    size: 30, // Increase node size
    font: { size: 20, color: '#000' }, // Increase font size
    borderWidth: 2,
  },
  edges: {
    font: { size: 14, align: 'middle', color: '#555' }, // Increase edge font size
    arrows: { to: { enabled: true, scaleFactor: 1.5 } }, // Adjust arrow size
    color: { color: '#cccccc' },
  },
  groups: {
    FoodItem: { color: { background: '#FFA500', border: '#FF8C00' } },
    Cuisine: { color: { background: '#00BFFF', border: '#1E90FF' } },
    Dietary: { color: { background: '#32CD32', border: '#228B22' } },
    Location: { color: { background: '#FF69B4', border: '#FF1493' } },
  },
  interaction: {
    zoomView: false, // Disable zooming
    dragView: true, // Allow dragging
    dragNodes: true, // Allow dragging nodes
  },
  physics: {
    enabled: true, // Enable physics
    solver: 'repulsion',
    repulsion: {
      nodeDistance: 250, // Increase distance between nodes
      springLength: 200,
      springConstant: 0.05,
    },
  },
};

// Initialize the network
const network = new vis.Network(container, data, options);

// Modal functionality
const modal = document.getElementById('nodeModal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const span = document.getElementsByClassName('close')[0];

// Close modal on "x" click
span.onclick = function () {
  modal.style.display = 'none';
};

// Close modal on outside click
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Display node information in the modal
network.on('click', function (params) {
  if (params.nodes.length > 0) {
    const nodeId = params.nodes[0];
    const node = nodes.get(nodeId);
    const connectedEdges = edges.get({
      filter: edge => edge.from === nodeId || edge.to === nodeId,
    });

    let info = `<strong>Type:</strong> ${node.group}`;
    if (connectedEdges.length > 0) {
      info += '<br><strong>Connections:</strong><ul>';
      connectedEdges.forEach(edge => {
        const connectedNodeId = edge.from === nodeId ? edge.to : edge.from;
        const connectedNode = nodes.get(connectedNodeId);
        info += `<li>${edge.label}: <strong>${connectedNode.label}</strong> (${connectedNode.group})</li>`;
      });
      info += '</ul>';
    }

    modalTitle.innerHTML = node.label;
    modalBody.innerHTML = info;
    modal.style.display = 'block';
  }
});