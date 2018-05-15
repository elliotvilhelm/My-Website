import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'



const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Hey my name is Elliot, I love to code!</h1>
                <p>RESUME blah blah</p>
            </div>

        )
    }
}

export default HomePage;
