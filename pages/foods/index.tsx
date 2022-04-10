import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import img from "../../assets/assets_images/chicken2.jpeg";
import FoodItem from "../../components/FoodItem";

export default function Foods({ items }) {
  return (
    <>
      <Head>
        <title>Food Lists</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-main lg:text-4xl md:text-3xl text-2xl">FOOD LISTS</h1>
      <div className="flex flex-row flex-wrap gap-4 md:gap-8 justify-center">
        {items.map(
          ({ regular_price, description, id, name, image, discount_price }) => (
            <FoodItem
              regular_price={regular_price}
              discount_price={discount_price}
              image={image}
              title={name}
              key={id}
              id={id}
            />
          )
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const initialData = [
    {
      id: 1,
      name: "Fufu and Ewedu",
      description: "Foods",
      regular_price: "1400.00",
      updated_at: "2022-03-27T14:43:40.145423+01:00",
      created_at: "2022-03-25T14:44:22.911309+01:00",
      discount_price: "1200.00",
      vendor: 3,
      category: [1],
      meats: [1],
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
    throw new Error("FoodError");
  }
  return {
    props: {
      items,
    },
  };
}
