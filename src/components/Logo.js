import React, { Component } from "react";
import styles from "./Logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faLock,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
class Logo extends Component {
  render() {
    return (
      
      <div className={styles.container}>
        <div>
        <FontAwesomeIcon icon={faHome} />
        <p>Gratis Lieferung in die Filiale </p>
        </div>
        <div>
        <FontAwesomeIcon icon={faGift} />
        <p>Kostenloser Geschenkservice </p>
        </div>
        <div>
        <FontAwesomeIcon icon={faLock} />
        <p>Sicheres einkaufen und Bezahlen </p>
        </div>
        <div>
        <FontAwesomeIcon icon={faStar} />
        <p>2 Gratisproben </p>
        </div>
        <div>
        <FontAwesomeIcon icon={faTruck} />
        <p>Versandkostenfreie Lieferung ab 19,95 € *</p>
        </div>
      </div>
    );
  }
}
export default Logo;
