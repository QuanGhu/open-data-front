import React from 'react';
import { Route, Switch } from 'react-router-dom';

// admin layout
import Header from '../layout/header';
import Footer from '../layout/footer';

import Homepage from './homepage/index';
import Datapage from './datapage/index';
import Organisationpage from './organisationpage/index';
import Datalistfromopd from './organisationpage/datalist';
import Datadetailpage from './datapage/detail';
import Formdetailpage from './datapage/form';

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
        <AppRoute exact path="/dataset/detail/:id" layout={Layout} component={Datadetailpage} />
        <AppRoute exact path="/dataset/form/detail/:id" layout={Layout} component={Formdetailpage} />
        <AppRoute exact path="/organisasi/listing" layout={Layout} component={Organisationpage} />
        <AppRoute exact path="/organisasi/dataset/opd/:id" layout={Layout} component={Datalistfromopd} />
    </Switch>
);

export default route;

