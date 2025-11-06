const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">🛍️ FakeStore Catalog</h1>
        <p className="text-xl mb-6">
          Explora nuestro catálogo de productos premium con los mejores precios del mercado.
          Aplicación desarrollada con React y Vite consumiendo FakeStore API.
        </p>
        <a 
          href="/entities" 
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
        >
          Ver Catálogo Completo
        </a>
      </div>
    </div>
  );
};

export default Hero;