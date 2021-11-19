import axios from "axios";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Signin = () => {
    const [formData, setFormData] = useState({
        username:"",
        password:""
    })
    const btnHandler =  async(e) =>{
        e.preventDefault();
        const response = await axios.post(`http://localhost:8080/auth/users/signin`,formData);
        setFormData({
          username:"",
          password:""
      })
      const {loggedin , payload} = response.data;
      if(!loggedin){
          alert("Please enter correct credentials!");
      }else{
          localStorage.setItem("token",payload.accessToken);
      }
}
    return (
        <div className={styles.signInWindow}>
            <h2>Login First!</h2>
            <input placeholder="Username" value={formData.username} className={styles.input} onChange={(e)=>setFormData({...formData , username : e.target.value})} />
            <input placeholder="Password" value={formData.password} className={styles.input} onChange={(e)=>setFormData({...formData , password : e.target.value})} />
            <button onClick={btnHandler} className={styles.btn}>Sign in</button>
        </div>
    )
}

export default Signin;
