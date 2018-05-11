import React from 'react';
import Api from '../api';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class detail extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            datasetDetail : [],
            formlist : []
        }
        $('body').removeClass();
        $('body').addClass('page-sub-page');
    }
    componentWillMount()
    {
        this.getDatasetDetail()
        this.getFormList();
    }
    getDatasetDetail()
    {
        Api.getNoAuth('dataset/no-auth/'+this.props.match.params.id)
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
	            datasetDetail: jsonData.data,
            });
        })
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }

    getFormList()
    {
        Api.getNoAuth('form/dataset/no-auth/'+this.props.match.params.id)
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
                formlist: jsonData.data
            });
        })
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }
  render() {
      var formarray = this.state.formlist.map((data, index) =>
        <tr key={index}>
            <th className="course-title"><Link to={`/dataset/form/detail/${data.id}`}>{data.nama}</Link></th>
            <th>{data.keterangan}</th>
        </tr>
    )
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-10">
                    <div id="page-main">
                        <section id="right-sidebar">
                            <header><h2>{this.state.datasetDetail.nama}</h2></header>
                            <p>
                                {this.state.datasetDetail.keterangan}
                            </p>
                            
                            <div className="table-responsive">
                                <table className="table table-hover course-list-table tablesorter">
                                    <thead>
                                        <tr>
                                            <th>Nama Data</th>
                                            <th>Keterangan Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {formarray}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


