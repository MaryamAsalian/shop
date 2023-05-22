import React, { Component } from 'react';
import styles from './Cards.module.css';
import Cardd from './Cardd';
import one from './images/one.jpg';
import two from './images/two.jpg';
import three from './images/three.jpg';
import four from './images/four.jpg';
import five from './images/five.jpg';

class Cards extends Component {
  constructor(){
    super();
    this.state = {
      cardData : [
        {id:1,image:one , name:"LaPerla Signature " , cost:" 54.95 €"},
        {id:2,image:two , name:"Otto Kern", cost:" 15.95 €"},
        {id:3,image:three , name:"Sensai Mascara " , cost:" 37.95 €"},
        {id:4,image:four , name:"Lancôme Creme " , cost:" 77.95 €"},
        {id:5,image:five , name:"Payot Set ", cost:" 119.95 €"}

      ]
    }
  }
  render(){
   
    return (
    <div className={styles.container}>
    {
     
      this.state.cardData.map(card=><Cardd key={card.id} image={card.image} name={card.name} cost={card.cost} />)
    }
    </div>
    
    );
  }
}
export default Cards;