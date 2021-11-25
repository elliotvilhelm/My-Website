import React, {Component} from 'react';
import SideBar from "./SideBar";
import Paper from 'material-ui/Paper'
import '../styles/style.css'
import Fade from '@material-ui/core/Fade';

import StickyFooter from 'react-sticky-footer';




class Resume extends Component {
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
                        <div className='resume-div'>
                            <iframe src="https://docs.google.com/document/d/1STt3vLs14Di6Xmoy4tgI9LQKejoaaM7wLmzGZU697pw/preview" width="800px" height="950px"/>
                        </div>
                    </div>
                </Fade>
            </Paper>
        )
    }
}

export default Resume;
