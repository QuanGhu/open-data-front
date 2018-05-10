import React from 'react';
// import $ from 'jquery';

export default class testimonial extends React.Component {
  render() {
    return (
        <section id="testimonials">
            <div className="block">
                <div className="container">
                    <div className="author-carousel">
                        <div className="author">
                            <blockquote>
                                <figure className="author-picture"><img src="assets/img/student-testimonial.jpg" alt="" /></figure>
                                <article className="paragraph-wrapper">
                                    <div className="inner">
                                        <header>Morbi nec nisi ante. Quisque lacus ligula, iaculis in elit et, interdum semper quam. Fusce in interdum tortor.
                                            Ut sollicitudin lectus dolor eget imperdiet libero pulvinar sit amet.</header>
                                        <footer>Sambutan Walikota</footer>
                                    </div>
                                </article>
                            </blockquote>
                        </div>
                        <div className="author">
                            <blockquote>
                                <figure className="author-picture"><img src="assets/img/student-testimonial.jpg" alt=""/></figure>
                                <article className="paragraph-wrapper">
                                    <div className="inner">
                                        <header>Morbi nec nisi ante. Quisque lacus ligula, iaculis in elit et, interdum semper quam. Fusce in interdum tortor.
                                            Ut sollicitudin lectus dolor eget imperdiet libero pulvinar sit amet.</header>
                                        <footer>Sambutan Walikota</footer>
                                    </div>
                                </article>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}


