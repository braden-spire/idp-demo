import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from './containers/home/Home';
import LogoutContainer from './containers/logout/Logout';


function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={HomeContainer}/>
                <Route path="/logout" exact component={LogoutContainer}/>
            </div>
        </Router>
    );
}

export default App;
