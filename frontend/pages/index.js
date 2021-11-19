import Head from "next/head";
import Signin from "../components/signinWindow";
import styles from "../styles/Home.module.css";

const Home = () => {
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
