import { useTheme } from "next-themes";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "/maps/world-110m.json"; // Local map file

export const RevenueMap = () => {
  const { theme } = useTheme();

  const locations = [
    { name: "New York", coords: [-74.006, 40.7128] },
    { name: "San Francisco", coords: [-122.4194, 37.7749] },
    { name: "Sydney", coords: [151.2093, -33.8688] },
    { name: "Singapore", coords: [103.8198, 1.3521] },
  ];

  // Ocean and land colors for a soft blue look
  const oceanColor = theme === "dark" ? "#181f2a" : "#f7f9fb";
  const landColor = theme === "dark" ? "#232b3b" : "#e3f0fa";
  const strokeColor = theme === "dark" ? "#374151" : "#b6c6d8";

  return (
    <div className="w-full h-32 overflow-hidden">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 150,
          center: [0, 20],
        }}
        style={{ width: "100%", height: "100%", background: oceanColor, borderRadius: 8 }}
      >
        <g>
          <rect x={-10} y={-10} width={900} height={400} fill={oceanColor} />
        </g>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={landColor}
                stroke={strokeColor}
                strokeWidth={0.25}
              />
            ))
          }
        </Geographies>
        {locations.map((loc) => (
          <Marker key={loc.name} coordinates={loc.coords}>
            <circle
              r={3.2}
              fill="#111"
              stroke="#fff"
              strokeWidth={1.2}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};
