import React from 'react';
import Carousel from './carousel';
import $ from 'jquery';
import Api from '../api';
import { Link } from 'react-router-dom';
import folderLogo from '../../opendatalogo.jpeg';

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

    handleSubmit(e)
    {
        e.preventDefault();
        var formData = {
            search: $('#full-text').val(),
        }
        var data = JSON.stringify(formData);
        Api.postNoAuth('datasets/search', data)
        .then((response) => {
            if(response.status === 200 || response.status === 201 ) {
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
        })
    }
  render() {

    var datasetList = this.state.dataset.map( (data, index) => 
        <div className="col-md-2 custom-height" key={index}>
            <Link to={`/dataset/detail/${data.id}`}>
                <img src={folderLogo} alt="" className="img-responsive" />
                <h5 className="text-center">{data.nama}</h5>
            </Link>
        </div>
    )
    return (
        <div className="block">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <section id="event-search">
                            <div className="search-box">
                                <header><span className="fa fa-search"></span><h2>Cari Data Disini</h2></header>
                                <form id="event-search-form" role="form" className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
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
                        <section className="news-small" id="news-small">
                            <header>
                                <h2>List Data Terbaru</h2>
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


