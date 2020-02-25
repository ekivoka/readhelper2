import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Frame from '../frame'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BooksPage from '../../pages/books-page';
import ReadPage from '../../pages/read-page';
import HomePage from '../../pages/home-page';
import VocabPage from '../../pages/vocab-page';





const App = () => {


    return (
        <div>
            <ToastContainer />
            <Frame>
                <Switch>
                    <Route exact path="/" component={null} />
                    <Route exact path="/books" component={BooksPage} />
                    <Route exact path="/read" component={ReadPage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/words" component={VocabPage} />



                </Switch>
            </Frame>
        </div>
    )
};

export default App;