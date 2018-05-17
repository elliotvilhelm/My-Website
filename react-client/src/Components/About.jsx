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
                <h3>Resume 🌏</h3>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTP2bTMTLN155e4uPs6Wo4_pZ6Lpbh2yw3tXnqpMekAw2s4t8xNzwVOcIfW-cnFA1kFYnjRpbdNe_vv/pub?embedded=true" width="100%" height="800"/>
            </div>
        )
    }
}

export default HomePage;
