import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keen Mind Notepad</title>
        <meta name="description" content="Keen Mind Notepad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input type="text" name="user-input" id="user-input" />
    </div>
  );
};

export default Home;
