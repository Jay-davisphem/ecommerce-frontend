import Head from 'next/head';

function Title({title, include=false}){
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2 className={include? 'text-main lg:text-4xl md:text-3xl text-2xl mt-4 mb-12' :'text-blue text-xl'}>{title}</h2>
    </>
  )
}

export default Title;
