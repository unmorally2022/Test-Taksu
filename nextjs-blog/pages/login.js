import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, localStorage } from "react";

export default function myLogin(req) {
  
  return (

    <div className={styles.container}>

      <Head>
        <title>Taksu Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form action="/HomeScreen" method="post">
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
