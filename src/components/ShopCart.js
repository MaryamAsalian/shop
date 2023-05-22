import React, { useContext } from "react";
import { cartContext } from "../context/CartcontextProvider";
import Cart from "../shared/Cart";
import { Link } from "react-router-dom";
import styles from "./ShopCart.module.css";
import check from './svgs/check.png';

const ShopCart = () => {

  const { state, dispatch } = useContext(cartContext);

  return (
      <div className={styles.container}>
          <div className={styles.cartContainer}>
              {state.selectItems.map(item => <Cart key={item.id} data={item} />)}
          </div>

          {
              state.itemCounter > 0 && <div className={styles.payments}>
                      <p><span>Artikel insgesamt:</span> {state.itemCounter}</p>
                      <p><span>Gesamtzahlungen:</span> {state.total} €</p>
                      <div className={styles.buttonContainer}>
                          <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Löschen</button>
                          <button className={styles.checkout} onClick={() => dispatch({type: "CHECKOUT"})}>Kasse</button>
                      </div>
                  </div>
          }

          {
              state.itemCounter === 0 && !state.checkout && <div className={styles.complete}>
                      <h3>Möchten sie kaufen?</h3>
                      <Link to="/Marken">Gehen Sie einkaufen</Link>
                  </div>
          }

          {
              state.checkout && <div className={styles.complete}>
                <img src={check} alt="checked" />
                      <h3>Erfolgreich ausgecheckt</h3>
                      <Link to="/Marken">Mehr kaufen</Link>
                  </div>
          }
          
      </div>
  );
};

export default ShopCart;
