import React from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react'
import AddBookModal from '../../components/add-book-modal'
import "./books-page-header.css"

class BooksPageHeader extends React.Component {

    state = {
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <Segment>
                    <div className="books-page-header-wrapper">
                        <div>
                            <AddBookModal />

                        </div>
                        <div style={{ display: 'flex', alignItems: "center", marginLeft: '10px' }}>
                            <Header>Книги</Header>
                        </div>
                    </div>

                </Segment>
            </div>
        )
    }
}



export default BooksPageHeader;