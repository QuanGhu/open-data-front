import React from 'react';
import Carousel from './carousel';
import Datablock from './datablock';
import Testimonial from './testimonial';
import $ from 'jquery';

export default class index extends React.Component {
  constructor() {
      super()
      $('body').addClass('page-homepage-carousel');
  }
  render() {
    return (
      <div>  
          <Carousel />
          <Datablock />
          <Testimonial />
      </div>
    );
  }
}


