import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around items-center gap-4 py-6 px-20">
        <Link href="/">
          <div className="text-black cursor-pointer text-xl font-medium font-poppins">
            Secure Data
          </div>
        </Link>
        <div className="flex items-center gap-6 ">
          <ul className="group text-black transition-all duration-300 ease-in-out">
            <Link href="/support">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-black cursor-pointer to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Support
              </li>
            </Link>
          </ul>

          <ul className="group text-black transition-all duration-300 ease-in-out">
            <Link href="/company">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-black cursor-pointer to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Company
              </li>
            </Link>
          </ul>

          <ul className="group text-black transition-all duration-300 ease-in-out">
            <Link href="/partners">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-black cursor-pointer to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Partners
              </li>
            </Link>
          </ul>

          <ul className="group text-black transition-all duration-300 ease-in-out">
            <Link href="/blog">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-black cursor-pointer to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Blog
              </li>
            </Link>
          </ul>

          <ul className="group text-black transition-all duration-300 ease-in-out">
            <Link href="/contact">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-black cursor-pointer to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
