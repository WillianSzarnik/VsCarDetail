import React, { useState } from 'react';
import { Logo } from './components/Logo';
import ServicesTab from './components/ServicesTab';
import ContactTab from './components/ContactTab';
import LandingScreen from './components/LandingScreen';
import { LayoutList, MessageCircle } from 'lucide-react';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState<'services' | 'contact'>('services');

  const handleEnterApp = (tab: 'services' | 'contact') => {
    setActiveTab(tab);
    setShowLanding(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Background Ambient Effects - Persistent across screens */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Purple glow top left */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
        {/* Blue glow bottom right */}
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-900/10 rounded-full blur-[80px]"></div>
        {/* Mesh grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {showLanding ? (
        <LandingScreen onEnter={handleEnterApp} />
      ) : (
        <>
          {/* Header */}
          <header className="pt-8 pb-4 flex justify-center relative z-10 animate-fade-in">
            <Logo />
          </header>

          {/* Main Content Area */}
          <main className="w-full relative z-10 min-h-[calc(100vh-160px)]">
            {activeTab === 'services' ? <ServicesTab /> : <ContactTab />}
          </main>

          {/* Bottom Navigation Bar */}
          <nav className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-white/10 z-50 pb-safe animate-slide-up">
            <div className="flex justify-around items-center max-w-lg mx-auto h-16 md:h-20">
              
              <button 
                onClick={() => setActiveTab('services')}
                className={`flex-1 flex flex-col items-center justify-center h-full gap-1 transition-colors ${
                  activeTab === 'services' ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <div className={`p-1 rounded-lg ${activeTab === 'services' ? 'bg-purple-900/20' : ''}`}>
                  <LayoutList size={24} />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase">Serviços</span>
              </button>

              {/* Divider */}
              <div className="w-px h-8 bg-white/10"></div>

              <button 
                onClick={() => setActiveTab('contact')}
                className={`flex-1 flex flex-col items-center justify-center h-full gap-1 transition-colors ${
                  activeTab === 'contact' ? 'text-green-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <div className={`p-1 rounded-lg ${activeTab === 'contact' ? 'bg-green-900/20' : ''}`}>
                  <MessageCircle size={24} />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase">Contato</span>
              </button>

            </div>
          </nav>
          
          {/* iOS Safe Area Spacer */}
          <div className="h-6 w-full bg-black z-50 relative"></div>
        </>
      )}
    </div>
  );
}

export default App;