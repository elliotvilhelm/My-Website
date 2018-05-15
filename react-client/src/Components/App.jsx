import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import About from './About';
import Background from '../background.jpg';


class App extends Component {
    render() {
        return (

            <Router>

                <MuiThemeProvider>
                    <div style={{ backgroundImage: `url(${Background})`, height: 1200}}>
                        <NavBar />
                        <Route name="home" exact path="/" component={HomePage} />
                        <Route path="/about" component={About}/>
                        <Footer />
                    </div>
                </MuiThemeProvider>

            </Router>
        )
    }

}
export default App;
