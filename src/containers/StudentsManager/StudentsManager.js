import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Students from '../Students/Students';
import Messages from '../Messages/Messages';
import './StudentsManager.css';

class StudentsManager extends Component {
    render() {
        return(
            <div className="StudentsManager">
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={{
                            pathname: '/messages',                            
                        }}>Messages</Link></li>
                    </ul>
                </header>
                <Route path="/" exact component={Students} />
                <Route path="/messages" component={Messages} />
            </div>
        );
    }
}

export default StudentsManager;