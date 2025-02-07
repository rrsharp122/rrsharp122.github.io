// Remove the React import since it's globally available
const Homepage = () => {
  const featuredArticles = [
    {
      title: "The Brain's GPS",
      excerpt: "Neural mechanisms of spatial navigation",
      link: "/writing/brains-gps"
    },
    {
      title: "Decoding Genetics",
      excerpt: "Beyond the DNA Double Helix",
      link: "/writing/genetics"
    },
    {
      title: "Statistical Thinking",
      excerpt: "Making data science accessible",
      link: "/writing/stats"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-purple-900 mb-4">Rachel Sharp</h1>
        <p className="text-xl text-purple-700 mb-8">Making Science Accessible, One Story at a Time</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-purple-900">{article.title}</h3>
              <p className="text-gray-600 mt-2">{article.excerpt}</p>
              <a href={article.link} className="text-teal-600 hover:text-teal-800 mt-4 inline-block">Read more →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
