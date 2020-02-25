import React from 'react';
import { Segment, Icon, Grid, Header, Progress, Divider, Button } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from '../../utils';
import { setBook } from '../../actions/settings-actions';


class BookItem extends React.Component {

    render() {
        const { filename, current, count } = this.props.book;
        const color = this.props.color
        const name = filename

        const percent = Math.round(current / count * 100)
        const borderStyle = "1px solid " + color;

        return (
            <div className="book-item">
                <Segment secondary color={color}>
                    <Grid width={16}>
                        <Grid.Row>
                            <Grid.Column width={3} textAlign="center" verticalAlign="middle">
                                <Icon name="book" size="huge" color={color}> </Icon>
                            </Grid.Column>
                            <Grid.Column width={9}>

                                <Grid.Row>
                                    <Header size="small">{name}</Header>

                                    <Divider></Divider>
                                </Grid.Row>
                                <Grid.Row>
                                    <Progress percent={percent} color={color} size='small' progress />
                                </Grid.Row>

                            </Grid.Column>

                            <Grid.Column width={2} verticalAlign="middle" textAlign="center">
                                <Button circular icon='angle double right' size="huge" onClick={() => this.props.onRead(this.props.book)} style={{ border: borderStyle }} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Grid.Row verticalAlign="top">
                                    <Button circular icon='delete' style={{ marginBottom: '10px' }} />
                                </Grid.Row>
                                <Grid.Row verticalAlign="bottom">
                                    <Button circular icon='edit' />
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>

        )
    }
}

class BookItemContainer extends React.Component {

    onRead = (book) => {
        this.props.setBook(book)
        this.props.history.push('/read')
    }

    render() {

        return (
            <BookItem {...this.props} onRead={this.onRead} />
        )
    }
}


const mapStateToProps = ({ settings }) => {
    return {
        settings: settings
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        setBook: (book) => { dispatch(setBook(book)) },
    }

};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(BookItemContainer);

