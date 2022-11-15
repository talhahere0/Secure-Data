import React from "react";
import Header from "../../components/header";

import { IoVideocam } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className="text-center text-black font-poppins text-6xl font-semibold mt-24">
          Secure your data
        </div>
        <div className="text-center text-black font-poppins text-6xl font-semibold mt-2">
          No matter where its gone
        </div>
      </div>
      <div className="flex items-center justify-center gap-28 mt-16">
        <button className="bg-black font-poppins text-white px-16 py-3 rounded-md">
          Get started
        </button>
        <div className="flex items-center gap-2 justify-center text-black">
          <IoVideocam />
          <div className="text-xs font-poppins">watch video</div>
        </div>
      </div>
    </>
  );
};

export default Home;
