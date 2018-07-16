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
                        <iframe src="https://docs.google.com/document/d/e/2PACX-1vQuEKG84tB_EgsoYg-L1-BoYtaXDoCyD25wHlUPcvgKVcR4E0NdSyOfkWaDMjoELWDorMhbXgjayPDV/pub?embedded=true" width="100%" height="800"/>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Resume;
