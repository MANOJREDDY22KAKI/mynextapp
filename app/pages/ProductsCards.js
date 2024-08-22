import React from "react";
import axios from "axios";
import Link from "next/link";

async function getStaticProps() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const Products = response.data;
  //console.log(Products, "home");
  return Products;
}

const ProductsCards = async () => {
  const Products = await getStaticProps();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 overflow-auto">
      {Products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300"
        >
          <Link href={`/products/${product.id}`} key={product.id}>
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4 rounded-lg"
              />
              <div>
                <meta property="og:title" content={product.title} />
                <h2 className="ellipsis-two-lines text-lg font-semibold mb-2">
                  {product.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-4">${product.price}</p>
              <p className="text-gray-700 mb-4">{product.category}</p>
            </div>
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2  mb-0 rounded hover:bg-blue-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
