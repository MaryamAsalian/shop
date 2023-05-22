import React  from 'react';
import styles from "./Navbar.module.css";
import logo from "./images/logo.png";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Ul =styled.ul`

}
@media(max-width:768px){
    z-index:1;
    width:300px;
    flex-direction:column;
    transition:all 0.3s liner;
    transform: ${props =>
    props.open ? 'translatex(0)' : 'translatex(100%)'};
    top:0;
    right:0;
    li{
        color:red;
    }
}
`

const Navbar = ({open}) => {
  
  
    return (
        <>
        <Ul open={open}  className={styles.header}>
        <div className={styles.logo} >
            <img src={logo}  alt="logo"/>
        </div>
        <div className={styles.listContainer}> 
            <nav className={styles.list}>
              <ul ><Link to="/Marken" >Marken</Link>
              {/* <ul className={styles.listbar}><a>Top-Marken</a>
                   <li><a href="#">Biotherm</a></li>
                   <li><a href="#">BDK</a></li>
                   <li><a href="#">Clarins</a></li>
                   <li><a href="#">PHYRIS</a></li>
                   <li><a href="#">Sensai</a></li>
                </ul> */}
              </ul>
                <ul><Link to="/Parfum">Parfum </Link></ul>
                <ul><Link to="/Pflege">Pflege </Link></ul>
                <ul><Link to="/Makeup">Make up </Link></ul>
                <ul><Link to="/Neu">Neu </Link></ul>
                <ul><Link to="/Home">Home</Link></ul>
               
         
            </nav>
        </div>
       
        </Ul>
          

               </>
    );
};

export default Navbar;





