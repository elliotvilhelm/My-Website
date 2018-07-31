import React, {Component} from 'react';
import { URLProvider } from 'react-url';
import home from '../images/home.svg'
import profile from '../images/profile.svg'
import chess from '../images/chess.svg'
import '../styles/style.css'
import Img from 'react-image';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import resume from '../images/resume.svg'
import Button from 'material-ui/FlatButton'
import Chess from 'react-chess';
import chat from '../images/chat.svg'

const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer(op)  {
        // this.setState({ open: op });
    }
    render() {
        return (
            <div>
                {/*<Button onClick={this.toggleDrawer} zDepth={3} className='button-s'>*/}
                    {/*<h1>Open Left</h1>*/}
                {/*</Button>*/}
            <Drawer open={this.state.open}
                    // onClose={this.toggleDrawer(false)}
                    containerClassName='left-drawer'
                    zDepth={2}>
                <MenuItem className='menu-item'>
                    <Link to={"Home"}>
                        <img src={home} className='img-right'/>
                    </Link>
                </MenuItem>
                <MenuItem className='menu-item'>

                    <Link to={"About"}>
                        <Img src={profile} className="img-right"/>
                    </Link>
                </MenuItem>
                <MenuItem className='menu-item'>
                    <Link to={"Chess"}>
                        <img src={chess} className='img-right'/>
                    </Link>
                </MenuItem>
                <MenuItem className='menu-item'>
                    <Link to={"Resume"}>
                        <img src={resume} className='img-right'/>
                    </Link>
                </MenuItem>
                <MenuItem className='menu-item'>
                    <Link to={"Chat"}>
                        <img src={chat} className='img-right'/>
                    </Link>
                </MenuItem>
            </Drawer>
            </div>
        );
    }
}

export default SideBar;