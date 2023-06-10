import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";
import "../app/globals.css";

export default function PageWithJSbasedForm() {
  const [aiResponse, setAiResponse] = useState();
  // Handles the submit event on form submit.
  let chatResponse;
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      description: event.target.description.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/chat";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    const chatResponse = await response.json();
    setAiResponse(chatResponse);
  };

  const InputPrompt = () => {
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
            <h1>Submit your job description</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Put your job description here..."
                className={styles["input-box"]}
                required
              />

              <button type="submit" className={styles["submit-btn"]}>
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className={styles.grid}>
          {/* <a
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
        </a> */}
        </div>
      </main>
    );
  };

  const Recommendation = ({ aiResponse }) => {
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
            <h1>Our AI Recommendation</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: aiResponse.replaceAll("\n", "<br/>"),
              }}
            ></p>
            <br></br>
            <Link
              // style={{
              //   textDecoration: "underline",
              //   fontWeight: "bold",
              //   fontSize: "1.2rem",
              // }}
              className={styles.btn}
              href="/about"
            >
              Wanna know more?
            </Link>
          </div>
        </div>
      </main>
    );
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <>
      {aiResponse ? (
        <Recommendation aiResponse={aiResponse} />
      ) : (
        <InputPrompt />
      )}
    </>
  );
}
