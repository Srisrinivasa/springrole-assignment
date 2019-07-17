import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from 'features/Home';
import {DetailsPage} from 'features/DetailsPage';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:id" component={DetailsPage} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}