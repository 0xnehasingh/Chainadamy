import { User, Send, ChevronDown } from 'lucide-react';

const EduChainLogoIcon = () => (
  <div className="w-6 h-6 mr-2 text-amber-500">
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="12" fill="#10B981" />
      <path 
        d="M17.5 8.5L12 5L6.5 8.5V15.5L12 19L17.5 15.5V8.5Z" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5"
      />
      <path 
        d="M12 5V19M6.5 8.5L12 12L17.5 8.5" 
        stroke="white" 
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

const DocsBadge = ({ text }) => (
  <div className="inline-flex items-center px-3 py-1 text-sm bg-emerald-100 text-emerald-800 rounded-md">
    <span className="mr-1">📄</span> {text}
  </div>
);

const DevDocsBadge = ({ text }) => (
  <div className="inline-flex items-center px-3 py-1 text-sm bg-amber-100 text-amber-800 rounded-md">
    <span className="mr-1">⚙️</span> {text}
  </div>
);

const ActionButton = ({ children }) => (
  <button className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
    {children}
  </button>
);

const EduChainDocsPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Main content area */}
      <div className="flex-1 overflow-y-auto">
        {/* Header with user query */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center">
            <User size={20} className="text-gray-400 mr-2" />
            <span className="text-gray-800">Get me developer docs for EDU Chain</span>
          </div>
        </div>

        {/* Agent response with header */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center mb-2">
            <EduChainLogoIcon />
            <span className="font-medium text-amber-600 mr-2">Knowledge Agent</span>
            <div className="flex items-center text-gray-500 text-sm">
              <span>Searched knowledge base</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
        </div>

        {/* System message */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center">
            <User size={20} className="text-gray-400 mr-2" />
            <span className="text-gray-800">Included the top 35 pages in context.</span>
          </div>
        </div>

        {/* Agent full response */}
        <div className="p-4">
          <div className="flex mb-4">
            <EduChainLogoIcon />
            <div>
              <p className="text-gray-800 mb-4">
                Here are some key resources from the EDU Chain documentation that may be helpful for developers:
              </p>

              <ol className="space-y-6 list-decimal pl-6">
                <li>
                  <div className="flex items-start">
                    <DocsBadge text="EDU Chain Docs" />
                    <div className="ml-3">
                      <p className="text-gray-800">
                        This section provides an introduction to using EDU Chain on the blockchain, including getting started guides and FAQs.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <DocsBadge text="EDU Chain Docs" />
                    <div className="ml-3">
                      <p className="text-gray-800">
                        - This page offers comprehensive developer resources for building on EDU Chain, including SDK usage and integration guides.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <DevDocsBadge text="EDU Chain Developer Docs" />
                    <div className="ml-3">
                      <p className="text-gray-800">
                        - Essential steps for setting up EDU Chain's SDK with the Education Protocol, including wallet setup and RPC client configuration.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <DevDocsBadge text="EDU Chain Developer Docs" />
                    <div className="ml-3">
                      <p className="text-gray-800">
                        - A guide on how to use the SDK to execute credential verification on EDU Chain, detailing setup, parameters, and example code.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <DocsBadge text="EDU Chain Docs" />
                    <div className="ml-3">
                      <p className="text-gray-800">
                        - Instructions for creating a full-featured educational credential system on EDU Chain, with code samples and best practices.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-4 mt-4 border-t border-gray-100">
            <ActionButton>
              + Create an Educational Credential on EDU Chain
            </ActionButton>
            <ActionButton>
              + Credential Management Strategies
            </ActionButton>
            <ActionButton>
              + Benefits of Education Protocol
            </ActionButton>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 p-4">
        <div className="relative">
          <input
            type="text"
            className="w-full py-3 px-4 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Ask the hive anything..."
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Send size={18} />
          </div>
        </div>

        <div className="flex items-center mt-3 ml-2">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm mr-2 bg-green-100 text-green-700">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Open AI</span>
            <ChevronDown size={14} />
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-gray-100">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Solana Agent</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EduChainDocsPage;