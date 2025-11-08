function Features() {
  const features = [
    {
      icon: "🤖",
      title: "XGBoost AI Signals",
      description: "Our model analyzes dozens of features (RSI, moving averages, volatility) to deliver high-probability signals with 64.5% historical accuracy."
    },
    {
      icon: "👥",
      title: "Exclusive VIP Community",
      description: "Join our exclusive Telegram group. You get signals and can discuss ideas with other traders. Learn from successful traders."
    },
    {
      icon: "⏰",
      title: "Real-Time 24/7",
      description: "Our bot runs in the cloud, scanning the market every hour—even while you sleep. Never miss an opportunity."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Get detailed signal analysis with confidence scores, risk levels, and market conditions. Make informed trading decisions."
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      description: "Built-in safety rails prevent bad trades. RSI extremes blocked, volatility filters, and trend confirmation required."
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Receive signals on any device. Our Telegram bot works perfectly on mobile, tablet, and desktop."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose AI Signals VIP?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of traders who trust our AI-powered signals for consistent profits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;