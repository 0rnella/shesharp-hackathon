'use client'
import React from 'react';
import styles from './page.module.css';

const InputBox = ({handleSubmit}) => {
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
