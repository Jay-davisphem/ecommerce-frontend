import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import FoodItemDetail from "../../components/FoodItemDetail";
import { ContextType } from "react";

export default function Home({ item }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Foods-{id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FoodItemDetail
        image={item.image}
        description={item.description}
        category={item.category}
        price={item.regular_price}
        title={item.name}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const food_res = await axios.get(
    `${process.env.API_URL}apis/foods/${params.id}`
  );
  const item = await food_res.data;
  console.log(item);
  const images_res = await axios.get(`${process.env.API_URL}apis/food-images/`);
  const images = images_res.data;

  for (let image of images) {
    if (image.food === item.id) {
      item["image"] = image.food_images;
      break;
    }
  }

  console.log(item);

  return {
    props: {
      item,
    },
  };
}
