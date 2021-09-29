import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { getProducts } from "../lib/shopify";
// import { ProductList } from "../components/Products";
import { ProductList } from "../components/Products";

export default function Home({products}) {
  console.log("PRODUCTS", products)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products },
  };
}
