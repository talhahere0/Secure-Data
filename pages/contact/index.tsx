import React from "react";

import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { RiSendPlane2Fill } from "react-icons/ri";

import Header from "../../components/header";

const Contact = () => {
  return (
    <div className="bg-[#120e26] min-h-screen bg-cover bg-no-repeat bg-center">
      <Header />
      <div className="text-white font-poppins text-center text-5xl mt-20 font-semibold">
        Love to hear from you! 💌
      </div>
      <div className="flex gap-16 items-center justify-center">
        <div className="text-center mt-10">
          <div className="flex items-center justify-center">
            <BiUser className="text-lg text-gray-400 left-[690px] absolute" />
            <input
              className="h-16 w-[250px] px-10 font-poppins rounded-md border-[3px] border-black focus:outline-none focus:border-[#0693e3] text-[#0693e3]"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="flex items-center justify-center">
            <BiUser className="text-lg text-gray-400 left-[1004px] absolute" />
            <input
              className="h-16 w-[250px] px-10 font-poppins rounded-md border-[3px] border-black focus:outline-none focus:border-[#0693e3] text-[#0693e3]"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <div className="flex items-center justify-center">
          <HiOutlineMail className="text-lg text-gray-400 left-[690px] absolute" />
          <input
            className="h-16 w-[565px] px-10 font-poppins rounded-md border-[3px] border-black focus:outline-none focus:border-[#0693e3] text-[#0693e3]"
            type="text"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="text-center mt-6">
        <div className="flex items-center justify-center">
          <BsPhone className="text-lg text-gray-400 left-[690px] absolute" />
          <input
            className="h-16 w-[565px] px-10 font-poppins rounded-md border-[3px] border-black focus:outline-none focus:border-[#0693e3] text-[#0693e3]"
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="text-center mt-6">
        <div className="flex items-center justify-center">
          <TbMessageCircle className="text-lg text-gray-400 left-[690px] top-[522px] absolute" />
          <textarea
            placeholder="Enter Your bio!"
            name=""
            id=""
            cols={30}
            rows={5}
            className=" 
            h-30
            w-[565px]
            py-2  
            px-10
            font-poppins
            bg-white 
            border-black 
            rounded-md
            border-[3px]
            focus:outline-none 
            focus:border-[#0693e3] text-[#0693e3]"
          ></textarea>
        </div>
      </div>

      <div className="text-center mt-6">
        <div className="flex items-center justify-center">
          <RiSendPlane2Fill className="text-lg text-white left-[1000px] absolute" />
          <button className="h-16 w-[565px] text-center text-lg font-poppins bg-[#0693e3] text-white rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
