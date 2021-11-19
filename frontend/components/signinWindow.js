import axios from "axios";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Signin = () => {
    const [formData, setFormData] = useState({
        username:"",
        password:""
    })
    const btnHandler =  async(e) =>{
        e.preventDefault();
        const response = await axios.post(`http://localhost:8080/auth/users/signin`,formData);
        
      const {loggedin , payload} = response.data;
      if(!loggedin){
          alert("Please enter correct credentials!");
      }
      else{
          localStorage.setItem("token",payload.accessToken);
          document.querySelector("#signInBox").style.display = "none";
          alert(`Logged in as ${formData.username}`);
       }
        setFormData({ username:"",password:"" })
      
}
    return (
        <div className={styles.signInWindow} id="signInBox">
            <h2>Login First!</h2>
            <input placeholder="Username" value={formData.username} className={styles.input} onChange={(e)=>setFormData({...formData , username : e.target.value})} />
            <input placeholder="Password" value={formData.password} className={styles.input} onChange={(e)=>setFormData({...formData , password : e.target.value})} />
            <button onClick={btnHandler} className={styles.btn}>Sign in</button>
            <p className={styles.link}><Link href="./register">Create an account</Link></p>
        </div>
    )
}

export default Signin;
