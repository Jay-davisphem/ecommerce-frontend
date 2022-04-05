import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

import FoodItem from "../../components/FoodItem";
export default function Foods({ items }) {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      <Head>
        <title>Food Lists</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-main lg:text-4xl md:text-3xl text-2xl">FOOD LISTS</h1>
      <div className="flex flex-row flex-wrap gap-4 md:gap-8 justify-center">
        {items.map(({ regular_price, description, id, name }) => (
          <FoodItem price={regular_price} title={name} key={id} />
        ))}
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
    },
  ];
  let items = initialData;
  try {
    const res = await axios.get(`${process.env.API_URL}apis/foods/`);
    items = await res.data;
  } catch {
    throw new Error("Error");
  }
  return {
    props: {
      items,
    },
  };
}
