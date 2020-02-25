import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import App from "./components/app";


import { FakeApiService, ReadhelperApiService } from './services';
import { ApiServiceProvider } from './components/api-service-context';

import store from './store';
import { Provider } from 'react-redux';
import LoginPage from './pages/login-page';
import RegistrationPage from './pages/registration-page';


const apiService = new ReadhelperApiService();
//const apiService = new FakeApiService();



ReactDOM.render(
    <Provider store={store}>
        <ApiServiceProvider value={apiService}>
            <Router>
                <div className="route-wrapper">
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/registration" component={RegistrationPage} />

                        <Route path="/" component={App} />
                    </Switch>
                </div>
            </Router>
        </ApiServiceProvider>
    </Provider>
    , document.getElementById('root')
);