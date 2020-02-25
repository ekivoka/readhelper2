import React from 'react';
import './read-page.css'
import { incPage, decPage, setPage, setLevel } from '../../actions/settings-actions';
import ReadPageHeader from '../../components/read-page-header'
import { Segment, Header, Sidebar, Menu, Icon, Rating, Divider, Label, Checkbox } from 'semantic-ui-react'


import withApiService from '../../components/hoc/with-api-service'
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { fetchWords } from '../../actions/words-action'
import RHLoader from '../../components/rh-loader';
import { getLevel } from '../../utils/level'


class ReadPage extends React.Component {

    state = {
        visible: false
    }

    setVisible = (visible) => {
        this.setState({
            visible: visible
        })
    }

    render() {
        const { bookName, level } = this.props.settings;

        const words = this.props.words.words.map((item) => {
            return (
                <Word word={item} level={this.props.settings.level} />

            )
        })


        return (
            <div className="read-page-wrapper">


                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        direction='right'
                        icon='labeled'
                        onHide={() => { this.setVisible(false) }}
                        vertical
                        visible={this.state.visible}
                        width='thin'
                    >
                        <Divider></Divider>
                        <Header>
                            Уровень
                        </Header>
                        <Rating icon='star' defaultRating={level} maxRating={10} onRate={(event, data) => this.props.setLevel(data.rating)} />

                        <Divider></Divider>

                        <Header>
                            Тема
                            <br></br>

                            <Segment>
                                <Checkbox toggle />
                            </Segment>
                        </Header>



                    </Sidebar>

                    <Sidebar.Pusher className="read-page-pusher">

                        <ReadPageHeader
                            title={bookName}
                            setVisible={this.setVisible}
                            settings={this.props.settings}
                            setPage={this.props.setPage}
                        />

                        <Segment className="read-page-content" size="big">
                            <p className="words">{words}</p>
                        </Segment>

                    </Sidebar.Pusher>
                </Sidebar.Pushable>

            </div>
        )
    }

}
class ReadPageContainer extends React.Component {

    componentDidMount() {
        const { lastBookId, lastPage, level } = this.props.settings;
        this.props.fetchWords(lastBookId, lastPage, level)
    }

    componentDidUpdate(prevProps) {
        if (this.props.settings.lastPage !== prevProps.settings.lastPage) {
            const { lastBookId, lastPage } = this.props.settings;
            this.props.fetchWords(lastBookId, lastPage)
        }
    }

    render() {
        const { settings, words } = this.props

        if (settings.lastBookId === null) {
            return (
                <p>У вас пока нет книг</p>
            )
        }

        if (words.loading) {
            return <RHLoader />
        }

        return (
            <ReadPage settings={settings} words={words} setPage={this.props.setPage} setLevel={this.props.setLevel} />
        )
    }

}

class Word extends React.Component {

    state = {
        show: false
    }

    setShow = () => {
        this.setState((state) => ({ show: !state.show }))
    }

    render() {
        const { show } = this.state;
        const { word } = this.props;
        let W, T = null, P = null;

        W = (<span style={{ lineHeight: '2', margin: '0 5px' }}>{word.word}</span>)

        P = (<span>{word.postfix}</span>)




        if (
            ((word.translate !== 'Перевод не найден') &&
                (getLevel(this.props.level) > word.level)) ||
            (show)
        ) {
            T = (
                <Label>{word.translate}</Label>
            )
        }

        return (
            <span className="word" onClick={() => { this.setShow() }}>
                {W}
                {T}
                {P}
            </span>

        )
    }

}

const mapStateToProps = ({ settings, words }) => {
    return {
        settings: settings,
        words: words
    };
};

const mapDispatchToProps = (dispatch, { apiService }) => {

    return {
        setLevel: (level) => dispatch(setLevel(level)),
        setPage: (page) => dispatch(setPage(page)),
        incPage: () => dispatch(incPage()),
        decPage: () => dispatch(decPage()),
        fetchWords: (bookId, page) => fetchWords(apiService, dispatch)(bookId, page),
    }

};

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps))(ReadPageContainer);


