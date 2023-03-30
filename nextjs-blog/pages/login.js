import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from "react";

export default function myLogin() {

  const [name, setName] = useState();


  return (

    <div className={styles.container}>

      <Head>
        <title>Taksu Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form action="/HomeScreen" method="post" Content-Type='application/json'>
          <label className={styles.label}>
            Name:
          </label>
          <br></br>
          <input type="text" name="i_name" defaultValue="" className={styles.input} />

          <br></br>
          <input type="submit" value="Next" className={styles.submit} />
        </form>
      </main>
    </div>
  );
}
