import React, {Component} from 'react';
import '../styles/style.css'
import SideBar from './SideBar'
import Paper from 'material-ui/Paper'
import github from '../images/github.png'
import selfie from '../images/me.jpg'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade';


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
                                    <h1>Elliot Vilhelm Pourmand</h1>
                                </Fade>
                            </div>
                            <Paper className='about-paper'>

                                <div className='about-hold-div'>
                                    <div className='about-div'>
                                        {/*<Paper style={{padding: '1%'}}>*/}
                                            <div className='selfie-div'>
                                                <img src={selfie} className='img-selfie'/>
                                            </div>
                                            <Typography style={{fontSize: 20}} variant="p">
                                                &nbsp;&nbsp;&nbsp;&nbsp;Welcome! I am a Software Engineer working at Zendesk in San Francisco, California.
                                                I completed my undergraduate degree at the University of California San Diego, where I
                                                earned a Bachelor of Science in Computer Science. My interests are focused in the areas of
                                                near real-time streaming and Deep Learning. At Zendesk I work on the Abuse and Fraud Prevention team where
                                                we enable teams across the organization to effectively combat abuse.<br/><br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;My work at Zendesk focuses on data streaming with Apache Flink and Deep Learning
                                                with TensorFlow. My recent work has focused on developing a machine learning pipeline. The pipeline consists of a
                                                near real-streaming application which makes requests to a model server using Apache Flink's Async I/O.
                                                Our model server is built on Tensorflow Extended Serving and server language models which utilize pre-trained
                                                embeddings from TensorFlow Hub.

                                            </Typography>
                                        {/*</Paper>*/}
                                    </div>
                                </div>
                            </Paper>
                            <Fade timeout={4000} in={this.state.mounted}>
                                <div className='photo-div'>
                                    <a href="https://github.com/elliotvilhelm">
                                        <h2>My Projects</h2>
                                        <img src={github} className='img-icon'/>
                                    </a>
                                </div>
                            </Fade>

                        </div>
                    </Fade>
                    <footer className='sticky-footer'>
                        COPYRIGHT © 2020 ELLIOT VILHELM POURMAND. ALL RIGHTS RESERVED
                    </footer>
                </Paper>
        )
    }
}

export default HomePage;
