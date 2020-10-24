import React from 'react';
import '../styles/nav.scss'

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="nav">
                <h1>100 days</h1>
                <div className="navigation">
                    <p>drawing</p>
                </div>
            </div>
        )
    }
}
