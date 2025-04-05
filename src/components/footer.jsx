import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="footer py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center">
                {/* Replaced svg with the ChainaddemyLogo component */}
                <ChainaddemyLogo isDarkMode={true} className="w-10 h-10" />
                <span className="ml-2 text-xl font-bold">Chainademy</span>
              </div>
              <p className="mt-4 footer-text-muted">Revolutionizing education finance with blockchain technology.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-text-muted hover:text-white">Education Guides</a></li>
                <li><a href="#" className="footer-text-muted hover:text-white">Finance Calculator</a></li>
                <li><a href="#" className="footer-text-muted hover:text-white">Blockchain FAQ</a></li>
                <li><a href="#" className="footer-text-muted hover:text-white">Tutorials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-text-muted hover:text-white">About Us</a></li>
                <li><a href="#" className="footer-text-muted hover:text-white">Careers</a></li>
                <li><a href="#" className="footer-text-muted hover:text-white">Blog</a></li>
                <li><a href="#" className="footer-text-muted hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="footer-text-muted hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="footer-text-muted hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="footer-text-muted hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.52 1.84-.81 2.91-.81.39 0 .78.05 1.16.15.38.1.73.25 1.07.44.34.19.63.45.88.75.25.3.45.65.59 1.04.14.39.21.83.21 1.32 0 .52-.07.98-.2 1.38-.13.4-.32.74-.57 1.02-.25.28-.55.51-.89.69-.34.18-.72.31-1.13.39.4.13.75.31 1.06.54.31.23.56.5.77.82.21.32.37.67.48 1.06.11.39.17.79.17 1.2 0 .53-.09 1.01-.27 1.44-.18.43-.44.79-.77 1.08-.33.29-.73.51-1.2.66-.47.15-.97.22-1.53.22-.55 0-1.06-.09-1.51-.27-.45-.18-.85-.43-1.18-.76-.33-.33-.6-.73-.79-1.21-.19-.48-.29-1-.29-1.57h1.91c0 .27.05.52.14.74.09.22.22.41.38.57.16.16.35.28.58.37.23.09.48.13.75.13.29 0 .54-.05.77-.14.23-.09.43-.22.59-.39.16-.17.28-.37.37-.61.09-.24.13-.52.13-.82 0-.9-.27-1.55-.82-1.93-.55-.38-1.32-.57-2.33-.57h-.89v-1.67h.89c.35 0 .69-.04.99-.11.31-.07.58-.19.82-.35.24-.16.43-.37.58-.63.15-.26.22-.59.22-.97 0-.25-.05-.48-.14-.69-.09-.21-.23-.38-.4-.52-.17-.14-.37-.25-.61-.32-.23-.07-.5-.11-.79-.11-.27 0-.52.05-.74.14-.22.09-.42.22-.58.38s-.3.35-.39.58c-.09.23-.14.48-.14.74h-1.91c0-.49.1-.95.29-1.37.19-.42.45-.79.79-1.09.34-.31.74-.54 1.2-.71.46-.17.96-.26 1.5-.26zm7.9 1.32c.36-.39.87-.39 1.23 0 .36.39.36.99 0 1.37l-6.25 6.83c-.17.19-.42.19-.59 0l-3.75-4.1c-.36-.39-.36-.99 0-1.37.36-.39.87-.39 1.23 0l3.42 3.74 5.71-6.47z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
              <p className="mt-4 footer-text-muted">Subscribe to our newsletter for the latest updates.</p>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none" 
                />
                <button className="bg-yellow-500 px-4 py-2 rounded-r-md text-gray-900 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-divider text-center footer-text-muted text-sm">
            &copy; 2025 Chainademy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer