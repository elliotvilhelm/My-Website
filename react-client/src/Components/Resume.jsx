import React, {Component} from 'react';
import SideBar from "./SideBar";



const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class Resume extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQuEKG84tB_EgsoYg-L1-BoYtaXDoCyD25wHlUPcvgKVcR4E0NdSyOfkWaDMjoELWDorMhbXgjayPDV/pub?embedded=true" width="100%" height="800"/>
            </div>
        )
    }
}

export default Resume;
