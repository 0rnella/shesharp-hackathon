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
        <br />
        <h2>Title: {sourceStackJob["job_name"]}</h2>
        <br />
        <br />
        <p>
          <b>{tagsMatched.length} matched skills:</b> {tagsMatched.join(", ")}
        </p>
        <p className={styles.opinion}>
          {tagsMatched.length > 3 ? (
            <span>
              That's a lot of skills. Are you sure you need all of them? If not,
              consider removing the keywords.
            </span>
          ) : (
            <span>Good job, that's a reasonable number of skills.</span>
          )}
        </p>
        <br />
        <br />
        <p>
          <b>{categories.length} matched categories:</b> {categories.join(", ")}
        </p>

        <p className={styles.opinion}>
          {categories.length > 3 ? (
            <span>
              That's a lot of categories. Are you sure you need all of them? If
              not, consider removing the keywords.
            </span>
          ) : (
            <span>Good job, that's a reasonable number of categories.</span>
          )}
        </p>
        <br />
        <br />
        <br />
        <br />
        <Link
        className={styles.btn}
        href="/form">
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
          <p></p>
          {sourceStackJob ? (
            <JobAnalysis sourceStackJob={sourceStackJob} />
          ) : (
            <>
              <h1>Looking for a BRO or looking for a PRO?</h1>
              <InputBox handleSubmit={handleSubmit} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
