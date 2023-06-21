function locateCity() {
    var city = document.getElementById("city").value;
    var date = document.getElementById("date").value;

    // You can use a map library like Leaflet or Google Maps to display the map
    // In this example, we'll use Leaflet

    // Initialize map
    var map = L.map('map').setView([0, 0], 2);

    // Add tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Get coordinates for the selected city (you can use a geocoding API for this)
    var coordinates;
    if (city === "london") {
        coordinates = [51.5074, -0.1278];
    } else if (city === "paris") {
        coordinates = [48.8566, 2.3522];
    } else if (city === "newyork") {
        coordinates = [40.7128, -74.0060];
    } else if (city === "tokyo") {
        coordinates = [35.6895, 139.6917];
    }

    // Create a marker for the city and add it to the map
    var marker = L.marker(coordinates).addTo(map);

    // Set the map view to the city's location
    map.setView(coordinates, 10);
}