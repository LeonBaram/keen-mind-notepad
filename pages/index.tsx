// react
import { useEffect, useRef, useState } from "react";
// next
import type { NextPage } from "next";
import Head from "next/head";
// firebase
import { onValue, push } from "@firebase/database";
import { dbref } from "../firebase-init";
// styles
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [notes, setNotes] = useState<string[][]>([]);

  useEffect(
    () =>
      onValue(dbref.Notes, (snapshot) =>
        setNotes(Object.entries(snapshot.val()))
      ),
    []
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Keen Mind Notepad</title>
        <meta name="description" content="Keen Mind Notepad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul>
          {notes.map(([noteID, note]) => (
            <li key={noteID}>{note}</li>
          ))}
        </ul>
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            push(dbref.Notes, input);
            setInput("");
          }}
        >
          <input
            type="text"
            name="user-input"
            id="user-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </main>
    </div>
  );
};

export default Home;
