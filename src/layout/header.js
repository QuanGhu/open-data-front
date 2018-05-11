import React from 'react';
import { NavLink } from 'react-router-dom';

export default class header extends React.Component {
    render() {
        return (
            <div className="navigation-wrapper">
                <div className="primary-navigation-wrapper">
                    <header className="navbar" id="top" role="banner">
                        <div className="container">
                            <div className="navbar-header">
                                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="navbar-brand nav" id="brand">
                                    <a href="index.html">Logo Disini</a>
                                </div>
                            </div>
                            <nav className="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <NavLink to="/" activeClassName="active">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/data/listing" activeClassName="active">
                                            Data
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/organisasi/listing" activeClassName="active">
                                            Organisasi
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
                <div className="background">
                    <img src="assets/img/background-city.png"  alt="background"/>
                </div>
            </div>
        );
    }
};