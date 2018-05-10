import React from 'react';
// import $ from 'jquery';

export default class carousel extends React.Component {
  render() {
    return (
        <div id="homepage-carousel">
            <div className="container">
                <div className="homepage-carousel-wrapper">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="image-carousel">
                                <div className="image-carousel-slide"><img src="assets/img/slide-1.jpg" alt=""/></div>
                                <div className="image-carousel-slide"><img src="assets/img/slide-2.jpg" alt=""/></div>
                                <div className="image-carousel-slide"><img src="assets/img/slide-3.jpg" alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="background"></div>
                </div>
                <div className="slider-inner"></div>
            </div>
        </div>
    );
  }
}


