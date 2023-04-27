import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "../../components/banner";
import Image from "next/image";
import Card from "../../components/card";
import coffeeStoresData from "../../src/data/coffee-stores.json";

//Anything getStaticProps is server side
export async function getStaticProps(context) {
  //const data = fetch(coffeeStores)

  return {
    props: {
      coffeeStores: coffeeStoresData,
    }, // will be passed to the page component as props
  };
}

//Anything inside Home function is client side genereted
export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log("hi");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            alt="logo"
            src="/static/finally.png"
            width={500}
            height={200}
          />
        </div>
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Tirana Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    className={styles.card}
                    href={`/coffee-store/${coffeeStore.id}`}
                    imgUrl={coffeeStore.imgUrl}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
