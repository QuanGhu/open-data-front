import React from 'react';
import Api from '../api';
// import $ from 'jquery';

export default class form extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            formdetail : [],
            fieldList : [],
            valueList : [],
        }
    }
    componentWillMount()
    {
        this.getFormDetail();
        this.getFieldList();
        this.getValueList();
    }
    getFormDetail()
    {
        Api.getNoAuth('form/no-auth/'+this.props.match.params.id)
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
	            formdetail: jsonData.data,
            });
        })
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }
    getFieldList()
    {
        Api.getNoAuth('field/form/no-auth/'+this.props.match.params.id)
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
	            fieldList: jsonData.data,
            });
        })
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }
    getValueList()
    {
        Api.getNoAuth('values/form/no-auth/'+this.props.match.params.id)
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
	            valueList: jsonData.data,
            });
        })
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }
  render() {
    var valuesArray = []; 

      var fieldarray = this.state.fieldList.map ( (data, index) =>
        <th key={index}>{data.nama}</th>
    
        )
    
        var rowsmap = {}
        
        this.state.valueList.forEach( v => {
            let arr = rowsmap[v.group] || []
            arr.push(v);
            rowsmap[v.group] = arr;
        })

        var rows = Object.keys(rowsmap).map( k => rowsmap[k]);

        valuesArray = rows.filter( v => this.state.fieldList.map( f => f.id).indexOf(v.id_field)).map( (row, i)=> {
                return ( 
                
                <tr key={Date.now()}>
                    <td>{i + 1}</td>
                    {
                        this.state.fieldList.map( (f, i) => {
                            return row.filter(r => r.id_field === f.id )[0];
                        }).map(f => {
                            if(!f) {
                                return (
                                    <td key={Date.now()}>kosong</td>
                                )
                            }
                            return (
                                <td key={f.id}>{f.nama}</td>
                            )
                        })
                    }
                </tr>
                    
                    )
            }
        )

    return (
        <div className="container">
            <header><h1>{this.state.formdetail.nama}</h1></header>
            <div className="row">
                <div className="col-md-12">
                    <div id="page-main">
                        <section id="course-detail">
                            <article className="course-detail">
                                <section id="course-header">
                                    <hr/>
                                    <div className="course-count-down">
                                        <a href="#" className="btn" id="btn-course-join-bottom">Download Data</a>
                                    </div>
                                </section>

                                <section id="course-info">
                                    <header><h2>Informasi Data</h2></header>
                                    <p>
                                        {this.state.formdetail.keterangan}
                                    </p>
                                    
                                </section>

                                <section className="course-schedule">
                                    <header><h2>Data Explorer</h2></header>
                                    <table className="table table-hover course-list-table tablesorter">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                {fieldarray}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {valuesArray}
                                        </tbody>
                                    </table>

                                </section>

                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


