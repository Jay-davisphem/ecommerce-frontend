import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import img from "../../assets/assets_images/chicken2.jpeg";
import { FoodItemsProps } from "../../components/Food";
import FoodItem from "../../components/FoodItem";
import Title from '../../components/Title'
export default function Foods({ items }: FoodItemsProps) {
  return (
    <>
      <div>
        <Title title='Food Lists' include={true}/>  
        <div className="flex flex-row flex-wrap gap-4 md:gap-8 justify-center">
        {items.map(({ regular_price, id, image, name, discount_price }) => (
          <FoodItem
            regular_price={regular_price}
            discount_price={discount_price}
            image={image}
            name={name}
            key={id}
            id={id}
          />
        ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const initialData = [
    {
      id: 1,
      name: "No Food",
      description: "Foods",
      regular_price: "",
      updated_at: "2022-03-27T14:43:40.145423+01:00",
      created_at: "2022-03-25T14:44:22.911309+01:00",
      discount_price: "",
      vendor: 0,
      category: [],
      meats: [],
      image: img,
    },
  ];
  let items = initialData;
  try {
    const food_res = await axios.get(`${process.env.API_URL}apis/foods/`);
    items = await food_res.data;
    const images_res = await axios.get(
      `${process.env.API_URL}apis/food-images/`
    );
    const images = images_res.data;
    for (let image of images) {
      for (let food of items) {
        if (image.food === food.id) food["image"] = image.food_images;
      }
    }
    console.log(items);
  } catch {
    // throw Error("FoodError");
  }
  return {
    props: {
      items,
    },
  };
}
