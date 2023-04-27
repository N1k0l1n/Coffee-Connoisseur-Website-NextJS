import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import coffeeStoresData from "../../data/coffee-stores.json";
import { flushSync } from "react-dom";
import Head from "next/head";

export async function getStaticProps({ params }) {
  return {
    props: {
      coffeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    }, // will be passed to the page component as props
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map(coffeStore =>{
    return {
      params: {
        id:coffeStore.id.toString(),
      }
    }
  })
  return {
    paths,
    fallback: true,
  };
}

const CoffeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { address, name, neighbourdhood } = props.coffeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">Back to home</Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourdhood}</p>
    </div>
  );
};

export default CoffeStore;
