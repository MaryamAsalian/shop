import React, { Component } from 'react';
import styles from './Card.module.css';
import unlike from './svgs/unlike.svg';


class Cardd extends Component {
  constructor(){
    super();
    this.state={
        src :false
    }
    
  }
  
   likeHandeler =()=>{
    
    this.setState({src:true})
    
   }
   
    
  render() {
     
    const {image , cost , name} = this.props;
   
    return (
      
      <div className={styles.container}>
        <img src={image} alt="prfum" />
        <h3>{name}</h3>
        <p>{cost} </p>
        <div className={styles.counter}>

          <span>Marken</span>
          <img className={ !this.state.src ? styles.deactive :""}  src={unlike} alt="like" onClick={this.likeHandeler}/>
          
        </div>
      </div>
    );
  }
}
export default Cardd ;

