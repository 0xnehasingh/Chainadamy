import React from 'react'

const ChainaddemyLogo = ({ className = "", isDarkMode = false }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="40" 
    height="40" 
    viewBox="0 0 300 300"
    className={className}
  >
    {/* Central Hexagon (Hive Core) */}
    <polygon 
      points="150,40 230,90 230,170 150,220 70,170 70,90"
      fill={isDarkMode ? "#1a202c" : "#2C3E50"} 
      stroke={isDarkMode ? "#ffd700" : "#f1c40f"} 
      strokeWidth="4" 
    />
    {/* Graduation Cap inside the Hexagon */}
    {/* Cap Top (mortarboard) */}
    <polygon 
      points="120,110 150,95 180,110 150,125"
      fill={isDarkMode ? "#ffd700" : "#f39c12"} 
    />
    {/* Cap Band */}
    <rect x="142" y="125" width="16" height="10" fill={isDarkMode ? "#ffd700" : "#f39c12"} />
    {/* Cap Tassel */}
    <line 
      x1="150" y1="125" x2="150" y2="140" 
      stroke={isDarkMode ? "#ffd700" : "#f39c12"} 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
    {/* Network Nodes & Chain Links (On-Chain Connectivity) */}
    {/* Nodes around the hexagon */}
    <circle cx="150" cy="20" r="5" fill={isDarkMode ? "#ffd700" : "#f1c40f"} />
    <circle cx="240" cy="90" r="5" fill={isDarkMode ? "#ffd700" : "#f1c40f"} />
    <circle cx="240" cy="170" r="5" fill={isDarkMode ? "#ffd700" : "#f1c40f"} />
    <circle cx="150" cy="240" r="5" fill={isDarkMode ? "#ffd700" : "#f1c40f"} />
    <circle cx="60" cy="170" r="5" fill={isDarkMode ? "#ffd700" : "#f1c40f"} />
    <circle cx="60" cy="90" r="5" fill={isDarkMode ? "#ffd700" : "#f1c40f"} />
    
    {/* Connecting Lines */}
    <line 
      x1="150" y1="40" x2="150" y2="20" 
      stroke={isDarkMode ? "#ffd700" : "#f1c40f"} 
      strokeWidth="2" 
    />
    <line 
      x1="230" y1="90" x2="240" y2="90" 
      stroke={isDarkMode ? "#ffd700" : "#f1c40f"} 
      strokeWidth="2" 
    />
    <line 
      x1="230" y1="170" x2="240" y2="170" 
      stroke={isDarkMode ? "#ffd700" : "#f1c40f"} 
      strokeWidth="2" 
    />
    <line 
      x1="150" y1="220" x2="150" y2="240" 
      stroke={isDarkMode ? "#ffd700" : "#f1c40f"} 
      strokeWidth="2" 
    />
    <line 
      x1="70" y1="170" x2="60" y2="170" 
      stroke={isDarkMode ? "#ffd700" : "#f1c40f"} 
      strokeWidth="2" 
    />
    <line 
      x1="70" y1="90" x2="60" y2="90" 
      stroke={isDarkMode ? "#ffd700" : "#f1c40f"} 
      strokeWidth="2" 
    />
  </svg>
);

export default Logo