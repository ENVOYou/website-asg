import { useState } from 'react';

function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "How do I receive the trading signals?",
      answer: "Signals are delivered automatically to your Telegram group every 6 hours. You'll receive BUY/SELL recommendations with confidence scores, price targets, and stop losses."
    },
    {
      question: "What trading platforms can I use?",
      answer: "Our signals work with any cryptocurrency exchange including Binance, Bybit, KuCoin, Coinbase, Kraken, and many others. You can execute the signals manually or set up automated trading."
    },
    {
      question: "Is this guaranteed profits?",
      answer: "No trading is risk-free. Our AI model has shown 64.5% historical accuracy, but past performance doesn't guarantee future results. Always use proper risk management and only trade with money you can afford to lose."
    },
    {
      question: "How does the AI model work?",
      answer: "We use XGBoost machine learning trained on years of Bitcoin data, analyzing 19+ technical indicators including RSI, moving averages, Bollinger Bands, volume analysis, and momentum indicators."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel with leave Group at any time."
    },
    {
      question: "Do you provide customer support?",
      answer: "Yes! We provide support through our Telegram group where you can ask questions, get help with setup, and discuss trading strategies with other members."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about AI Signals VIP
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors rounded-lg"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      openItems.has(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;