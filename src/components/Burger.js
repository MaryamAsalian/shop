import React, { Component } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
const Div=styled.div`
width:2rem;
height:2rem;
position:fixed;
display:none;
z-index:20;
top:40px;
right:30px;
cursor:pointer;
@media(max-width:768px){
  display:flex;
justify-content:space-around;
flex-direction:column;

}
div{
    background: ${props => props.open ? '#fff' : 'black'};
    border-radius:10px;
    width:2rem;
    transform-origin:1px;
    transition : all 0.3s linear;
    height:0.25rem;
    &:nth-child(1){
        transform:${(props)=>(props.open?'rotate(45deg)' :'rotate(0)')};
    }
    &:nth-child(2){
      transform: ${props =>(props.open ? 'translatex(-100%)' : 'translatex(0)')};
      opacity:${(props)=>(props.open?0:1)}
  }
    &:nth-child(3){
      transform:${(props)=>(props.open?'rotate(-45deg)' :'rotate(0)')};
  }
`

 class Burger extends Component {
    constructor(){
        super();
        this.state = {
            open:false
        };
    }
    clickHandler =() =>{
        this.setState({open:!this.state.open });

    };
  render() {
    return (
        <>
      <Div open={this.state.open}onClick={this.clickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <Navbar open={this.state.open}/>
      </>
    );
  }
}
export default Burger;