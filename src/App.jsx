import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Aurora background */}
      <div className="fixed inset-0 bg-linear-to-br from-gray-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-linear-to-r from-indigo-900/20 via-transparent to-purple-900/20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <Hero />
          <Features />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
