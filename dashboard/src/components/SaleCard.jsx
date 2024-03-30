import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdArrowUpward } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
const SaleCard = ({
  title,
  total,
  percentage,
  icon,
  iconColor,
  iconBg,
  pcColor,
  revIcon,
  rColor,
}) => {
  return (
    <div className="w-[350px] h-40 bg-white p-8 pt-6 mb-3 rounded-sm flex flex-wrap justify-between ">
      <div
        style={{ backgroundColor: iconBg }}
        className={`w-20 h-20 rounded-sm grid place-items-center `}
      >
        <label style={{ color: iconColor }} className="text-3xl">
          {icon}
        </label>
      </div>
      <div className="pl-2">
        <h1 className="text-2xl font-semibold font-inter">{total}</h1>
        <p className="text-lg text-[#a2a2a2]">{title}</p>
        <div className="flex flex-wrap items-center text-[#aeaeae] text-lg mt-2 ">
          <label style={{ color: rColor }} className="text-xl">
            {revIcon}
          </label>
          <span
            style={{ color: rColor }}
            className=" font-medium mr-1 text-lg "
          >
            {percentage}
          </span>
          Since last week
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
