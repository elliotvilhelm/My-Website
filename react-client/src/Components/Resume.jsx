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
                            <iframe src="https://drive.google.com/file/d/1eKi6yOeRiBpsnnVqOod5qfm-6FsM4-dk/preview" width="800px" height="800px"/>
                        </div>
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
                    </div>
                </Fade>
            </Paper>
        )
    }
}

export default Resume;
