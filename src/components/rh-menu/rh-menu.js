import React from 'react';
import { withRouter } from "react-router-dom";
import { Sidebar, Icon, Menu } from 'semantic-ui-react'


class RhMenu extends React.Component {

    state = {
        activeItem: ''
    }

    setActiveItem = (page) => {
        this.setState({
            activeItem: page
        })
        this.props.history.push(page)
    }


    render() {
        const { activeItem } = this.state;


        return (
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                style={{ width: "110px" }}
            >

                <Menu.Item onClick={() => this.setActiveItem("/home")} active={activeItem === '/home'}>
                    <Icon name='home' />
                    Домой
                </Menu.Item>

                <Menu.Item onClick={() => this.setActiveItem("/books")} active={activeItem === '/books'}>
                    <Icon name='book' />
                    Книги
                </Menu.Item>

                <Menu.Item onClick={() => this.setActiveItem("/words")} active={activeItem === '/words'}>
                    <Icon name='list alternate outline' />
                    Слова
                </Menu.Item>

                <Menu.Item onClick={() => this.setActiveItem("/read")} active={activeItem === '/read'}>
                    <Icon name='eye' />
                    Читать
                </Menu.Item>


            </Sidebar>
        )
    }
}

export default withRouter(RhMenu);