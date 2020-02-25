import React from 'react';
import './books-page-list.css'
import { getRandomColor } from '../../utils/colors'
import BookItem from '../book-item'
import RHLoader from '../rh-loader'

import withApiService from '../../components/hoc/with-api-service'
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { fetchBooks } from '../../actions/books-actions';

class BooksPageList extends React.Component {

    render() {
        const { books } = this.props;

        const BooksArray = books.map((book) => {

            return (

                < BookItem color={getRandomColor()} book={book} />
            )
        })

        return (
            <div className="books-page-list-wrapper" >
                {
                    BooksArray
                }
            </div>
        )
    }
}

class BooksPageListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {

        if (this.props.loading) {
            return <RHLoader />
        }
        return <BooksPageList books={this.props.books} />
    }
}


const mapStateToProps = (state) => {
    return {
        books: state.books.books,
        loading: state.books.loading,
        error: state.books.error
    };
};


const mapDispatchToProps = (dispatch, { apiService }) => {

    return {
        fetchBooks: fetchBooks(apiService, dispatch),
    }

};

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps))(BooksPageListContainer);
