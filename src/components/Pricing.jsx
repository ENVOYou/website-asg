import { useState } from 'react';

function Pricing() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Replace with actual Paddle/Stripe integration
      window.open('https://buy.paddle.com/test/xxx', '_blank');
      setIsLoading(false);
    }, 1000);
  };

  const features = [
    "VIP Telegram Group Access",
    "AI Signals 24/7 (Every 6 hours)",
    "Advanced Technical Analysis",
    "Risk Management Alerts",
    "Mobile & Desktop Access",
    "Community Discussion",
    "Cancel Anytime"
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">
            One price for everything. No hidden fees.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-linear-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">VIP Access Plan</h3>
              <p className="text-gray-400">Everything you need to profit</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-6xl font-bold text-indigo-400">$5</span>
                <span className="text-gray-400 ml-2">/ month</span>
              </div>
              <p className="text-sm text-gray-500">Billed monthly • Cancel anytime</p>
            </div>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleSubscribe}
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 text-white text-lg font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                'Get Access Now'
              )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              30-day money-back guarantee • No setup fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;