import React from "react";
import styles from "../styles/Header.module.css";
import Head from "next/head";

const Header = () => {
  return (
    <div className={styles.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <a href="#home">
        <div>
          <h1>Daniel Miller</h1>
          <h2>Web Developer</h2>
        </div>
      </a>
      <div className={styles.navBox}>
        <ul className={styles.nav}>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="/Daniel-Miller-Dev-Resume.pdf" download>
            <li>Resume</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
