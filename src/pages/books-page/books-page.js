import React from 'react';
import BooksPageHeader from '../../components/books-page-header';
import BooksPageList from '../../components/books-page-list'
import './books-page.css'

class BooksPage extends React.Component {

    render() {
        return (
            <div className="books-page-wrapper">
                <BooksPageHeader />
                <BooksPageList />
            </div>
        )
    }

}

export default BooksPage;