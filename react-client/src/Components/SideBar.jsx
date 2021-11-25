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
import f from '../images/function.svg'
import menu from '../images/menu.png'
import cancel from '../images/error.svg'
import Fade from '@material-ui/core/Fade';

const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer()  {
        this.setState({ open: !this.state.open });
    }
    render() {
        if (this.state.open) {
            return (
                <div>
                <Fade timeout={2000} in={this.state.open}>
                <div>
                    <Drawer open={this.state.open}
                            onClose={() => this.setState({open: false})}
                            onOpen={() => this.setState({open: true})}
                            containerClassName='left-drawer'
                            transitionDuration={4000}
                            zDepth={2}>
                        {/*<MenuItem className='menu-item' onClick={() => this.toggleDrawer(false)}>*/}
                            {/*<Link to={"Home"}>*/}
                                {/*<img src={home} className='img-right'/>*/}
                            {/*</Link>*/}
                        {/*</MenuItem>*/}
                        <MenuItem className='menu-item' onClick={() => this.toggleDrawer(false)}>
                            <Link to={"Home"}>
                                <Img src={profile} className="img-right"/>
                            </Link>
                        </MenuItem>
                        <MenuItem className='menu-item' onClick={() => this.toggleDrawer(false)}>
                            <Link to={"Resume"}>
                                <img src={resume} className='img-right'/>
                            </Link>
                        </MenuItem>
                        <MenuItem className='menu-item' onClick={() => this.toggleDrawer(false)}>
                            <Link to={"Chess"}>
                                <img src={chess} className='img-right'/>
                            </Link>
                        </MenuItem>
                        <MenuItem className='menu-item' onClick={() => this.toggleDrawer(false)}>
                            <Link to={"Haskell"}>
                                <img src={f} className='img-right'/>
                            </Link>
                        </MenuItem>
                        {/*<MenuItem className='menu-item' onClick={() => this.toggleDrawer(false)}>*/}
                            {/*<Link to={"Stuff"}>*/}
                                {/*<img src={thoughts} className='img-right'/>*/}
                            {/*</Link>*/}
                        {/*</MenuItem>*/}
                        {/*<MenuItem className='menu-item' onClick={() => this.toggleDrawer(false)}>*/}
                            {/*<Link to={"Chat"}>*/}
                                {/*<img src={chat} className='img-right'/>*/}
                            {/*</Link>*/}
                        {/*</MenuItem>*/}
                        <MenuItem className='menu-item' onClick={() => this.toggleDrawer(false)}>
                            <img src={cancel} className='img-right'/>
                        </MenuItem>
                    </Drawer>
                </div>
                </Fade>
                </div>
            );
        }
        else {
            return (

                <div className='sidebar-button-div'>
                    <Fade timeout={2000} in={!this.state.open}>
                    <Button onClick={this.toggleDrawer} zDepth={3} className='button-s'>
                        <img src={menu} className='img-right'/>
                    </Button>
                    </Fade>
                </div>
            );
        }
    }
}

export default SideBar;
