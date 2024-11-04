import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";
import { TbSearch } from "react-icons/tb";
const Navbar = ({setShowCart}:any) => {

      const cartCount =useAppSelector((state)=>state.cartReducer.length )
      return (
            <div className="bg-white py-4 sticky top-0 z-10">
                  <div className="container flex justify-between items-center">
                        <RxHamburgerMenu className="sm:hidden text-[26px]" />
                        <Link href="/" className="text-4xl font-semibold hover:text-accent">
                        EVO-BEAUTY
                        </Link>
                        <ul className="gap-6 sm:flex ">
                              <li><Link href="/" className="nav-link">Home</Link></li>
                              <li className="nav-link">Shop</li>
                              <li className="nav-link">Services</li>
                              <li className="nav-link">Gallery</li>
                              <li className="nav-link">Contact</li>

                        </ul>
                        <div className="flex gap-4 text-[26px]">
                              <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
                              <AiOutlineShoppingCart />
                              <div className="absolute top-[-15px] right-[-10px] w-[23px] h-[23px] rounded-full text-white bg-red-600 text-[14px] flex justify-center items-center">
                                    {cartCount}
                                    
                              </div>
                              
                              </div>
                              <div className="search"><TbSearch className="text-[22px] cursor-pointer" /></div>
                        </div>

                  </div>
                
            </div>
      );
};

export default Navbar;