import React from "react";

import { motion } from "framer-motion";

import Header from "../../components/header";

import { IoVideocam } from "react-icons/io5";

const Home = () => {
  return (
    <div className="bg-[#120e26] min-h-screen bg-cover bg-no-repeat bg-center">
      <Header />
      <div>
        <motion.div
          animate={{ y: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center text-white font-poppins text-6xl font-semibold mt-10 mb-[20px]"
        >
          Secure your data
        </motion.div>

        <motion.div
          animate={{ y: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center text-white font-poppins text-6xl font-semibold mt-2 mb-[130px]"
        >
          No matter where its gone
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-28 mt-16">
        <button className="bg-[#0693e3] font-poppins text-white px-16 py-3 rounded-md">
          Get started
        </button>
        <div className="flex items-center gap-2 justify-center text-white">
          <IoVideocam />
          <div className="text-xs font-poppins">watch video</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
