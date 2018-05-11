import React from 'react';
// import $ from 'jquery';

export default class form extends React.Component {
    constructor()
    {
        super();
    }
  render() {
    return (
        <div className="container">
            <header><h1>Judul Data</h1></header>
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna fringilla, volutpat elit non,
                                        tristique lectus. Nam blandit odio nisl, ac malesuada lacus fermentum sit amet. Vestibulum vitae
                                        aliquet felis, ornare feugiat elit. Nulla varius condimentum elit, sed pulvinar leo sollicitudin vel.
                                    </p>
                                    <p>
                                        Maecenas sodales, nisl eget dignissim molestie, ligula est consectetur metus, et mollis justo urna
                                        sit amet nulla. Etiam lectus arcu, pellentesque eu tellus tempor, tristique ultrices leo. Nullam at
                                        felis mauris. Aenean in neque eu ligula tempor ornare. Mauris tristique in elit a blandit. Nam laoreet
                                        vulputate nisi eu accumsan. Sed faucibus arcu nec est facilisis dignissim. Fusce risus leo, euismod ut
                                        cursus vitae, imperdiet id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada
                                        fames ac turpis egestas. Fusce mollis mi vulputate leo vestibulum, quis scelerisque libero condimentum.
                                        Praesent rutrum consequat lacus quis suscipit. Proin dapibus mi non semper lobortis.
                                    </p>
                                </section>

                                <section className="course-schedule">
                                    <header><h2>Data Explorer</h2></header>
                                    <p className="text-center">Excel or Json Data will be here</p>
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


