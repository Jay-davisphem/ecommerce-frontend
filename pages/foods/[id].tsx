import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import FoodItemDetail from "../../components/FoodItemDetail";
import { ContextType } from "react";
import { FoodItemsDetailsProps } from "../../components/Food";

export default function Home({ itemsDetail }: FoodItemsDetailsProps) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Foods-{id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FoodItemDetail
        id={id}
        image={itemsDetail.image}
        description={itemsDetail.description}
        category={itemsDetail.category}
        discount_price={itemsDetail.regular_price}
        name={itemsDetail.name}
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
