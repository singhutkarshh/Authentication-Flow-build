import Head from "next/head";
import styles from "../styles/Home.module.css";
import Signin from "../components/signinWindow";
const Home = () => {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
    <div className={styles.container}>
      <h1>About Section</h1>
      <h3>This is our About Page!</h3> 
    </div>
    </>
  )
}

export default Home;
