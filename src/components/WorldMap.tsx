import React from 'react';

const WorldMap = () => {
  return (
    <div className="relative w-full aspect-[2/1] bg-black/30 rounded-xl p-4 md:p-8">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* World Map Outline */}
          <path
            d="M201,147 l-11,-7 l-14,5 l-3,7 l18,15 l12,-8 l-2,-12 M170,92 l-12,1 l-3,7 l5,14 l15,3 l8,-7 l-13,-18
               M539,151 l-21,-13 l-11,5 l-4,12 l9,15 l16,2 l11,-8 l-0,-13
               M398,112 l-29,-21 l-16,7 l-6,17 l13,22 l23,3 l15,-11 l0,-17
               M287,183 l-35,-25 l-19,8 l-7,20 l15,26 l27,4 l19,-14 l0,-19
               M689,216 l-25,-18 l-14,6 l-5,15 l11,19 l20,3 l13,-10 l0,-15
               M476,141 l-18,-13 l-10,5 l-4,11 l8,14 l14,2 l10,-8 l0,-11
               M590,168 l-22,-16 l-12,6 l-4,13 l9,17 l17,2 l12,-9 l0,-13"
            stroke="rgba(249, 115, 22, 0.15)"
            strokeWidth="1"
            fill="rgba(249, 115, 22, 0.05)"
          />

          {/* Continents */}
          <path
            d="M150,120 C250,140 350,130 450,150 C550,170 650,160 750,180 C850,200 900,190 950,210
               M100,180 C200,200 300,190 400,210 C500,230 600,220 700,240 C800,260 850,250 900,270
               M50,240 C150,260 250,250 350,270 C450,290 550,280 650,300 C750,320 800,310 850,330"
            stroke="rgba(249, 115, 22, 0.1)"
            strokeWidth="2"
            fill="none"
          />

          {/* Location Markers with Pulse Effect */}
          {[
            { x: 250, y: 180, label: "USA" },
            { x: 470, y: 150, label: "UK" },
            { x: 650, y: 220, label: "India" }
          ].map((location, index) => (
            <g key={index}>
              {/* Pulse Animation */}
              <circle
                cx={location.x}
                cy={location.y}
                r="10"
                fill="none"
                stroke="rgba(249, 115, 22, 0.5)"
                strokeWidth="2"
                className="animate-ping"
              />
              {/* Main Marker */}
              <circle
                cx={location.x}
                cy={location.y}
                r="6"
                fill="#f97316"
                className="drop-shadow-lg"
              />
              {/* Label */}
              <text
                x={location.x}
                y={location.y - 15}
                fill="#f97316"
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                className="drop-shadow-lg"
              >
                {location.label}
              </text>
            </g>
          ))}

          {/* Connection Lines with Animation */}
          <g className="connection-lines">
            <path
              d="M250,180 L470,150 L650,220 L250,180"
              stroke="rgba(249, 115, 22, 0.3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className="animate-dash"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="10"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>

      {/* Mobile Optimization */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-orange-500 font-semibold">• USA</div>
          <div className="text-orange-500 font-semibold">• UK</div>
          <div className="text-orange-500 font-semibold">• India</div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;