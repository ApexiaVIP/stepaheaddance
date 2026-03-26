import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  {
    name: "Heald Green",
    address: "Sylvia Roberts, Guide Hall, Cross RD, Heald Green, SK8 3LW",
    lat: 53.3687,
    lng: -2.2345,
  },
  {
    name: "Poynton",
    address: "The Hockley Centre, 307 Park Lane, Poynton, SK12 1RJ",
    lat: 53.3515,
    lng: -2.1285,
  },
];

// Custom branded SVG pin in Step Ahead pink
const createBrandedIcon = () => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 32 44">
      <defs>
        <filter id="shadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 28 16 28s16-16 16-28C32 7.16 24.84 0 16 0z" fill="hsl(340,65%,65%)" filter="url(#shadow)"/>
      <circle cx="16" cy="15" r="7" fill="white"/>
      <text x="16" y="19" text-anchor="middle" font-size="12" font-weight="bold" fill="hsl(340,65%,65%)" font-family="sans-serif">★</text>
    </svg>
  `;

  return L.divIcon({
    html: svg,
    className: "branded-pin",
    iconSize: [32, 44],
    iconAnchor: [16, 44],
    popupAnchor: [0, -44],
  });
};

const FooterMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Center between the two locations
    const centerLat = (locations[0].lat + locations[1].lat) / 2;
    const centerLng = (locations[0].lng + locations[1].lng) / 2;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    }).setView([centerLat, centerLng], 12);

    // Use a muted/dark tile style
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    const icon = createBrandedIcon();

    locations.forEach((loc) => {
      L.marker([loc.lat, loc.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:'DM Sans',sans-serif;text-align:center;padding:4px;">
            <strong style="color:hsl(340,65%,65%);font-size:14px;">${loc.name}</strong><br/>
            <span style="font-size:12px;color:#555;">${loc.address}</span>
          </div>`,
          { closeButton: false, className: "branded-popup" }
        );
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-[280px] rounded-2xl overflow-hidden border border-primary-foreground/10"
      style={{ zIndex: 0 }}
    />
  );
};

export default FooterMap;
