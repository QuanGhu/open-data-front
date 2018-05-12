import React from 'react';

export default class footer extends React.Component {
    render() {
        return (
            <footer id="page-footer">
                <section id="footer-bottom">
                    <div className="container">
                        <div className="footer-inner">
                            <div className="copyright">© Data Set, All rights reserved</div>
                            <div className="pull-right"><a href="http://185.201.8.164:3000/" target="__blank">Admin</a></div>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
};