import React, {Component} from 'react';
import { URLProvider } from 'react-url';
import '../styles/style.css'
import SideBar from './SideBar'
import Paper from 'material-ui/Paper'
import github from '../images/github.png'
import selfie from '../images/me.jpg'
import Typography from '@material-ui/core/Typography'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { CSSTransition } from "react-transition-group";
import Fade from '@material-ui/core/Fade';
import Chess from "./Chess";
import { Link } from 'react-router-dom'
import StickyFooter from 'react-sticky-footer';





class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {mounted: false};
    }
    componentDidMount() {
        this.setState({mounted: true});
    }


    render() {

        return (
            <Paper className='paper'>
                <Fade timeout={2000} in={this.state.mounted}>
                    <div>
                        <SideBar/>
                        <div className='name-div'>

                            <Fade timeout={5000} in={this.state.mounted}>
                            {/*<Typography variant="h1">*/}
                            <h1>Elliot Vilhelm Pourmand</h1>
                            </Fade>
                            {/*Elliot Vilhelm Pourmand*/}
                            {/*</Typography>*/}
                        </div>
                        <Paper className='about-paper'>

                            <div className='about-hold-div'>
                                <div className='about-div'>
                                    {/*<div style={{float: 'right'}}>*/}
                                    <Paper style={{padding: '1%'}}>
                                        <div className='selfie-div'>
                                            {/*hey*/}
                                            <img src={selfie} className='img-selfie'/>
                                        </div>
                                        <Typography style={{fontSize: 20}} variant="p">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a Senior undergraduate student at the University of California San Diego.
                                            Some topics that interest me are deep reinforcement learning, algorithmic trading and chess programming.
                                            My undergraduate experience has had great breadth during which I have taken courses on algorithms, advanced
                                            data structures, computer architecture, software engineering, statistical AI, deep learning, type inference,
                                            and operating systems.<br/><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This past summer I worked as an intern at Zendesk in San Francisco on Team Orca. I worked on a multi-threaded
                                            rules engine for fraud and abuse detection. During my time there I integrated new signals and introduced new
                                            policies for analyzing sign-up activity. Part of my work included developing an <a href="https://github.com/ElliotVilhelm/python-domain-validation">
                                            open source project</a> for requesting WHOIS DNS registry data. The project is hosted on PyPi and can be installed using <code>pip3 install domain_validation</code>.
                                            The project has since been integrated into our rules engine with an additional caching layer for efficiency.
                                            For testing purposes, I built out a data visualization dashboard in DataDog which provided real-time analytics on
                                            sign-up activity and response generated. I will be working at Zendesk as a full-time software engineer September 2019.<br/><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;I used to be really into chess programming. Over the summer of 2017 I wrote a Chess engine in Python which I
                                            named <a href={"https://github.com/ElliotVilhelm/IZII"}>IZII</a>. IZII is not bitboard based (kill me, it's in Python), thus the piece
                                            and board representation is quite simple. The engine implements a minimax search with alpha beta pruning. IZII is able to search a
                                            depth of 4 layers in the game tree in few seconds. IZII is also speaks XBoard protocal meaning it can be integrated with any XBoard GUI.
                                            Also, IZII is able to jump onto the ICS (International Chess Server) using MIT's <a href={"http://www.tim-mann.org/zippy.html"}>Skippy</a>.
                                            A version of IZII is hosted on this site at <Link to={"/Chess"} component={Chess}>/Chess</Link><br/><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recently, I have been enjoying algorithmic trading and have begun to dabble into deep learning
                                            on financial data. I initially began by writing a <a href={"https://github.com/ElliotVilhelm/Binance-Trading-Bot"}>trading bot</a>
                                            based on moving average convergence divergence (MACD). Currently, I am most excited about an LSTM model I have developed to predict
                                            upward and downward trends for Bitcoin prices (<a href="https://github.com/ElliotVilhelm/RNN-Trading">link</a>). My future plans are
                                            to build a deep reinforcement learning trading bot. The architecture for this will be modeled off of the <a href={"https://arxiv.org/abs/1611.01942"}>
                                            DeepSense</a> paper.
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
                        <Fade timeout={4000} in={this.state.mounted}>
                        <div className='photo-div'>
                            <a href="https://github.com/elliotvilhelm">
                                <h2>My Projects</h2>
                                {/*<div className='div-home-git'>*/}
                                <img src={github} className='img-icon'/>
                                {/*</div>*/}
                            </a>
                        </div>
                        </Fade>

                    </div>
                </Fade>
                <StickyFooter
                    bottomThreshold={50}
                    normalStyles={{
                        backgroundColor: "#A9A9A9",
                    }}
                    stickyStyles={{
                        backgroundColor: "#A9A9A9",
                    }}
                >
                    COPYRIGHT © 2019 ELLIOT VILHELM POURMAND. ALL RIGHTS RESERVED
                </StickyFooter>
            </Paper>

        )
    }
}

export default HomePage;
