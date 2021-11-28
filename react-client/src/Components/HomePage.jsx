import React, {Component} from 'react';
import '../style.css'
import Pdf from '../assets/pdf/Elliot_Pourmand_11-25-2021.pdf'


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
            <div className='background'>
                <div className='home'>
                    <p>
                    ✉️ <a href = "mailto: elliot@pourmand.com">elliot@pourmand.com</a>
                    <br/>
                    🔗 <a href="https://www.github.com/elliotvilhelm">github.com/elliotvilhelm</a>
                    <br/>
                    🔗 <a href="https://www.linkedin.com/in/elliot-pourmand">linkedin.com/in/elliot-pourmand</a>
                    <br/>
                    📄 <a href={Pdf} target="_blank">Resume</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default HomePage;
