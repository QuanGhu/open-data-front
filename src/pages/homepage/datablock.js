import React from 'react';
import Carousel from './carousel';
// import $ from 'jquery';

export default class datablock extends React.Component {
  render() {
    return (
        <div className="block">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <section className="news-small" id="news-small">
                            <header>
                                <h2>Data Set</h2>
                            </header>
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-md-2">
                                        <a href="dataset-detail.html">
                                            <img src="http://via.placeholder.com/150x150" alt="" class="img-responsive" />
                                            <h5 className="text-center">Data</h5>
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


