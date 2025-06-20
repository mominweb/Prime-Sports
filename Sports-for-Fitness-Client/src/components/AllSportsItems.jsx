import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllSportsItems = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] =useState(true);

    

    useEffect (()=>{
        fetch (`http://localhost:5000/api/products`)
        .then ((res)=>res.json())
        .then ((data)=>{
          console.log("Fetched products:", data);
          setItems(data);
     setLoading(false);})

    

          .catch((error) => {
        console.error("Failed to fetch equipment:", error);
        setLoading(false);
      });
  }, []);

if(loading) {
  return <p className="text-center py-10"> Loading.... </p>;
}



    return (
    <div className="p-4">
  <h2 className="text-2xl font-bold mb-2">
    All Sports Equipment ({items.length})
  </h2>

  <div className="w-full overflow-x-auto">
    <table className="min-w-[600px] w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border text-left">#</th>
          <th className="px-4 py-2 border text-left">Name</th>
          <th className="px-4 py-2 border text-left">Category</th>
          <th className="px-4 py-2 border text-left">Price</th>
          <th className="px-4 py-2 border text-left">Stock</th>
          <th className="px-4 py-2 border text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item._id || index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border text-center">{index + 1}</td>
            <td className="px-4 py-2 border">{item.name}</td>
            <td className="px-4 py-2 border">{item.category}</td>
            <td className="px-4 py-2 border">${item.price}</td>
            <td className="px-4 py-2 border">{item.stock}</td>
            <td className="px-4 py-2 border text-center">
              <Link
                to={`/products/${item._id}`}
                className="inline-block px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
};

export default AllSportsItems;