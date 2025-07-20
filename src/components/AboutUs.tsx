import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Sparkles, Target, Quote } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - QuoteMood</title>
        <meta name="description" content="Learn about QuoteMood's mission to spread positivity and inspiration through carefully curated quotes and AI-generated content." />
        <meta name="keywords" content="about quotemood, quote website, motivation, inspiration, daily quotes" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-3xl">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              QuoteMood
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that the right words at the right moment can change everything. 
            QuoteMood is your daily dose of inspiration, motivation, and emotional connection.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At QuoteMood, we're passionate about the power of words to inspire, heal, and connect. 
              Our mission is to provide you with the perfect quote for every mood, moment, and milestone in your life.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're seeking motivation for a new challenge, comfort during difficult times, 
              or the perfect caption for your social media post, we've curated thousands of quotes 
              to match your every emotion and aspiration.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-md mb-3">
                  <Users className="h-8 w-8 text-emerald-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-800">1M+ Users</h3>
                <p className="text-gray-600 text-sm">Inspired daily</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-md mb-3">
                  <Quote className="h-8 w-8 text-emerald-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-800">10K+ Quotes</h3>
                <p className="text-gray-600 text-sm">Carefully curated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl w-fit mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI creates personalized quotes based on your current mood, 
                ensuring you always find the perfect words to express yourself.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-2xl w-fit mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Curated with Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Every quote in our collection is handpicked for its authenticity, 
                impact, and ability to resonate with real human emotions and experiences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-2xl w-fit mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Perfect for Social Media</h3>
              <p className="text-gray-600 leading-relaxed">
                All our quotes are optimized for social media sharing, with the perfect length 
                and style for Instagram, Facebook, Twitter, and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of genuine emotions and authentic expressions. 
                Every quote we share comes from the heart.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Inclusivity</h3>
              <p className="text-gray-600 leading-relaxed">
                Our collection celebrates the diversity of human experience, 
                ensuring everyone can find quotes that speak to their unique journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in our curation process, 
                ensuring every quote meets our criteria for impact and relevance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We're building a community of quote lovers who support and inspire 
                each other through the power of shared wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;