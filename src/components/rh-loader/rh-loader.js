import React from 'react';
import './rh-loader.css'


class RHLoader extends React.Component {

    state = {
    }

    render() {
        return (
            <div className="lds-spinner-wrapper">
                <div className="lds-hourglass">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default RHLoader;