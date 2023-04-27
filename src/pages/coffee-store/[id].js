import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import coffeeStoresData from "../../data/coffee-stores.json";
import Head from "next/head";
import styles from "../../styles/coffee-store.module.css";
import Image from "next/image";
import cls from "classnames"

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
  const paths = coffeeStoresData.map((coffeStore) => {
    return {
      params: {
        id: coffeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const CoffeStore = (props) => {
  const router = useRouter();

  const handleUpvoteButton = () =>{
   console.log("UPPPPP")
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { address, name, neighbourdhood, imgUrl } = props.coffeStore;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
          <h1 className={styles.name }>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            className={styles.storeImg}
            alt={name}
            width={600}
            height={360}
          />
        </div>

        <div className={cls("glass",styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" alt="" width={24} height={24}/>
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/near_me.svg" alt="" width={24} height={24}/>
            <p className={styles.text}>{neighbourdhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" alt="" width={24} height={24}/>
            <p className={styles.text}>1</p>
          </div>


          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeStore;
