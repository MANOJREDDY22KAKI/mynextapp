import axios from "axios";
import React from "react";
import Link from "next/link";
async function getStaticProps(id) {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const Products = response.data;

  return Products;
}

const page = async ({ params }) => {
  const data = await getStaticProps(params.slug);
  const product = Array.isArray(data) ? data : [data];

  return (
    <div>
      {product.map((product) => (
        <div key={product.id}>
          <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="border rounded-lg shadow-lg p-6 bg-white max-w-md w-full">
              <div>
              <Link href={"/"}>
                <button className="bg-blue-500 text-white px-4 py-2  mb-0 rounded hover:bg-blue-600 transition-colors duration-300">
                  Back
                </button>
              </Link>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-64 h-64 object-contain mb-4 rounded-lg pl-20"
                />
              </div>
              
              <h2 className="text-2xl font-semibold mb-2 text-center">
                {product.title}
              </h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Description:</span>{" "}
                {product.description}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Rating:</span>{" "}
                {product.rating.rate}⭐
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Price:</span> ${product.price}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
