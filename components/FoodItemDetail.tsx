import Image from "next/image";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { TiShoppingCart } from "react-icons/ti";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryResponse, FoodDetailProps } from "./Food";

const FoodItemDetail = ({
  name,
  discount_price,
  category,
  description,
  image,
}: FoodDetailProps) => {
  const [incart, setIncart] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const clickHandler = () => setIncart(!incart);

  const getCategory = (id: number) => {
    axios
      .get<CategoryResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}apis/categories/${id}/`
      )
      .then((res) => setCategoryName(res.data.name));
  };

  useEffect(() => {
    getCategory(category);
  }, [categoryName]);
  return (
    <>
      <div className="md:w-64 md:max-h-64 w-2/5 rounded overflow-hidden shadow-lg relative m-auto">
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
        <div className="py-none text-[10px] md:text-sm text-left">
          <span className="text-blue inline-block">{name}</span>&nbsp;&nbsp;
          <span className="text-sec inline-block">${discount_price}</span>
          <p className="text-grey block text-[10px]">{categoryName}</p>
          <p className="text-grey block text-[8px] lg:text-[10px]">{description}</p>
        </div>
        <div>
          <TiShoppingCart />
        </div>
        <button className="text-white bg-main rounded-3xl text-xs lg:text-sm py-0 px-2 hover:bg-blue hover:">
          Order Now
        </button>
      </div>
    </>
  );
};

export default FoodItemDetail;
