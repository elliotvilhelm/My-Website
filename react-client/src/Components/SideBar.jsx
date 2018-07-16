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

import Chess from 'react-chess';

const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class SideBar extends Component {
    render() {
        return (
            <Drawer containerClassName='left-drawer' docked={false} zDepth={2}>
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
            </Drawer>
        );
    }
}

export default SideBar;