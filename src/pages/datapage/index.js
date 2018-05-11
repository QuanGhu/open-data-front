import React from 'react';
// import $ from 'jquery';

export default class index extends React.Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="page-main">
                        <section className="events" id="events">
                            <header><h1>Judul Dataset / Organisasi</h1></header>
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
                                <article className="event">
                                    <aside>
                                        <header>
                                            <a href="dataset-detail.html">Data Kependudukan</a>
                                        </header>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna fringilla
                                                volutpat elit non, tristique lectus. Nam blandit odio nisl, ac malesuada lacus fermentum sit amet.
                                                Vestibulum vitae aliquet felis, ornare feugiat elit. Nulla varius condimentum elit,
                                                sed pulvinar leo sollicitudin vel.
                                            </p>
                                        </div>
                                    </aside>
                                </article>
                                <article className="event">
                                    <aside>
                                        <header>
                                            <a href="dataset-detail.html">Data Kependudukan</a>
                                        </header>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna fringilla
                                                volutpat elit non, tristique lectus. Nam blandit odio nisl, ac malesuada lacus fermentum sit amet.
                                                Vestibulum vitae aliquet felis, ornare feugiat elit. Nulla varius condimentum elit,
                                                sed pulvinar leo sollicitudin vel.
                                            </p>
                                        </div>
                                    </aside>
                                </article>
                                <article className="event">
                                    <aside>
                                        <header>
                                            <a href="dataset-detail.html">Data Kependudukan</a>
                                        </header>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna fringilla
                                                volutpat elit non, tristique lectus. Nam blandit odio nisl, ac malesuada lacus fermentum sit amet.
                                                Vestibulum vitae aliquet felis, ornare feugiat elit. Nulla varius condimentum elit,
                                                sed pulvinar leo sollicitudin vel.
                                            </p>
                                        </div>
                                    </aside>
                                </article>
                                <article className="event">
                                    <aside>
                                        <header>
                                            <a href="dataset-detail.html">Data Kependudukan</a>
                                        </header>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna fringilla
                                                volutpat elit non, tristique lectus. Nam blandit odio nisl, ac malesuada lacus fermentum sit amet.
                                                Vestibulum vitae aliquet felis, ornare feugiat elit. Nulla varius condimentum elit,
                                                sed pulvinar leo sollicitudin vel.
                                            </p>
                                        </div>
                                    </aside>
                                </article>
                                <article className="event">
                                    <aside>
                                        <header>
                                            <a href="dataset-detail.html">Data Kependudukan</a>
                                        </header>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna fringilla
                                                volutpat elit non, tristique lectus. Nam blandit odio nisl, ac malesuada lacus fermentum sit amet.
                                                Vestibulum vitae aliquet felis, ornare feugiat elit. Nulla varius condimentum elit,
                                                sed pulvinar leo sollicitudin vel.
                                            </p>
                                        </div>
                                    </aside>
                                </article>
                                <article className="event">
                                    <aside>
                                        <header>
                                            <a href="dataset-detail.html">Data Kependudukan</a>
                                        </header>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna fringilla
                                                volutpat elit non, tristique lectus. Nam blandit odio nisl, ac malesuada lacus fermentum sit amet.
                                                Vestibulum vitae aliquet felis, ornare feugiat elit. Nulla varius condimentum elit,
                                                sed pulvinar leo sollicitudin vel.
                                            </p>
                                        </div>
                                    </aside>
                                </article>
                                
                            </div>
                        </section>
                        <div className="center">
                            <ul className="pagination">
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


