import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around items-center gap-4 py-6 px-20">
        <Link href="/">
          <div className="text-[#0693e3] cursor-pointer text-xl font-medium font-poppins">
            Secure Data
          </div>
        </Link>
        <div className="flex items-center gap-6 ">
          <ul className="group text-[#0693e3] transition-all duration-300 ease-in-out">
            <Link href="/support">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-[#0693e3] cursor-pointer to-[#0693e3] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Support
              </li>
            </Link>
          </ul>

          <ul className="group text-[#0693e3] transition-all duration-300 ease-in-out">
            <Link href="/company">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-[#0693e3] cursor-pointer to-[#0693e3] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Company
              </li>
            </Link>
          </ul>

          <ul className="group text-[#0693e3] transition-all duration-300 ease-in-out">
            <Link href="/partners">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-[#0693e3] cursor-pointer to-[#0693e3] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Partners
              </li>
            </Link>
          </ul>

          <ul className="group text-[#0693e3] transition-all duration-300 ease-in-out">
            <Link href="/blog">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-[#0693e3] cursor-pointer to-[#0693e3] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Blog
              </li>
            </Link>
          </ul>

          <ul className="group text-[#0693e3] transition-all duration-300 ease-in-out">
            <Link href="/contact">
              <li className="bg-left-bottom font-poppins bg-gradient-to-r from-[#0693e3] cursor-pointer to-[#0693e3] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
