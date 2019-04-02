import React, {Component} from 'react';
import { URLProvider } from 'react-url';
import '../styles/style.css'
import SideBar from './SideBar'
import Paper from 'material-ui/Paper'
import github from '../images/github.png'
import selfie from '../images/me.jpg'
import Typography from '@material-ui/core/Typography'



class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
                <Paper className='paper'>
                    <SideBar/>
                    <div className='name-div'>
                    <h1>Elliot Vilhelm Pourmand</h1>
                    </div>
                    <Paper className='about-paper'>

                        <div className='about-hold-div'>
                            <div className='selfie-div'>
                                <img src={selfie} className='img-selfie'/>
                            </div>
                            {/*<div style={{float: 'right'}}>*/}
                            <div className='about-div'>
                                <Paper style={{padding: '1%'}}>
                                    <Typography variant="p">
                                        &nbsp;&nbsp;&nbsp;&nbsp;I am a Senior undergraduate student at the University of California San Diego.
                                        Some topics that interest me are deep reinforcement learning, algorithmic trading and chess programming.
                                        My undergraduate experience has had great breadth during which I have taken courses on algorithms, advanced
                                        data structures, computer architecture, statistical AI, deep learning, type inference, and operating systems.<br/><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;This past summer I worked as an intern at Zendesk in San Francisco on Team Orca. I worked on a multi-threaded
                                        rules engine for fraud and abuse detection. During my time there I integrated new signals and introduced new
                                        policies for analyzing sign-up activity. Part of my work included developing an open source project for requesting
                                        WHOIS DNS registry data. This was integrated into our rules engine utilizing a caching layer for efficiency.
                                        For testing purposes, I built out a data visualization dashboard in DataDog which provided real-time analytics on
                                        sign-up activity and response generated. I will be working at Zendesk as a full-time software engineer September 2019.<br/><br/>
                                    </Typography>
                                </Paper>
                                {/*<h2>University of California San Diego</h2>*/}
                                {/*<br/>*/}
                                {/*<h2>💻 B. S. Computer Science</h2>*/}
                                {/*<br/>*/}
                                {/*</div>*/}
                            </div>
                            {/*<h3>Los Angeles ✈️  San Francisco ✈️ San Diego</h3>*/}
                        </div>
                    </Paper>
                        <div className='photo-div'>
                            <a href="https://github.com/elliotvilhelm">
                                <h2>My Projects</h2>
                                {/*<div className='div-home-git'>*/}
                                    <img src={github} className='img-icon'/>
                                {/*</div>*/}
                            </a>
                        </div>
                </Paper>

        )
    }
}

export default HomePage;
