import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "../../components/banner";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <Image alt="logo" src="/static/finally.png" width={580} height={200} />
        </div>
      </main>
    </div>
  );
}
