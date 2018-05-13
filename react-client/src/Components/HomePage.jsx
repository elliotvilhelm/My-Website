import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class HomePage extends Component {
    render() {
        return (
            <div>
                <Paper style={style}>
                    <Menu>
                        <MenuItem primaryText="QLearning" />
                        <MenuItem primaryText="About Me" />
                    </Menu>
                </Paper>
            </div>

        )
    }
}

export default HomePage;
