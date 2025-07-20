import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { quotes, categories } from '../data/quotes';
import QuoteGenerator from './QuoteGenerator';

const Home: React.FC = () => {
  const getQuotesByCategory = (categoryName: string) => {
    return quotes.filter(quote => quote.category === categoryName).slice(0, 5);
  };

  return (
    <>
      <Helmet>
        <title>QuoteMood - Inspirational Quotes, Status & Captions</title>
        <meta name="description" content="Discover thousands of motivational quotes, romantic captions, funny one-liners, and attitude status. Generate AI-powered quotes by mood. Perfect for Instagram and social media." />
        <meta name="keywords" content="quotes, motivational quotes, romantic captions, funny quotes, attitude status, instagram captions, mood quotes" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              QuoteMood
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect quote for every mood, moment, and emotion. 
            From motivation to romance, sarcasm to inspiration - find your voice.
          </p>
        </div>

        {/* Quote Generator Section */}
        <QuoteGenerator />

        {/* Categories Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore Quote Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Browse through our carefully curated collection of quotes
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category) => {
              const categoryQuotes = getQuotesByCategory(category.name);
              
              return (
                <section key={category.name} className={`${category.bgColor} rounded-3xl p-8 md:p-12`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                      <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {category.description}
                      </p>
                    </div>
                    <Link
                      to={`/category/${category.name}`}
                      className={`mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r ${category.color} text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-200 shadow-lg`}
                    >
                      View More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryQuotes.map((quote) => (
                      <div
                        key={quote.id}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <Quote className="h-6 w-6 text-gray-400 mb-3" />
                        <p className="text-gray-700 leading-relaxed italic">
                          "{quote.text}"
                        </p>
                      </div>
                    ))}
                    
                    {/* Show More Card */}
                    <div className="bg-white/50 border-2 border-dashed border-gray-300 rounded-2xl p-6 flex items-center justify-center">
                      <Link
                        to={`/category/${category.name}`}
                        className="text-center group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                          <ArrowRight className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-gray-600 font-medium">
                          View All {category.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;