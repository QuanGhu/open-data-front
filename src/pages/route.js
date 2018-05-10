import React from 'react';
import { Route, Switch } from 'react-router-dom';

// admin layout
import Header from '../layout/header';
import Footer from '../layout/footer';

import Homepage from './homepage/index';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
)

const Layout = props => (
    <div id="page-content">
        <Header />
        {props.children}
        <Footer />
        
    </div>
)

const route = () => (
    <Switch>
        <AppRoute exact path="/" layout={Layout} component={Homepage} />
    </Switch>
);

export default route;

