import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Quote, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { quotes, categories } from '../data/quotes';

const Category: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const category = categories.find(cat => cat.name === categoryName);
  const categoryQuotes = quotes.filter(quote => quote.category === categoryName);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h1>
        <Link to="/" className="text-emerald-600 hover:text-emerald-700">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.title} - QuoteMood</title>
        <meta name="description" content={`${category.description}. Browse our collection of ${category.title.toLowerCase()} perfect for social media and inspiration.`} />
        <meta name="keywords" content={`${category.name} quotes, ${category.title.toLowerCase()}, instagram captions, social media quotes`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>
          
          <div className={`${category.bgColor} rounded-3xl p-8 md:p-12`}>
            <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
              {category.title}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl">
              {category.description}
            </p>
            <div className="mt-4 text-sm text-gray-500">
              {categoryQuotes.length} quotes available
            </div>
          </div>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryQuotes.map((quote, index) => (
            <div
              key={quote.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <Quote className="h-6 w-6 text-gray-400 mb-4 group-hover:text-gray-600 transition-colors duration-200" />
              <blockquote className="text-gray-700 leading-relaxed italic text-lg">
                "{quote.text}"
              </blockquote>
              
              {/* Copy to Clipboard Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(quote.text);
                  // You could add a toast notification here
                }}
                className={`mt-4 px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-105 transform`}
              >
                Copy Quote
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Love these quotes?
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Discover more categories and generate personalized quotes with our AI-powered generator
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-200 shadow-lg"
          >
            Explore More Categories
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;