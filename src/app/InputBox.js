import React from 'react';
import styles from './page.module.css'

const InputBox = ({ handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        className={styles["input-box"]}
        placeholder="Please your URL here..."
      />
      <button
      type="submit"
      className={styles["submit-btn"]}>
        Submit
        </button>
    </form>
  );
};

export default InputBox;
