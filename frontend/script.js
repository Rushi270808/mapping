// Function to redirect to Google Maps
function goToMap() {
    window.location.href = 'https://www.google.co.in/maps/@19.153143,72.9849022,14z?entry=ttu';
}

// Function to handle login
async function login() {
    const username = document.getElementById('login-username-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Login successful', result);
            // Redirect to additional details form
            showAdditionalForm();
        } else {
            console.error('Login failed', result);
            alert('Login failed: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login');
    }
}

// Function to handle registration
async function register() {
    const fullname = document.getElementById('register-fullname').value;
    const username = document.getElementById('register-username-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullname, username, password }),
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Registration successful', result);
            // Redirect to login
            showLogin();
        } else {
            console.error('Registration failed', result);
            alert('Registration failed: ' + result.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration');
    }
}

// Function to show registration form
function showRegistration() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('registration-form').classList.remove('hidden');
}

// Function to show login form
function showLogin() {
    document.getElementById('registration-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

// Function to show additional form after login
function showAdditionalForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('registration-form').classList.add('hidden');
    document.getElementById('additional-form').classList.remove('hidden');
}

// Function to handle additional details submission
function submitDetails() {
    const name = document.getElementById('name').value;
    const amenity = document.getElementById('amenity').value;
    const location = document.getElementById('location').value;

    console.log('Details submitted:', { name, amenity, location });

    // Display the map with markers after submitting details
    showMap();
}

// Function to display the map
function showMap() {
    document.getElementById('map').style.display = 'block';
    initMap();
}

// Initialize the map with Leaflet
function initMap() {
    const map = L.map('map').setView([19.153143, 72.9849022], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Example clusters
    const markers = [
        { lat: 19.153143, lng: 72.9849022 }
        // Add more marker positions here if needed
    ];

    markers.forEach(marker => {
        L.marker([marker.lat, marker.lng]).addTo(map);
    });
}
