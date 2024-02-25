import React from 'react';
import styles from "../styles/Header.Module.css";

const Header = () => {
  return (
    <nav className={styles.Header}>
        <h1 className='title'>TODO LIST</h1>
    </nav>
  )
}

export default Header