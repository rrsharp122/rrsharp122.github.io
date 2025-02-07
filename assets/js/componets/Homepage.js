import React from 'react';
import { Mail, ExternalLink, Github, Linkedin } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 
to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-900 mb-4">Rachel 
Sharp</h1>
          <p className="text-xl text-purple-700 mb-8">Making Science 
Accessible, One Story at a Time</p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:rsharp@unc.edu" className="flex items-center 
text-teal-600 hover:text-teal-800">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
            <a href="https://orcid.org/0000-0002-3070-9200" 
className="flex items-center text-teal-600 hover:text-teal-800">
              <ExternalLink className="w-5 h-5 mr-2" />
              ORCID
            </a>
            <a href="http://www.linkedin.com/in/rachel-sharp-a07b69272" 
className="flex items-center text-teal-600 hover:text-teal-800">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg 
overflow-hidden transform hover:scale-105 transition-transform 
duration-200">
              <div className="h-48 bg-purple-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-900 
mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href={article.link} className="text-teal-600 
hover:text-teal-800">Read more →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Writing 
Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow 
hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold 
text-purple-900">{area.title}</h3>
                <p className="text-gray-600 mt-2">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const featuredArticles = [
  {
    title: "The Brain's GPS: How We Navigate Our World",
    excerpt: "Exploring the neural mechanisms behind spatial navigation 
and memory formation...",
    link: "/writing/brains-gps"
  },
  {
    title: "Decoding Genetics: Beyond the DNA Double Helix",
    excerpt: "Understanding the complexities of genetic inheritance and 
modern genomics...",
    link: "/writing/decoding-genetics"
  },
  {
    title: "Statistical Thinking in Everyday Life",
    excerpt: "How understanding statistics can improve decision making and 
scientific literacy...",
    link: "/writing/statistical-thinking"
  }
];

const focusAreas = [
  {
    icon: "🧠",
    title: "Neuroscience Explained",
    description: "Breaking down complex brain science into digestible 
stories"
  },
  {
    icon: "🧬",
    title: "Genetics & Society",
    description: "Exploring how genetic research impacts our daily lives"
  },
  {
    icon: "📊",
    title: "Data Science Stories",
    description: "Making statistics and data analysis accessible"
  },
  {
    icon: "🔬",
    title: "Research Behind the Headlines",
    description: "Analyzing and explaining trending science news"
  }
];

export default Homepage;
