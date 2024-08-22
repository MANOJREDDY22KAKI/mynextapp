import Head from "next/head";
import ProductsCards from "./pages/ProductsCards";
import "./globals.css";


export default function Home() {
  return (
    <div>
      <Head>
        <title>ShopHere</title>
        <meta
          name="keyword"
          content="ShopHere ,Online Shopping ,Fashion ,E-Commerce"
        />
        <meta
          name="description"
          content="ShopHere is a E-Commerce website you can explore different types of products here"
        />
      </Head>
      <ProductsCards />
      </div>
    
  );
}
