import React from "react";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoTrendingUpSharp } from "react-icons/io5";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image 
            src="https://avatars.githubusercontent.com/u/124354779?v=4"
            alt="user-image"
            height={100}
            width={100}
            className="rounded-full"
          />
        </div>
        <div>
          <h5 className="text-xl">Atul</h5>
          <p className="text-base whitespace-normal break-words">
          Feel free to choose the level of rounding that best fits your design preferences. You can explore the various rounded-* utility classes in the Tailwind CSS documentation for more options
          </p>
          <div className="flex justify-between mt-4 text-2xl items-center p-2 gap-4 w-[80%]">
          <div>
          <FiMessageCircle  />
          </div>
          <div>
          <BiRepost />
          </div>
          <div>
          <CiHeart />
          </div>
          <div>
          <IoTrendingUpSharp />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
