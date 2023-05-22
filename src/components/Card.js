import React, { Component } from 'react';
import styles from './Card.module.css';
import up from './svgs/up.svg';
import down from './svgs/down.svg';


class Card extends Component {
  constructor(){
    super();
    this.state={
      counter : 0 ,
    }
  }
  
   downHandeler =()=>{
    if(this.state.counter >=1 ){
    this.setState(prevState=>({
      counter:prevState.counter-1,
    }))}
   }
   upHandeler =()=>{
    if(this.state.counter >=0 ){
    this.setState(prevState=>({
      counter:prevState.counter+1,
   
    })) }
   }
   
    
  render() {
     
    const {image , cost , name} = this.props;
    const {counter} = this.state ;
    return (
      
      <div className={styles.container}>
        <img src={image} alt="prfum" />
        <h3>{name}</h3>
        <p>{cost} {counter ? `${counter}=${Math.ceil(counter*Number(cost.split(" ")[1]))}$`: ""}</p>
        <div className={styles.counter}>
          <img src={up} alt="up" onClick={this.upHandeler}/>
          <span>{counter}</span>
          <img className={! this.state.counter ? styles.deactive :""} src={down} alt="down" onClick={this.downHandeler}/>


        
        </div>
      </div>
    );
  }
}
export default Card ;