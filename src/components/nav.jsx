import React from 'react';
import '../styles/nav.scss';
import { Link } from 'react-router-dom'

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
                <div className="navigation" style={{marginBottom: '10px'}}>
                    <Link to="/">drawing</Link>
                    <Link to="/building" style={{marginLeft: '10px'}}>building</Link>
                </div>
            </div>
        )
    }
}
