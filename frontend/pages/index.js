import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import Signin from "../components/signinWindow";
import styles from "../styles/Home.module.css";


const Home = () => {
 
  useEffect(() => {
    axios.get(`http://localhost:8080/auth/users/loginstatus`).then((res)=>{
      const {loggedin , payload} = res.data;
      if(loggedin){
        alert("User is already logged in!");
      }else{
        const dropBox = document.querySelector("#signInBox");
        setTimeout(() => {
          dropBox.style.display = "block";
        }, 5000);
      }
    });
   
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
