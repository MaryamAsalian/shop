import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Validation } from "./Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Signup.module.css";
import email from '../components/svgs/email.png';
import pass from '../components/svgs/pass.png';
import user from '../components/svgs/user.png';

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    nachname: "",
    email: "",
    password: "",
    isAccept: false
  });
  const [touched, setTouched] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    setError(Validation(data,"signup"));
  }, [data, touched]);


  const eventHandeler = (event) => {
    if (event.target.name === "isAccept") {
      setData({ ...data, [event.target.name]: event.target.checked});
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
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
        name: true,
        nachname: true,
        password: true,
        email: true,
        isAccept: true,
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
    <div  className={styles.container}>
      <form  className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>REGISTRIERN</h2>
        <div className={styles.formField}>
        <img className={styles.user} src={user} alt="user" />
          <input  className={(error.name && touched.name)? styles.uncompleted : styles.formInput}  placeholder="Vorname*" type="text"name="name"value={data.name}onChange={eventHandeler}onFocus={focusHandler}/>
          
        </div>
        <div className={styles.formField}>
        <img className={styles.user} src={user} alt="user" />
          <input  className={(error.nachname && touched.nachname)? styles.uncompleted : styles.formInput}placeholder="Nachname*" type="text" name="nachname" value={data.nachname} onChange={eventHandeler} onFocus={focusHandler} />
        </div>

        <div className={styles.formField}>
         <img src={email} alt="email" />
          <input className={(error.email && touched.email)? styles.uncompleted : styles.formInput} placeholder="Ihre E-Mail-Adresse*" type="email" name="email" value={data.email} onChange={eventHandeler} onFocus={focusHandler}  />
        </div>

        <div className={styles.formField}>
        <img src={pass} alt="pass" />
          <input className={(error.password && touched.password) ? styles.uncompleted : styles.formInput} placeholder="Ihr Passwort*" type="password" name="password" value={data.password} onChange={eventHandeler} onFocus={focusHandler} />
        </div>

        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
          <input className={(error.isAccept && touched.isAccept)? styles.uncompleted : styles.formInput} type="checkbox" name="isAccept" value={data.isAccept} onChange={eventHandeler} onFocus={focusHandler} />
          <label> Ich habe die Datenschutzbestimmungen zur Kenntnis genommen. </label> 
          </div>

        </div>
        <div className={styles.formButtons} >
        <Link to="/Login">ANMELDEN</Link>
        <button type="Submit">KONTO ERSTELLEN</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;
