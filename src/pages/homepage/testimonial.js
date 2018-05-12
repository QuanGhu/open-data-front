import React from 'react';
import Api from '../api';

export default class testimonial extends React.Component {
    constructor() {
        super()
        this.state = {
            testilist: []
        }
    }

    componentWillMount() {
        this.getField();
    }

    getField = () => {
        Api.getNoAuth('informasi-situs/')
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
	            testilist: jsonData.data,
            });
    	})
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }
  render() {
    var basePhotoUrl = 'http://185.201.8.164:3001/'
    var testiarray = this.state.testilist.map( (data, index) => 
        <blockquote key={index}>
            <figure className="author-picture">
                <img src={basePhotoUrl+data.photo} alt="" />
            </figure>
            <article className="paragraph-wrapper">
                <div className="inner">
                    <header>{data.isi}</header>
                    <footer>Sambutan Walikota</footer>
                </div>
            </article>
        </blockquote>
    )
    return (
        <section id="testimonials">
            <div className="block">
                <div className="container">
                    <div className="author-carousel">
                        <div className="author">
                            {testiarray}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}


