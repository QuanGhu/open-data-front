import React from 'react';
import { render } from 'react-dom';
import Api from '../api';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import logoopd from '../../logo-tanjungpinang.png';

export default class index extends React.Component {
  constructor() {
        $('body').removeClass();
        $('body').addClass('page-sub-page page-course-listing-images');
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
  componentDidMount() {
        var columnDefs = [
            {
                targets: 0,
                createdCell: function (td, cellData, rowData, row, cell) {
                    $(td).html(row+1).css('text-align', 'center');
                }
            },
            {
                targets:2,
                data:"id",
                createdCell: (td, cellData, rowData, row, col, data) =>
                  render(
                    <a style={{ cursor: 'pointer' }}
                      onClick={() => this.props.history.push('/organisasi/dataset/opd/'+cellData.id_opd) }>
                      Lihat Data
                    </a>, td),
            }
        ];
        var component = this;
        var columns = [
                { "data": null},
                { "data": "nama_opd"},
                { "data": null},
            ];
        Api.loadDataTable(component, columns, columnDefs, 'opd/no-auth');
    }
  render() {
    // const { todos, currentPage, todosPerPage, opd } = this.state;
    // const indexOfLastTodo = currentPage * todosPerPage;
    // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    // const currentTodos = opd.slice(indexOfFirstTodo, indexOfLastTodo);

    // const renderTodos = currentTodos.map((opd, index) => {
    //     return (
    //         // <div className="col-md-3 col-sm-6" key={index}>
    //         //     <article className="course-thumbnail">
    //         //         <figure className="image">
    //         //             <div className="image-wrapper"><Link to={`/organisasi/dataset/opd/${opd.id_opd}`}><img src={logoopd}/></Link></div>
    //         //         </figure>
    //         //         <div className="description">
    //         //             <Link to={`/organisasi/dataset/opd/${opd.id_opd}`}><h3 className="text-center">{opd.akronim_opd}</h3></Link>
    //         //         </div>
    //         //     </article>
    //         // </div>
            
    //     )
    //   });
  
    //   // Logic for displaying page numbers
    //   const pageNumbers = [];
    //   for (let i = 1; i <= Math.ceil(opd.length / todosPerPage); i++) {
    //     pageNumbers.push(i);
    //   }
  
    //   const renderPageNumbers = pageNumbers.map(number => {
    //     return (
    //         <li key={number} id={number} onClick={this.handleClick.bind(this)} >
    //             {number}
    //         </li>

    //     );
    //   });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="page-main">
                        <section className="course-listing" id="courses">
                            <header><h1>Nama Organisasi</h1></header>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table id="table-data" className="table table-bordered table-hover text-center">
                                            <thead>
                                                <tr>
                                                    <td>No</td>
                                                    <td>Nama OPD</td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


