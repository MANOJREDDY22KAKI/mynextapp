import React from 'react';
import Link from 'next/link';
import axios from 'axios';

async function getStaticProps() {
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    const Products = response.data;
    //console.log(Products);
    return Products;
}

const SubHeader = async() => {
    const data = await getStaticProps();
  return (
    <div className='flex justify-evenly font-semibold bg-yellow-300 p-2'>
      {data.map((categories) => (
        <div key={categories}>
        <Link 
        className='hover:underline' href={`/categories/${categories}`}>{categories}</Link></div>
      ))}
    
    </div>
  );
}

export default SubHeader;
