import Image from "next/image";
import Link from "next/link";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";

const FoodItem = ({ title, price, image, id }) => {
  const [incart, setIncart] = useState(false);
  const clickHandler = () => setIncart(!incart);
  return (
    <>
      <div className="md:w-64 md:max-h-64 w-2/5 rounded overflow-hidden shadow-lg relative">
        <div className="w-4 h-4 md:h-7 md:w-7 rounded-full flex justify-center items-center bg-white top-1 right-1 md:top-2 md:right-2 z-10 absolute">
          {incart ? (
            <FcLike
              className="w-3 h-3 md:h-5 md:w-5 cursor-pointer"
              onClick={clickHandler}
            />
          ) : (
            <FcLikePlaceholder
              className="w-3 h-3 md:h-5 md:w-5 cursor-pointer"
              onClick={clickHandler}
            />
          )}
        </div>
        <Link href={`foods/${id}/`}>
          <Image
            src={image}
            width="300"
            height="200"
            // layout="fill"
            objectFit="cover"
            alt="image"
          />
        </Link>
        <div className="py-none text-xs md:text-base text-left">
          <a className="text-blue block cursor-pointer">{title}</a>
          <a className="text-sec block cursor-pointer">${price}</a>
        </div>
      </div>
    </>
  );
};
export default FoodItem;
