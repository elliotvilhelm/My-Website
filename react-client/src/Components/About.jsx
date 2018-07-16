import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import SideBar from "./SideBar";
import '../styles/style.css'
import selfie from '../images/selfie.png'



const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class About extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                <Paper className='paper'>
                    <div className='about-div'>
                        <img src={selfie} className='img-selfie'/>
                        <div>
                            <h1>💻 Software Engineer</h1>
                            <h2>University of California San Diego</h2>
                            <br/>
                            <h2>Zendesk</h2>
                            <br/>
                            <h3>Los Angeles ✈️  San Francisco ✈️ San Diego</h3>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default About;
