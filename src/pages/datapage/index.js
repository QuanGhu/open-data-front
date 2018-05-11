import React from 'react';
import Api from '../api';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class index extends React.Component {
    constructor() {
        super();
        this.state = {
          dataset :[],
          currentPage: 1,
          todosPerPage: 16
        };
        $('body').removeClass();
        $('body').addClass('page-sub-page page-events-listing');
    }
    handleClick(e) {
        this.setState({
            currentPage: Number(e.target.id)
        })
    }
    componentWillMount()
    {
        this.getDataset();
    }
    getDataset()
    {
      Api.getNoAuth('datasets/no-auth')
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
    const { todos, currentPage, todosPerPage, dataset } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = dataset.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((dataset, index) => {
        return (
            <article className="event" key={index}>
                <aside>
                    <header>
                        <Link to={`/dataset/detail/${dataset.id}`}>{dataset.nama}</Link>
                    </header>
                    <div className="description">
                        <p>{dataset.keterangan}
                        </p>
                    </div>
                </aside>
            </article>
        )
      });
  
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(dataset.length / todosPerPage); i++) {
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
                        <section className="events" id="events">
                            <header><h1>List Data</h1></header>
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
                            <div className="section-content">
                                {renderTodos}
                            </div>
                        </section>
                        <div className="center">
                            <ul className="pagination-custom">
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


