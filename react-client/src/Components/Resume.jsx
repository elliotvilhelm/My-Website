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
                        {/*<iframe src="https://docs.google.com/document/d/e/2PACX-1vQuEKG84tB_EgsoYg-L1-BoYtaXDoCyD25wHlUPcvgKVcR4E0NdSyOfkWaDMjoELWDorMhbXgjayPDV/pub?embedded=true" width="100%" height="800"/>*/}
                        {/*<iframe src="https://drive.google.com/file/d/19lWYSzn6GmvSTa8Lf9LACDzsKFZOMI3X/preview" width="100%" height="800"></iframe>*/}
                        <iframe src="https://drive.google.com/file/d/1eKi6yOeRiBpsnnVqOod5qfm-6FsM4-dk/preview" width="100%" height="800"></iframe>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Resume;
