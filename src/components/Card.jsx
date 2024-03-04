import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="relative shadow-xl border-t-2 border-[#418160] p-6 rounded-md">
      <div className="flex flex-col gap-y-1">
        <p className="text-2xl font-semibold">150</p>
        <h1 className="text-2xl font-bold mb-8">New Orders</h1>
        <div class="absolute w-full left-0 right-0 bottom-0 bg-gradient-to-t from-gray-400 to-transparent border-t-2 rounded-md">
          <Link to="">
            <p class="flex justify-center items-center gap-x-2 mt-2 mb-2 text-[#000] text-center font-medium text-[1rem]">
              More info <FaRegArrowAltCircleRight />
            </p>
          </Link>
        </div>
      </div>
      <div className="absolute right-4 top-6 transparent">
        <IoBagHandleOutline fontSize={60} />
      </div>
    </div>
  );
};

export default Card;
