// import React, { useState } from 'react';
import Image from "next/image";
import styles from "../app/page.module.css";
import "../app/globals.css";
import React from "react";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p> */}
        {/* <p>
          We help you make job posts better
          <InputBox />
        </p> */}

        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {" "}
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
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          <h1>Why use this website?</h1>
          <ul>
            <li>
              Embrace diversity, unlock potential: Optimize job requirements to
              welcome diverse talent, unlocking their untapped potential and
              fostering a culture of inclusivity.
            </li>
            <li>
              Stand out, attract the best: Demonstrate a commitment to diversity
              and inclusion through job requirements optimization, enhancing
              your reputation and attracting top talent who value an inclusive
              workplace.
            </li>
            <li>
              Fuel innovation, ignite success: Ignite innovation and drive
              success by harnessing the power of diverse perspectives, promoting
              creativity and effective problem-solving within your organization.
            </li>
            <li>
              Lead the way, champion inclusion: Lead the way in compliance with
              diversity and inclusion initiatives, creating a workplace that not
              only meets legal obligations but celebrates diversity, fostering a
              vibrant and inclusive environment.
            </li>
          </ul>
          <br></br>
          <h1>What will the company get out of this?</h1>
          <ul>
            <li>
              Expanded talent pool: By optimizing job requirements, companies
              can tap into a larger and more diverse talent pool, accessing a
              wider range of skills, perspectives, and experiences.
            </li>
            <li>
              Increased competitiveness: A diverse workforce fuels innovation,
              creativity, and adaptability, giving companies a competitive edge
              in a rapidly changing business landscape.
            </li>
            <li>
              Enhanced problem-solving: Diverse teams bring unique insights and
              approaches to problem-solving, leading to more effective and
              comprehensive solutions.
            </li>
            <li>
              Improved employee engagement and retention: Creating an inclusive
              environment through job requirements optimization fosters a sense
              of belonging and engagement, leading to higher employee
              satisfaction and retention rates.
            </li>
            <li>
              Positive brand image: Embracing diversity and inclusion enhances a
              company's reputation, attracting customers, partners, and
              investors who value and support inclusive practices.
            </li>
          </ul>
          <br></br>
          <h1>General tips:</h1>
          <ul>
            <li>
              Embrace diversity: Celebrate and value differences in backgrounds,
              perspectives, and experiences, fostering an inclusive and
              respectful environment.
            </li>
            <li>
              Foster equity: Ensure fair opportunities for all employees,
              promoting equal access to resources, development, and advancement.
            </li>
            <li>
              Cultivate inclusion: Create a sense of belonging where every voice
              is heard and valued, encouraging collaboration and collaboration.
            </li>
            <li>
              Educate and train: Provide diversity and inclusion training to
              employees at all levels to promote awareness, empathy, and
              understanding.
            </li>
            <li>
              Evaluate policies and practices: Regularly assess and update
              company policies, practices, and systems to remove biases and
              barriers and promote equitable outcomes.
            </li>
            <li>
              Engage in community initiatives: Support and participate in
              initiatives that promote diversity, equity, and inclusion within
              the wider community.
            </li>
            <li>
              Measure progress: Establish metrics and regularly track progress
              towards diversity, equity, and inclusion goals, holding the
              company accountable for continuous improvement.
            </li>
            <li>
              Lead from the top: Demonstrate commitment and leadership in
              diversity and inclusion efforts, setting the tone
            </li>
          </ul>
        </div>
      </div>

      {/* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
