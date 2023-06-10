"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import InputBox from "./InputBox";
import Link from "next/link";

export default function Home() {
  const [sourceStackJob, setSourceStackJob] = useState();

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const url = event.target.url.value;

    const endpoint =
      "https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/sourcestack-data-global.json";

    const response = await fetch(endpoint);
    const sourceStackJobs = await response.json();

    sourceStackJobs["data"].forEach((element) => {
      if (url === element["post_url"]) {
        console.log("We found you!");
        setSourceStackJob(element);
      }
    });
  };

  const JobAnalysis = ({ sourceStackJob }) => {
    console.log(sourceStackJob);
    const tagsMatched = sourceStackJob["tags_matched"];
    const categories = sourceStackJob["tag_categories"];
    return (
      <div>
        <p>SourceStack has analyzed your job and found the following:</p>
        <h2>Title: {sourceStackJob['job_name']}</h2>
        <p> <b>{tagsMatched.length} matched tags:</b> {tagsMatched.join(', ')}</p>

          {tagsMatched.length > 3 && (
            <span>That's a lot of technologies. Are you sure you need all them? If not, consider removing the keywords.</span>
          )}
          <p> <b>{categories.length} matched categories:</b> {categories.join(', ')}</p>
        <p>
          {categories.length > 3 && (
            <span>That's a lot of categories. Are you sure you need all them? If not, consider removing the keywords.</span>
          )}
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <Link href="/form">
          Let's go further. Make your posting better with AI!
        </Link>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
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
          <h1>We help you make job posts better</h1>
          <p></p>
          {sourceStackJob ? (
            <JobAnalysis sourceStackJob={sourceStackJob} />
          ) : (
            <InputBox handleSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </main>
  );
}
