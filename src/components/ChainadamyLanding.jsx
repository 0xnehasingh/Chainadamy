import React, { useState } from 'react';
import './ChainadamyLanding.css';
import { useNavigate } from 'react-router-dom';

// Logo Component
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

const ChainadamyLanding = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('Risk Analyzer');
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  };

  // Handle navigation to Landing page
  const handleGetStarted = () => {
    console.log("Navigating to Landing page");
    navigate('/Landing');
  };

  // Handle component selection
  const handleComponentSelect = (componentName) => {
    setSelectedComponent(componentName);
  };
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navigation */}
      <nav className="nav-container shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Replaced svg with the ChainaddemyLogo component */}
                <ChainaddemyLogo isDarkMode={isDarkMode} className="w-10 h-10" />
                <span className="ml-2 text-xl font-bold brand-text">Chainademy</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="nav-link px-3 py-2 rounded-md text-sm font-medium">Resources</a>
              <a href="#" className="nav-link px-3 py-2 rounded-md text-sm font-medium">Guides</a>
              <a href="#" className="nav-link px-3 py-2 rounded-md text-sm font-medium">Account</a>
              <button className="btn-primary px-4 py-2 rounded-lg text-sm">Connect Wallet</button>
              <button 
                onClick={toggleDarkMode} 
                className="theme-toggle-btn p-2 rounded-md"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold card-title leading-tight">
                Revolutionize Your <span className="text-yellow-500">Education Finance</span> Journey
              </h1>
              <p className="mt-4 text-xl card-text max-w-3xl">
                Chainademy orchestrates blockchain-powered solutions that make education financing transparent, efficient, and accessible for everyone.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {/* Updated Get Started button with onClick handler */}
                <button
                  onClick={handleGetStarted}
                  className="btn-primary px-6 py-3 rounded-lg text-base transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                >
                  Get Started
                </button>
                <button className="btn-secondary px-6 py-3 rounded-lg text-base">Learn More</button>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <div className="relative flex justify-center">
                {/* Update to use the logo component at a larger size */}
                <ChainaddemyLogo isDarkMode={isDarkMode} className="w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 -mt-8 relative z-10">
        <div className="search-container rounded-lg shadow-lg p-4 flex">
          <input 
            type="text" 
            placeholder="Ask anything about education finance..." 
            className="search-input flex-1 px-4 py-2 border-0 focus:ring-0 focus:outline-none" 
          />
          <button className="search-button p-2 rounded-lg ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* REPLACED: Ecosystem Section - Replacing the original Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold card-title">The Chainademy Ecosystem</h2>
            <p className="mt-4 text-lg card-text max-w-2xl mx-auto">
              Our comprehensive blockchain-powered platform connects all aspects of your education finance journey
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {/* Interactive System Architecture */}
            <div className="card-bg rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold card-title mb-4 text-center">Interactive System Architecture</h3>
              <p className="text-center mb-6 card-text">Click on any component to learn more</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Row 1 */}
                <div 
                  className={`cursor-pointer p-4 rounded-full flex flex-col items-center justify-center ${selectedComponent === 'Portfolio Manager' ? 'bg-blue-100 ring-2 ring-blue-500' : 'hover:bg-blue-50'}`}
                  onClick={() => handleComponentSelect('Portfolio Manager')}
                >
                  <div className="bg-blue-500 p-3 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="card-title text-sm font-semibold">Portfolio Manager</span>
                </div>
                
                <div 
                  className={`cursor-pointer p-4 rounded-full flex flex-col items-center justify-center ${selectedComponent === 'Scholarship Agent' ? 'bg-green-100 ring-2 ring-green-500' : 'hover:bg-green-50'}`}
                  onClick={() => handleComponentSelect('Scholarship Agent')}
                >
                  <div className="bg-green-500 p-3 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="card-title text-sm font-semibold">Scholarship Agent</span>
                </div>
                
                {/* Row 2 */}
                <div 
                  className={`cursor-pointer p-4 rounded-full flex flex-col items-center justify-center ${selectedComponent === 'Risk Analyzer' ? 'bg-red-100 ring-2 ring-red-500' : 'hover:bg-red-50'}`}
                  onClick={() => handleComponentSelect('Risk Analyzer')}
                >
                  <div className="bg-red-500 p-3 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span className="card-title text-sm font-semibold">Risk Analyzer</span>
                </div>
                
                <div 
                  className={`cursor-pointer p-4 rounded-full flex flex-col items-center justify-center ${selectedComponent === 'Loan Optimizer' ? 'bg-red-100 ring-2 ring-red-500' : 'hover:bg-red-50'}`}
                  onClick={() => handleComponentSelect('Loan Optimizer')}
                >
                  <div className="bg-red-500 p-3 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="card-title text-sm font-semibold">Loan Optimizer</span>
                </div>
                
                {/* Row 3 */}
                <div 
                  className={`cursor-pointer p-4 rounded-full flex flex-col items-center justify-center ${selectedComponent === 'Performance Reporter' ? 'bg-blue-100 ring-2 ring-blue-500' : 'hover:bg-blue-50'}`}
                  onClick={() => handleComponentSelect('Performance Reporter')}
                >
                  <div className="bg-blue-500 p-3 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="card-title text-sm font-semibold">Performance Reporter</span>
                </div>
                
                <div 
                  className={`cursor-pointer p-4 rounded-full flex flex-col items-center justify-center ${selectedComponent === 'Profile Analyzer' ? 'bg-green-100 ring-2 ring-green-500' : 'hover:bg-green-50'}`}
                  onClick={() => handleComponentSelect('Profile Analyzer')}
                >
                  <div className="bg-green-500 p-3 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="card-title text-sm font-semibold">Profile Analyzer</span>
                </div>
                
                {/* Row 4 */}
                <div 
                  className={`cursor-pointer p-4 rounded-full flex flex-col items-center justify-center ${selectedComponent === 'Yield Farmer' ? 'bg-purple-100 ring-2 ring-purple-500' : 'hover:bg-purple-50'}`}
                  onClick={() => handleComponentSelect('Yield Farmer')}
                >
                  <div className="bg-purple-500 p-3 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="card-title text-sm font-semibold">Yield Farmer</span>
                </div>
                
                <div 
                  className={`cursor-pointer p-4 rounded-full flex flex-col items-center justify-center ${selectedComponent === 'Tuition Payment Scheduler' ? 'bg-teal-100 ring-2 ring-teal-500' : 'hover:bg-teal-50'}`}
                  onClick={() => handleComponentSelect('Tuition Payment Scheduler')}
                >
                  <div className="bg-teal-500 p-3 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="card-title text-sm font-semibold">Tuition Payment Scheduler</span>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <div className="flex items-center justify-center">
                  <div className="h-px bg-yellow-500 w-16"></div>
                  <div className="mx-2 w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="h-px bg-yellow-500 w-16"></div>
                </div>
                <p className="mt-4 card-text text-sm">All components are securely connected through blockchain technology</p>
              </div>
            </div>
            
            {/* Component Details */}
            <div className="card-bg rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold card-title mb-6 text-center">Component Details</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  {selectedComponent === 'Risk Analyzer' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  <h4 className="text-xl font-bold text-blue-800">{selectedComponent}</h4>
                </div>
                
                {selectedComponent === 'Risk Analyzer' && (
                  <div>
                    <p className="card-text mb-4">
                      Evaluates financial risks in your education investment portfolio and suggests mitigations.
                    </p>
                    
                    <h5 className="font-semibold mb-2 card-title">Key Features:</h5>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center">
                        <span className="mr-2 text-yellow-500">•</span>
                        Real-time blockchain verification
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-yellow-500">•</span>
                        Smart contract integration
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-yellow-500">•</span>
                        Secure data encryption
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-yellow-500">•</span>
                        Personalized recommendations
                      </li>
                    </ul>
                    
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
                      Learn More
                    </button>
                  </div>
                )}
                
                {selectedComponent !== 'Risk Analyzer' && (
                  <div>
                    <p className="card-text mb-4">
                      Click on the Risk Analyzer component to see detailed information.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* How Our Ecosystem Works Together */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold card-title mb-4">How Our Ecosystem Works Together</h3>
            <p className="card-text max-w-3xl mx-auto mb-8">
              Each component in the Chainademy ecosystem works together seamlessly to provide a comprehensive education finance solution. All data and transactions are secured on the blockchain, ensuring transparency and trust.
            </p>
            
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
              View Technical Whitepaper
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold card-title">How Chainademy Works</h2>
            <p className="mt-4 text-lg card-text max-w-2xl mx-auto">
              Our blockchain technology simplifies education finance while ensuring security and transparency.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <StepCard number="1" title="Connect Your Wallet" description="Securely connect your crypto wallet to access our suite of education finance tools" />
            <StepCard number="2" title="Set Your Profile" description="Create your education profile to receive personalized finance solutions" />
            <StepCard number="3" title="Start Using Tools" description="Use our suite of tools to optimize your education finance journey" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold">Ready to Transform Your Education Finance?</h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of students who have simplified their education finance journey with Chainademy.
            </p>
            <div className="mt-8">
              {/* CTA button with same navigation handler */}
              <button 
                onClick={handleGetStarted} 
                className="btn-primary px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description, buttonText, iconBgColor }) => {
  return (
    <div className="feature-card card-bg rounded-xl p-6 shadow-sm hover:shadow-md flex flex-col items-center">
      <div className={`${iconBgColor} p-3 rounded-xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold card-title mb-2">{title}</h3>
      <p className="card-text text-center">{description}</p>
      <button className="mt-6 accent-text hover:text-indigo-800 font-medium text-sm">{buttonText}</button>
    </div>
  );
};

// Component for step cards in "How It Works" section
const StepCard = ({ number, title, description }) => {
  return (
    <div className="text-center">
      <div className="mx-auto step-number-container rounded-full w-16 h-16 flex items-center justify-center shadow-sm border border-divider">
        <span className="text-xl font-bold accent-text">{number}</span>
      </div>
      <h3 className="mt-6 text-xl font-bold card-title">{title}</h3>
      <p className="mt-2 card-text">{description}</p>
    </div>
  );
};

export default ChainadamyLanding;