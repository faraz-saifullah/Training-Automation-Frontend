import App from "./App";
import React from 'react';
import LoginForm from './Components/loginForm';
import { Route, IndexRoute } from 'react-router';
export default (
    <Route path='/' component={App}>
        <IndexRoute component="Welcome"/>
        <Route path="login" component={LoginForm}/>
    </Route>
)