import { useState, useEffect } from 'react';
import Logo from './Logo';

function Hero() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '64.5%', label: 'Historical Accuracy' },
    { value: '24/7', label: 'Signal Delivery' },
    { value: 'Free', label: 'Monthly Cost' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-24 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-10 opacity-90">
          <Logo className="w-16 h-16 md:w-20 md:h-20" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.15]">
          Get Bitcoin AI Trading Signals{' '}
          <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Delivered to Your Telegram
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Stop guessing. Use our proven{' '}
          <span className="text-indigo-400 font-medium">XGBoost model</span> to receive
          high-confidence BUY/SELL signals at the right time, 24/7. Join{' '}
          <span className="text-purple-300 font-medium">FREE</span> if you already profiting.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToPricing}
          className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.04]"
        >
          Start Earning Profits →
        </button>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border border-white/10 backdrop-blur-sm glass transition-all duration-500 ${
                index === currentStat
                  ? 'scale-110 bg-white/5 shadow-lg'
                  : 'scale-100 opacity-75'
              }`}
            >
              <div className="text-4xl font-bold text-indigo-400 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
