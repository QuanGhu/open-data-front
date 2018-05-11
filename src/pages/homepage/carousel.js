import React from 'react';
import Api from '../api';
import Slider from "react-slick";

export default class carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            newsList : []
        }
    }
    componentWillMount()
    {
        Api.getNoAuth('berita')
		.then((response) => {
        	if(response.ok === true) {
        		return response.json()
        	}
        })
		.then((jsonData) => {
        	this.setState({
	            newsList: jsonData.data,
            });
    	})
    	.catch((error) => {
    		console.log(error)
    		// ajax.notifError();
    	})
    }
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      var baseurl = 'http://tanjungpinangkota.go.id/images/berita/big/'
      var baseurlberita = 'http://tanjungpinangkota.go.id/berita/'
      var carousel = this.state.newsList.map( (data, index) =>
            <div key={index} ><a href={baseurlberita+data.id_berita} target="__blank"><img src={baseurl+data.gambar} alt=""/></a></div>
    )
    return (
        <div id="homepage-carousel">
            <div className="container">
                <div className="homepage-carousel-wrapper">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                        <Slider {...settings}>
                            {carousel}
                        </Slider>
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


