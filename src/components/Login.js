import React, { useState, useEffect } from "react";
import { Validation } from "./Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import email from '../components/svgs/email.png';
import pass from '../components/svgs/pass.png';

const Login = () => {
  const [data, setData] = useState({
 
    email: "",
    password: "",
   
  });
  const [touched, setTouched] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    setError(Validation(data,"login"));
  }, [data, touched]);


  const eventHandeler = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });
    };


  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };


  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      notify("fertig","success")
    } else {
        notify("* Pflichtfeld","error")
        console.log(error);
      setTouched({
        
        password: true,
        email: true,
        
      });
    }
  };

  const notify = (text,type) => {
    if(type==="success"){
        toast.success(text);
    }else{
        toast.error(text)
    }
  };
  return (
    <div className={styles.container}>
      <form   className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>ANMELDEN</h2>
       
        <div className={styles.formField}>
        <img src={email} alt="email" />
          <input className={(error.email && touched.email)? styles.uncompleted : styles.formInput} placeholder="Ihre E-Mail-Adresse*" type="email" name="email" value={data.email} onChange={eventHandeler} onFocus={focusHandler}  />
          {error.email && touched.email && <span>{error.email}</span>}
        </div>
        <div  className={styles.formField}>
        <img src={pass} alt="pass" />
          <input className={(error.password && touched.password) ? styles.uncompleted : styles.formInput} placeholder="Ihr Passwort*" type="password" name="password" value={data.password} onChange={eventHandeler} onFocus={focusHandler} />
          {error.password && touched.password && <span>{error.password}</span>}
        </div>
        <div className={styles.formButtons} >
        <Link to="/SignUp">KONTO ERSTELLEN</Link>
        
        <button type="Submit">ANMELDEN</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
