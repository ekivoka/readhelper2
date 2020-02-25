import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import './header.css';



class Header extends React.Component {

    state = {
        avatarSrc: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        username: 'Петров Иван'
    }

    render() {
        const { avatarSrc, username } = this.state;


        return (
            <Menu size='small' className='header-bar' inverted>
                <Menu.Menu position='right'>
                    <Dropdown item trigger={<div><Image avatar src={avatarSrc} /><span style={{ marginLeft: '10px' }}>{username}</span></div>} >
                        <Dropdown.Menu >
                            <Dropdown.Item inverted onClick={() => { this.props.history.push(`/settings`); }}>Настройки</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.props.history.push(`/login`); }}>Выход</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default withRouter(Header);