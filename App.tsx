import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Hero />
      <Services />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default App;