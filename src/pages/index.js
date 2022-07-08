import Head from "next/head";
import Banner from "../components/Banner";

// Components
import Header from "../components/Header";
import ProductsFeed from "../components/ProductsFeed";

export default function Home({ allProducts }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductsFeed allProducts={allProducts} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const allProducts = await fetch(
    "https://fakestoreapi.com/products?limit=19"
  ).then((res) => res.json());

  return {
    props: {
      allProducts,
    },
  };
}
