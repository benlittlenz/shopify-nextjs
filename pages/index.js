import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { getProducts } from "../lib/shopify";
import { Navigation } from "../components/Nav"
import { ProductList } from "../components/Products";

export default function Home({products}) {
  console.log("PRODUCTS", products)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
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
