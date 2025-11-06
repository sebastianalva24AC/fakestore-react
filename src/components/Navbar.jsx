import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            🛍️ FakeStore
          </Link>
          <div className="flex gap-6">
            <Link 
              to="/" 
              className="hover:text-blue-400 transition font-medium"
            >
              Home
            </Link>
            <Link 
              to="/entities" 
              className="hover:text-blue-400 transition font-medium"
            >
              Catálogo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;