import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
const Home = () => {
  const clickHandler = async() =>{
    const token = localStorage.getItem('token');
    const response  = await axios.get(`http://localhost:8080/auth/users/posts`,{
      headers: {
        authorization: `Bearer ${token}`
      }});
    console.log(response);
  }
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
    <div className={styles.container}>
      <h1>About Section</h1>
      <h3>This is our About Page!</h3> 
      <button onClick={clickHandler} className={styles.btn}>Get Posts</button>
    </div>
    </>
  )
}

export default Home;
