import React from 'react';
import Carousel from './carousel';
import Datablock from './datablock';
// import $ from 'jquery';

export default class index extends React.Component {
  render() {
    return (
      <div>  
          <Carousel />
          <Datablock />
      </div>
    );
  }
}


