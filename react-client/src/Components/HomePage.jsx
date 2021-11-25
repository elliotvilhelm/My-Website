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
                                        ✉️: elliot@pourmand.com<br/>
                                        🔗: <a href="https://www.linkedin.com/in/elliot-pourmand">linkedin.com/in/elliot-pourmand</a>
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
                </Paper>
        )
    }
}

export default HomePage;
