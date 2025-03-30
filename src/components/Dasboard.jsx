import { useState } from 'react';
import { Search, Moon, Sun, RefreshCw, ExternalLink, User, MessageSquare, Book, 
         PlusCircle, Twitter, ChevronDown, DollarSign, Calendar, Bookmark, ChevronUp, Star, Send, Check } from 'lucide-react';

// Custom logos for AI providers as SVG components
const OpenAILogoSvg = () => (
  <svg 
    viewBox="0 0 512 512" 
    width="24" 
    height="24">
    <circle cx="256" cy="256" r="256" fill="#10A37F"/>
    <path 
      d="M346.5 212.3C343 197.3 335 184.4 323.5 175C312 165.6 297.8 160 283 159.1C268.2 158.2 253.5 162.2 241.1 170.5C230.9 151.7 214.5 138.2 194.6 132.5C174.7 126.8 153.4 129.2 135.3 139.2C117.2 149.2 103.7 166.1 97.6 186.5C91.5 206.9 93.3 228.8 102.7 247.8C90.51 260.4 83.06 276.7 81.61 294.1C80.16 311.5 84.8 328.8 94.86 343C104.9 357.2 119.8 367.3 136.9 371.5C153.9 375.7 171.8 373.9 187.5 366.3C198.7 385.2 215.2 398.7 235.3 404.4C255.3 410.1 276.8 407.7 295 397.6C313.2 387.6 326.8 370.7 332.9 350.2C339 329.8 337.2 307.8 327.8 288.8C340 276.2 347.4 259.8 348.9 242.4C350.3 225 345.7 207.7 335.7 193.5C340.2 198.9 343.7 205 346.1 211.6L346.5 212.3Z" 
      fill="white" 
      strokeWidth="8"
    />
  </svg>
);

const DeepseekLogoSvg = () => (
  <svg 
    viewBox="0 0 512 512" 
    width="24" 
    height="24">
    <circle cx="256" cy="256" r="256" fill="#4A7CF6"/>
    <path 
      d="M357 192.2c-8.8 0-17.3-3.5-23.5-9.7-13-13-13-34 0-47 6.3-6.3 14.7-9.7 23.5-9.7 8.8 0 17.3 3.5 23.5 9.7 13 13 13 34 0 47-6.2 6.3-14.7 9.7-23.5 9.7zm-44.4 44.4c-4.7 0-9.2-1.9-12.5-5.2-6.9-6.9-6.9-18.1 0-25 3.3-3.3 7.8-5.2 12.5-5.2s9.2 1.9 12.5 5.2c6.9 6.9 6.9 18.1 0 25-3.3 3.3-7.8 5.2-12.5 5.2zm-88.7 0c-8.8 0-17.3-3.5-23.5-9.7-13-13-13-34 0-47 6.3-6.3 14.7-9.7 23.5-9.7 8.8 0 17.3 3.5 23.5 9.7 13 13 13 34 0 47-6.2 6.2-14.7 9.7-23.5 9.7zm-44.4 44.4c-4.7 0-9.2-1.9-12.5-5.2-6.9-6.9-6.9-18.1 0-25 3.3-3.3 7.8-5.2 12.5-5.2s9.2 1.9 12.5 5.2c6.9 6.9 6.9 18.1 0 25-3.3 3.3-7.8 5.2-12.5 5.2zm88.7 44.5c-8.8 0-17.3-3.5-23.5-9.7-13-13-13-34 0-47 6.3-6.3 14.7-9.7 23.5-9.7 8.8 0 17.3 3.5 23.5 9.7 13 13 13 34 0 47-6.2 6.2-14.7 9.7-23.5 9.7z" 
      fill="white"
    />
  </svg>
);

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

const Chainademy = () => {
  const [activeModel, setActiveModel] = useState('openai');
  const [darkMode, setDarkMode] = useState(false);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [chatsExpanded, setChatsExpanded] = useState(true);
  const [tokensExpanded, setTokensExpanded] = useState(true);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle search submission
  const handleSearchSubmit = () => {
    if (searchText.trim()) {
      console.log(`Searching with ${activeModel}: ${searchText}`);
      // Here you would typically send the search to your backend
    }
  };
  
  return (
    <div className={`flex h-screen ${darkMode 
      ? 'bg-gray-900 text-gray-100' 
      : 'bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800'}`}>
      {/* Sidebar */}
      <div className={`w-64 ${darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'} border-r flex flex-col`}>
        <div className={`p-4 flex items-center justify-between border-b ${darkMode 
          ? 'border-gray-700' 
          : 'border-gray-100'}`}>
          <div className="flex items-center gap-2">
            <ChainaddemyLogo isDarkMode={darkMode} />
            <span className="font-bold">Chainademy</span>
          </div>
          <div className="flex gap-1">
            <button 
              className={`${darkMode 
                ? 'text-gray-400 hover:text-gray-200' 
                : 'text-gray-400 hover:text-gray-600'} p-1`}
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className={`${darkMode 
              ? 'text-gray-400 hover:text-gray-200' 
              : 'text-gray-400 hover:text-gray-600'} p-1`}>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
          <a href="#" className={`flex items-center gap-3 px-3 py-2 ${darkMode 
            ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
            : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'} rounded-lg transition-colors`}>
            <User size={18} />
            <span>Account</span>
          </a>
          
          {/* Chats section */}
          <div>
            <div 
              className="flex items-center justify-between px-3 mb-1 cursor-pointer"
              onClick={() => setChatsExpanded(!chatsExpanded)}
            >
              <span className={`text-sm font-medium ${darkMode 
                ? 'text-gray-400' 
                : 'text-gray-500'}`}>Chats</span>
              <div className="flex items-center">
                <button className={`${darkMode 
                  ? 'text-gray-400 hover:text-gray-200' 
                  : 'text-gray-400 hover:text-gray-600'} mr-1`}>
                  <PlusCircle size={16} />
                </button>
                <button className={`${darkMode 
                  ? 'text-gray-400 hover:text-gray-200' 
                  : 'text-gray-400 hover:text-gray-600'}`}>
                  {chatsExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                </button>
              </div>
            </div>
            
            {chatsExpanded && (
              <div className="space-y-1">
                <a href="#" className={`flex items-center gap-3 px-3 py-2 ${darkMode 
                  ? 'bg-gray-700 text-yellow-400' 
                  : 'bg-indigo-50 text-indigo-600'} rounded-lg`}>
                  <MessageSquare size={18} />
                  <span>Education Finance</span>
                </a>
                <a href="#" className={`flex items-center gap-3 px-3 py-2 ${darkMode 
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'} rounded-lg transition-colors`}>
                  <MessageSquare size={18} />
                  <span>Finding optimal...</span>
                </a>
                <a href="#" className={`flex items-center gap-3 px-3 py-2 ${darkMode 
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'} rounded-lg transition-colors`}>
                  <MessageSquare size={18} />
                  <span>Request for Orc...</span>
                </a>
              </div>
            )}
          </div>
          
          {/* Tokens section */}
          <div>
            <div 
              className="flex items-center justify-between px-3 mb-1 cursor-pointer"
              onClick={() => setTokensExpanded(!tokensExpanded)}
            >
              <span className={`text-sm font-medium ${darkMode 
                ? 'text-gray-400' 
                : 'text-gray-500'}`}>Tokens</span>
              <button className={`${darkMode 
                ? 'text-gray-400 hover:text-gray-200' 
                : 'text-gray-400 hover:text-gray-600'}`}>
                {tokensExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </button>
            </div>
            
            {tokensExpanded && (
              <div className={`px-3 py-2 text-sm ${darkMode 
                ? 'text-gray-400' 
                : 'text-gray-500'}`}>
                No saved tokens
              </div>
            )}
          </div>
          
          <div>
            <div className="flex items-center justify-between px-3 mb-1">
              <span className={`text-sm font-medium ${darkMode 
                ? 'text-gray-400' 
                : 'text-gray-500'}`}>Resources</span>
              <button className={`${darkMode 
                ? 'text-gray-400 hover:text-gray-200' 
                : 'text-gray-400 hover:text-gray-600'}`}>
                <ChevronDown size={16} />
              </button>
            </div>
            <a href="#" className={`flex items-center gap-3 px-3 py-2 ${darkMode 
              ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
              : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'} rounded-lg transition-colors`}>
              <Book size={18} />
              <span>Education Guides</span>
            </a>
          </div>
        </nav>
        
        <div className="p-4 space-y-4">
          <button className={`w-full flex items-center justify-center gap-2 ${darkMode 
            ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'} py-2 px-4 rounded-lg transition-colors`}>
            <DollarSign size={18} />
            <span>Connect Wallet</span>
          </button>
          
          <div className="space-y-2">
            <a href="#" className={`flex items-center gap-2 ${darkMode 
              ? 'text-gray-300 hover:text-yellow-400' 
              : 'text-gray-600 hover:text-indigo-600'} px-3 py-1 rounded transition-colors`}>
              <Twitter size={18} />
              <span className="text-sm">Follow Twitter</span>
            </a>
            <a href="#" className={`flex items-center gap-2 ${darkMode 
              ? 'text-gray-300 hover:text-yellow-400' 
              : 'text-gray-600 hover:text-indigo-600'} px-3 py-1 rounded transition-colors`}>
              <span className="text-xl">🎮</span>
              <span className="text-sm">Join Discord</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto">
          <div className="w-full max-w-3xl">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <ChainaddemyLogo className="w-24 h-24 mx-auto" isDarkMode={darkMode} />
              </div>
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                How can <span className={darkMode ? 'text-yellow-400' : 'text-yellow-500'}>We</span> help you?
              </h1>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
                Orchestrate blockchain-powered education finance solutions
              </p>
            </div>
            
            {/* Search */}
            <div className="mb-12">
              <div className="relative">
                <input
                  type="text"
                  className={`w-full ${darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-yellow-500' 
                    : 'bg-white border-gray-200 text-gray-800 focus:ring-indigo-500'} 
                    border rounded-xl px-4 py-4 pl-14 pr-14 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent`}
                  placeholder="Ask the hive anything..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={20} className={darkMode ? 'text-gray-400' : 'text-gray-400'} />
                </div>
                
                {/* Send Button */}
                <button 
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={handleSearchSubmit}
                >
                  <Send size={18} className={`${
                    searchText.trim() ? (darkMode ? 'text-yellow-400' : 'text-indigo-600') : 'text-gray-400'
                  } transition-colors`} />
                </button>
              </div>
              
              <div className="flex items-center mt-3 ml-2">
                <div className="relative mr-2">
                  <button
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-200 border border-gray-700' 
                        : 'bg-white text-gray-700 border border-gray-200'
                    } hover:border-opacity-80`}
                    onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  >
                    {activeModel === 'openai' ? (
                      <>
                        <OpenAILogoSvg />
                        <span>Open AI</span>
                      </>
                    ) : (
                      <>
                        <DeepseekLogoSvg />
                        <span>Deepseek</span>
                      </>
                    )}
                    <ChevronDown size={14} />
                  </button>
                  
                  {modelDropdownOpen && (
                    <div 
                      className={`absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg z-10 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="py-1">
                        <button
                          className={`flex items-center w-full px-4 py-2 text-sm ${
                            darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                          } ${activeModel === 'openai' ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                          onClick={() => {
                            setActiveModel('openai');
                            setModelDropdownOpen(false);
                          }}
                        >
                          <OpenAILogoSvg />
                          <span className="ml-3">Open AI</span>
                          {activeModel === 'openai' && <Check size={16} className="ml-auto" />}
                        </button>
                        <button
                          className={`flex items-center w-full px-4 py-2 text-sm ${
                            darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                          } ${activeModel === 'deepseek' ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                          onClick={() => {
                            setActiveModel('deepseek');
                            setModelDropdownOpen(false);
                          }}
                        >
                          <DeepseekLogoSvg />
                          <span className="ml-3">Deepseek</span>
                          {activeModel === 'deepseek' && <Check size={16} className="ml-auto" />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`${darkMode 
                ? 'bg-gray-800 border-gray-700 hover:border-yellow-600' 
                : 'bg-white border-gray-100 hover:border-indigo-200'} 
                p-6 rounded-xl shadow-sm border transition-all hover:shadow-md cursor-pointer`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${darkMode 
                    ? 'bg-yellow-900 text-yellow-400' 
                    : 'bg-amber-100 text-amber-600'} flex items-center justify-center`}>
                    <Search size={20} />
                  </div>
                </div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-1`}>
                  Scholarship Finder
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  Automatically searches for scholarship opportunities
                </p>
              </div>
              
              <div className={`${darkMode 
                ? 'bg-gray-800 border-gray-700 hover:border-yellow-600' 
                : 'bg-white border-gray-100 hover:border-indigo-200'} 
                p-6 rounded-xl shadow-sm border transition-all hover:shadow-md cursor-pointer`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${darkMode 
                    ? 'bg-blue-900 text-blue-400' 
                    : 'bg-blue-100 text-blue-600'} flex items-center justify-center`}>
                    <DollarSign size={20} />
                  </div>
                </div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-1`}>
                  Loan Optimizer
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  Optimizes loan terms to reduce interest payments
                </p>
              </div>
              
              <div className={`${darkMode 
                ? 'bg-gray-800 border-gray-700 hover:border-yellow-600' 
                : 'bg-white border-gray-100 hover:border-indigo-200'} 
                p-6 rounded-xl shadow-sm border transition-all hover:shadow-md cursor-pointer`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${darkMode 
                    ? 'bg-purple-900 text-purple-400' 
                    : 'bg-purple-100 text-purple-600'} flex items-center justify-center`}>
                    <Calendar size={20} />
                  </div>
                </div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-1`}>
                  Tuition Payment Scheduler
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  Automatically schedules tuition payments
                </p>
              </div>
              
              <div className={`${darkMode 
                ? 'bg-gray-800 border-gray-700 hover:border-yellow-600' 
                : 'bg-white border-gray-100 hover:border-indigo-200'} 
                p-6 rounded-xl shadow-sm border transition-all hover:shadow-md cursor-pointer`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${darkMode 
                    ? 'bg-green-900 text-green-400' 
                    : 'bg-green-100 text-green-600'} flex items-center justify-center`}>
                    <Bookmark size={20} />
                  </div>
                </div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-1`}>
                  Blockchain Credentials
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  Store and verify educational achievements on-chain
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chainademy;