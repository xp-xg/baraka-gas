// Google Maps Configuration
// Configured with Baraka Gas Google Maps API key
export const GOOGLE_MAPS_CONFIG = {
    API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBX9sZrFMq4A3RZNwISSBsiEjIjZe-Hdjo',
    MAP_LIBRARIES: ['places', 'geometry'],
    DEFAULT_ZOOM: 15,
    DEFAULT_CENTER: { lat: -1.2921, lng: 36.8219 }, // Nairobi coordinates
};

// Export the API key as a separate constant for easy access
export const GOOGLE_MAPS_API_KEY = GOOGLE_MAPS_CONFIG.API_KEY;