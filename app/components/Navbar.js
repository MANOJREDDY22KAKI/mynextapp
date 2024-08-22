import React from "react";
import Link from "next/link";
// import { FaHome, FaShoppingCart, FaUsers,FaPhone } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between pt-5 pb-5 pl-10 pr-20 items-center bg-slate-300">
        <h1 className="text-2xl font-bold text-center mt-3">ShopHere</h1>

        <div className="flex justify-evenly items-center font-bold">
          <ul className="flex space-x-4">
            <li>
              <Link href={"/"} className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link href={"/about"} className='hover:underline'>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"} className='hover:underline'>Contact Us</Link>
            </li>
            <li>
              <Link href={"/cart"} className='hover:underline'>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
