import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import About from './About';
import Resume from './Resume'
import '../styles/style.css'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Chess from './Chess'
import history from '../history'
import Chat from './Chat'

class App extends Component {
    render() {
        return (

            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

                {/*<NavBar />*/}
                <BrowserRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/Home" component={HomePage} />
                        <Route path="/About" component={About}/>
                        <Route path="/Chess" component={Chess}/>
                        <Route path="/Resume" component={Resume}/>
                        <Route path="/Chat" component={Chat}/>
                    </Switch>
                </BrowserRouter>
                {/*<Footer />*/}
            </MuiThemeProvider>
        );
    }

}
export default App;
