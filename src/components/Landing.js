import React, { Component } from 'react';
import Banner from './Banner';
import Cards from './Cards';
import Text from './Text';




class Landing extends Component {
  render() {
    return (
      <>
     <div className="App">
     
     <Banner/>
     <Cards/>
     <Text/>
    </div>
    
    </>
    );
  }
}
export default Landing ;