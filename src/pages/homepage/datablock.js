import React from 'react';
import Carousel from './carousel';
import $ from 'jquery';
import Api from '../api';

export default class datablock extends React.Component {
    constructor() {
        super()
        this.state = {
            opd: []
        }
    }

    componentWillMount() {
        this.getField();
    }

    getField = () => {
        Api.getNoAuth('opd/no-auth')
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
	            opd: jsonData.data,
            });
            console.log(this.state.opd)
    	})
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }
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
                                            <img src="http://via.placeholder.com/150x150" alt="" className="img-responsive" />
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


