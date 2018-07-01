import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import About from './About';
import '../styles/style.css'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (

            <Router>
                {/*<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>*/}
                <MuiThemeProvider>

                    <div>

                        {/*<NavBar />*/}
                        <Route name="home" exact path="/" component={HomePage} />
                        {/*<Route path="/about" component={About}/>*/}
                        <Footer />
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }

}
export default App;
