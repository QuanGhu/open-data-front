import React from 'react';
import Carousel from './carousel';
import $ from 'jquery';
import Api from '../api';

export default class datablock extends React.Component {
    constructor() {
        super()
        this.state = {
            dataset: []
        }
    }

    componentWillMount() {
        this.getField();
    }

    getField = () => {
        Api.getNoAuth('datasets/home-page')
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
	            dataset: jsonData.data,
            });
    	})
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }
  render() {

    var datasetList = this.state.dataset.map( (data, index) => 
        <div className="col-md-2">
            <a href="dataset-detail.html">
                <img src="http://via.placeholder.com/150x150" alt="" className="img-responsive" />
                <h5 className="text-center">{data.nama}</h5>
            </a>
        </div>
    )
    return (
        <div className="block">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <section className="news-small" id="news-small">
                            <header>
                                <h2>Data Set Terbaru</h2>
                            </header>
                        </section>
                        <div className="section-content">
                            <div className="row">
                            {datasetList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


