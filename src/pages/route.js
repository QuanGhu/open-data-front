import React from 'react';
import { Route, Switch } from 'react-router-dom';

// admin layout
import Header from '../layout/header';
import Footer from '../layout/footer';

import Homepage from './homepage/index';
import Datapage from './datapage/index';
import Organisationpage from './organisationpage/index';

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
        <AppRoute exact strict path="/" layout={Layout} component={Homepage} />
        <AppRoute exact path="/data/listing" layout={Layout} component={Datapage} />
        <AppRoute exact path="/organisasi/listing" layout={Layout} component={Organisationpage} />
    </Switch>
);

export default route;

