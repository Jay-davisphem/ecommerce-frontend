import Head from "next/head";

import FoodItem from "../../components/FoodItem";
export default function Foods({price, title}) {
	const items = [1,2,46,7,4,7];
  return (
    <>
      <Head>
        <title>Food Lists</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-main lg:text-4xl md:text-3xl text-2xl">FOOD LISTS</h1>
      <div className='flex flex-row flex-wrap gap-4 md:gap-8 justify-center'>
      {items.map(a => <FoodItem price={a} title={a} key={a} />)}
      </div>
    </>
  );
}
