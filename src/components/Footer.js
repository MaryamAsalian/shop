import React from 'react';
import styles from './Footer.module.css';
import insta from './images/insta.png';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';
import telegram from './images/telegram.png';
import pay from './images/pay.png';
import paypal from './images/paypal.png';
import visa from './svgs/visa.svg';
import master from './images/master.png';

const Footer = () => {
    return (
        <div className={styles.container}>
            
            <ul><a className={styles.listcontainer}>Kundenservice</a>
                <li><a>AGB</a></li>
                <li><a>hilfe & FAG</a></li>
                <li><a>Kontakt</a></li>
                <li><a>Newsletter</a></li>
            </ul>
            
            <ul><a className={styles.listcontainer}>Uber Uns</a>
                <li><a>Uber uns</a></li>
                <li><a>Cookie-Einstellung</a></li>
                <li><a>Job</a></li>
                <li><a>Impressum</a></li>
            </ul>
            
            <ul><a className={styles.listcontainer}>Folge uns</a>
            <div className={styles.footer}>
               <li><img src ={insta} alt="falow"/></li> 
                <li><img src ={telegram} alt="falow"/></li>
                <li><img src ={twitter} alt="falow"/></li>
                <li><img src ={youtube} alt="falow"/></li>
                </div>
            </ul>
            
            <ul><a className={styles.listcontainer}>Zalungsmoglichkeiten</a>
            <div className={styles.footer}>
                <li><img src ={master} alt="zahl"/></li>
                <li><img src ={pay} alt="zahl"/></li>
                <li><img src ={paypal} alt="zahl"/></li>
                <li><img src ={visa} alt="zahl"/></li>
                </div>
            </ul>
        </div>
    );
};

export default Footer;