// import React, { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import InputBox from './InputBox';



export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={60}
              margin-bottom={0}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles["banner-container"]}>
        <div className={styles.banner}>
          <h1>Looking for a BRO or looking for a PRO?</h1>
          <p></p>
          <InputBox />
        </div>
      </div>
    </main>
  )
}
