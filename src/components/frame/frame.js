import React from 'react';
import './frame.css';
import { Segment, Sidebar } from 'semantic-ui-react'
import Header from '../../components/header'
import RhMenu from '../../components/rh-menu'

class Frame extends React.Component {

    state = {
        visible: false,
    }

    setActiveMenu = (active) => {

        this.setState({
            visible: active
        })
    }

    render() {
        const { visible } = this.state;

        return (

            <div className='page-container'>
                <div className='page-header'>
                    <Header />
                </div>
                <div className='page-content'>
                    <div className="sidebar-pushable-wrap">
                        <Sidebar.Pushable as={Segment} className="sidebar-pushable">
                            <RhMenu />
                            <Sidebar.Pusher dimmed={visible} onClick={() => { this.setActiveMenu(false) }}>
                                <div className="page-back">
                                    {
                                        this.props.children
                                    }
                                </div>
                            </Sidebar.Pusher>
                        </Sidebar.Pushable>
                    </div >
                </div>
            </div>

        )
    }
}


export default Frame;