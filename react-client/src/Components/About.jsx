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
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQuEKG84tB_EgsoYg-L1-BoYtaXDoCyD25wHlUPcvgKVcR4E0NdSyOfkWaDMjoELWDorMhbXgjayPDV/pub?embedded=true" width="100%" height="800"/>
            </div>
        )
    }
}

export default HomePage;
