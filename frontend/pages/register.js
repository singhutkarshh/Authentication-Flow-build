import styles from "../styles/Home.module.css";
import Head from "next/head"
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const RegisterWindow = () => {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:""
    })
    const btnHandler =  async(e) =>{
      e.preventDefault();
      console.log(formData);
      const {firstName , lastName , username , email , password} = formData;
      if(firstName && lastName && username && email && password){
        const response = await axios.post(`http://localhost:8080/auth/users/register`,formData);
        const {error,payload} = response.data;
        if(error.status){
          alert("Registration failed!");
        }else{
          alert("Registration successfull ..Login Now!")
          setFormData({
              firstName:"",
              lastName:"",
              username:"",
              email:"",
              password:""
          })
          window.location.replace("http://localhost:3000/");
        }
      }else{
          alert("Registration failed! Filled all credentials correctly");
      }
     
      
    }
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <section className={styles.container}>
                <div className={styles.registerWindow}>
                    <h2>Register!</h2>
                    <input placeholder="First Name" className={styles.input} value={formData.firstName} onChange={(e)=>setFormData({...formData , firstName : e.target.value})}/>
                    <input placeholder="Last Name" className={styles.input} value={formData.lastName} onChange={(e)=>setFormData({...formData , lastName : e.target.value})}/>
                    <input placeholder="Username" className={styles.input} value={formData.username} onChange={(e)=>setFormData({...formData , username : e.target.value})}/>
                    <input placeholder="Email" className={styles.input} value={formData.email} onChange={(e)=>setFormData({...formData , email : e.target.value})}/>
                    <input placeholder="Password" className={styles.input} value={formData.password} onChange={(e)=>setFormData({...formData , password : e.target.value})}/>
                    <button onClick={btnHandler} className={styles.btn}>Register</button>
                </div>
            </section>
        </>
    )
}

export default RegisterWindow;
