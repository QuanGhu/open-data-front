import React from 'react';
import Api from '../api';
// import $ from 'jquery';

export default class index extends React.Component {
  constructor() {
      super();
      this.state = {
        opd :[],
        currentPage: 1,
        todosPerPage: 16
      };
  }
  handleClick(e) {
      this.setState({
          currentPage: Number(e.target.id)
      })
  }
  componentWillMount()
  {
      this.getOpd();
  }
  getOpd()
  {
    Api.getNoAuth('opd/no-auth')
    .then((response) => {
        if(response.ok === true) {
            return response.json()
        }
        if(response.status === 401) {
            localStorage.removeItem('token')
            window.location.reload();
        }
        
    })
    .then((jsonData) => {
        this.setState({
            opd: jsonData.data,
        });
    })
    .catch((error) => {
        console.log(error)
        // ajax.notifError();
    })
  }
  render() {
    const { todos, currentPage, todosPerPage, opd } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = opd.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((opd, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
                <article className="course-thumbnail">
                    <figure className="image">
                        <div className="image-wrapper"><a href="course-detail-v1.html"><img src="assets/img/course-01.jpg"/></a></div>
                    </figure>
                    <div className="description">
                        <a href="data-listing.html"><h3>{opd.akronim_opd}</h3></a>
                    </div>
                </article>
            </div>
        )
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(opd.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li key={number} id={number} onClick={this.handleClick.bind(this)} >
                {number}
            </li>

        );
      });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="page-main">
                        <section className="course-listing" id="courses">
                            <header><h1>Nama Organisasi</h1></header>
                            <div className="row">
                                {renderTodos}
                                {/* <div className="col-md-4 col-sm-4">
                                    <article className="course-thumbnail">
                                        <figure className="image">
                                            <div className="image-wrapper"><a href="course-detail-v1.html"><img src="assets/img/course-01.jpg"/></a></div>
                                        </figure>
                                        <div className="description">
                                            <a href="data-listing.html"><h3>Badan Kepegawaian Daerah</h3></a>
                                        </div>
                                    </article>
                                </div> */}
                                
                            </div>
                        </section>
                        <div className="center">
                            <ul className="pagination-custom">
                                {/* <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li> */}
                                {renderPageNumbers}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


