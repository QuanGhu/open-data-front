import React from 'react';
import Carousel from './carousel';
import Datablock from './datablock';
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
          <br />
          <br />
          <div className="container">
            <section id="event-search">
                <div className="search-box">
                    <header><span className="fa fa-search"></span><h2>Cari Data Disini</h2></header>
                    <form id="event-search-form" role="form" className="form-inline">
                        <div className="from-row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input name="full-text" id="full-text" placeholder="Enter Keyword" type="text" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn pull-right">Cari</button>
                    </form>
                </div>
            </section>
          </div>
          <Datablock />
      </div>
    );
  }
}


