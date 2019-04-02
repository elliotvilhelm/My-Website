import React, {Component} from 'react';
import SideBar from "./SideBar";
import Paper from 'material-ui/Paper'
import '../styles/style.css'





class Resume extends Component {
    render() {
        return (
                <Paper className='paper'>
                    <SideBar/>
                    <div className='resume-div'>
                        <iframe src="https://drive.google.com/file/d/1eKi6yOeRiBpsnnVqOod5qfm-6FsM4-dk/preview" width="800px" height="800px"/>
                    </div>
                </Paper>
        )
    }
}

export default Resume;
