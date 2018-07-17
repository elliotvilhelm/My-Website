import React, {Component} from 'react';
import SideBar from "./SideBar";
import Paper from 'material-ui/Paper'
import '../styles/style.css'





class Resume extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                <Paper className='paper'>
                    <div className='resume-div'>
                        <iframe src="https://drive.google.com/file/d/1eKi6yOeRiBpsnnVqOod5qfm-6FsM4-dk/preview" width="100%" height="100%"></iframe>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Resume;
