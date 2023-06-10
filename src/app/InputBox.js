'use client'
import React from 'react';
import styles from './page.module.css';

const InputBox = () => {

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      url: event.target.url.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    const endpoint = 'https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/sourcestack-data-global.json'


    const response = await fetch(endpoint)
    const urlData = await response.json()

    const value = urlData['data'].forEach(element => {
      if (data['url'] === (element['post_url'])) {
        console.log("We found you!")
      }
    });

    // console.log(urlData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name='url'
        // onChange={handleInputChange}
        className={styles["input-box"]}
        placeholder="Please your URL here..."
      />
      <button
      type="submit"
      className={styles["submit-btn"]}>
        Check it!
        </button>
    </form>
  );
};

export default InputBox;
