import Head from "next/head";
import { useEffect } from "react";
import Signin from "../components/signinWindow";
import styles from "../styles/Home.module.css";

const Home = () => {
  useEffect(() => {
    const dropBox = document.querySelector("#signInBox");
    setTimeout(() => {
      console.log("hello");
      dropBox.style.display = "block";
    }, 5000);
  }, [])
  return (
    <>
    <Head>
      <title>HomePage</title>
    </Head>
    <h1 className={styles.header}>Hello World!</h1>
    <div className={styles.container}>
      <h1>This is our homepage!</h1>
      <Signin/>
    </div>
    </>
  )
}

export default Home;
