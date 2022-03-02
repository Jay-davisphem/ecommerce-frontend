import Head from "next/head";
import { useRouter } from "next/router";
import FoodItemDetail from "../../components/FoodItemDetail";
export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Foods-{id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FoodItemDetail
        type="hjuhdhj"
        description="khfhddhfsjfhafheioujshbdhbhadhhdhfhjhb"
        category="hjshhj"
        price="34"
        title="Amala and Efo"
      />
    </>
  );
}
