import React, { useState } from 'react';
import './ChainadamyLanding.css';
import { useNavigate } from 'react-router-dom';



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