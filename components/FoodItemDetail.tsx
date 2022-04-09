import Image from "next/image";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";

const FoodItemDetail = ({ title, price, category, description, image }) => {
  const [incart, setIncart] = useState(false);
  const clickHandler = () => setIncart(!incart);
  return (
    <>
      <div className="md:w-64 md:max-h-64 w-2/5 rounded overflow-hidden shadow-lg relative">
        <div className="w-4 h-4 md:h-7 md:w-7 rounded-full bg-white top-1 right-1 md:top-2 md:right-2 z-10 absolute">
          {incart ? (
            <FcLike
              className="w-4 h-4 md:h-7 md:w-7 cursor-pointer"
              onClick={clickHandler}
            />
          ) : (
            <FcLikePlaceholder
              className="w-4 h-4 md:h-7 md:w-7 cursor-pointer"
              onClick={clickHandler}
            />
          )}
        </div>
        <Image
          src={image}
          width="300"
          height="150"
          objectFit="cover"
          alt="image"
        />
        <div className="py-none text-xs md:text-base text-left">
          <a className="text-blue inline-block cursor-pointer">{title}</a>
          <a className="text-sec inline-block cursor-pointer">${price}</a>
          <p className="text-grey block">{category}</p>
          <p className="text-grey block">{description}</p>
        </div>
        <div>
          <TiShoppingCart />
        </div>
        <button className="text-white bg-main rounded-lg text-lg">
          Order Now
        </button>
      </div>
    </>
  );
};

export default FoodItemDetail;
