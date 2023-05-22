import React, { useContext } from 'react';
import styles from'./Products.module.css';
import { shorten , isIncart,quantityCounter } from '../helper/functions';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartcontextProvider';
import trash from '../components/svgs/trash.png';

const Products = ({productData}) => {
   const{state,dispatch}= useContext(cartContext)
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="products"/>
            <h3> {shorten(productData.title)}</h3>
            <p>{productData.price}€</p>
            <div className={styles.linkContainer}>
            <Link to={`/Marken/${productData.id}`}>Details</Link>
           <div className={styles.buttonContainer}>
            {
            
            isIncart(state,productData.id) ?
            <button className={styles.smallButton} onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button> :
            <button  onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>kaufen</button> 
            }
                { quantityCounter(state,productData.id) >0 && <span className={styles.counter}>{ quantityCounter(state,productData.id)}</span> }
               { quantityCounter(state,productData.id) >1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>}
               { quantityCounter(state,productData.id) ===1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}><img src={trash} alt="trash" style={{width:"14px" , height:"16px"}}/></button>}
               
           </div> 
           </div>
        </div>
    );
};

export default Products;




