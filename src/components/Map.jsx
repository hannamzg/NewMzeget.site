import { useEffect, useRef } from 'react';

const Map = ({ className = "" }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Leaflet CSS and JS dynamically
    const loadLeaflet = async () => {
      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      
      return new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      try {
        await loadLeaflet();
        
        // Wait for Leaflet to be available
        if (typeof window.L === 'undefined') {
          setTimeout(initMap, 100);
          return;
        }

        const { L } = window;
        
        // Coordinates for Abu Sanan, Israel
        const abuSananCoords = [32.9581, 35.1719];
        
        // Initialize map
        const map = L.map(mapRef.current).setView(abuSananCoords, 15);
        mapInstanceRef.current = map;

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19
        }).addTo(map);

        // Add custom marker
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="
              background-color: #dc2626;
              width: 30px;
              height: 30px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 3px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                transform: rotate(45deg);
                color: white;
                font-weight: bold;
                font-size: 14px;
              ">א</div>
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30]
        });

        // Add marker
        const marker = L.marker(abuSananCoords, { icon: customIcon }).addTo(map);
        
        // Add popup
        marker.bindPopup(`
          <div style="text-align: center; direction: rtl;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">אלי מזיגית - נגרות מקצועית</h3>
            <p style="margin: 0; color: #6b7280;">אבו סנאן 166</p>
            <p style="margin: 0; color: #6b7280;">אבו סנאן, ישראל</p>
            <a href="tel:+972525119685" style="color: #dc2626; text-decoration: none; font-weight: 500;">052-5119685</a>
          </div>
        `);

        // Add click handler to open popup
        marker.on('click', () => {
          marker.openPopup();
        });

      } catch (error) {
        console.error('Error loading map:', error);
        // Fallback: show error message
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; text-align: center; color: #6b7280;">
              <div>
                <p>שגיאה בטעינת המפה</p>
                <p style="font-size: 14px;">אבו סנאן 166, אבו סנאן</p>
              </div>
            </div>
          `;
        }
      }
    };

    initMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full rounded-lg ${className}`}
      style={{ minHeight: '300px' }}
    />
  );
};

export default Map;
