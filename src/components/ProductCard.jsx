const ProductCard = ({ product, isSimple = false }) => {
  if (isSimple) {
    return (
      <div className="border rounded-lg p-4 hover:shadow-lg transition bg-white">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-40 object-contain mb-3"
        />
        <h3 className="font-semibold text-sm mb-2 truncate">{product.title}</h3>
        <p className="text-lg font-bold text-blue-600">${product.price}</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-6 hover:shadow-xl transition bg-white">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-bold text-blue-600">${product.price}</span>
        <span className="text-sm text-gray-500 capitalize bg-gray-100 px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;