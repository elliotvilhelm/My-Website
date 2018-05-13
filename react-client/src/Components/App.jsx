import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Footer />
                </div>
                </MuiThemeProvider>
            </Router>
        )
    }
}
export default App;
