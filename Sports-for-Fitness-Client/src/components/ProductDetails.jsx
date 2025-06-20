

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log("Product data:", product);
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-6"
          
        />
      ) : (
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded mb-6 text-gray-600">
          No Image Available
        </div>
      )}
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="mb-1"><strong>Price:</strong> {product.price}</p>
      <p className="mb-1"><strong>Stock:</strong> {product.stock}</p>
      <p className="mb-1"><strong>Category:</strong> {product.category}</p>
    </div>
  );
};

export default ProductDetails;
