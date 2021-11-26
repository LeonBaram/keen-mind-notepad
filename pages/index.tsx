import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [input, setInput] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Keen Mind Notepad</title>
        <meta name="description" content="Keen Mind Notepad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <input
          type="text"
          name="user-input"
          id="user-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </main>
    </div>
  );
};

export default Home;
