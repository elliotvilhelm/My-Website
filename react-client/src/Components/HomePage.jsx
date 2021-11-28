import React, {Component} from 'react';
import '../style.css'


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
                    ✉️: <a href = "mailto: elliot@pourmand.com">elliot@pourmand.com</a>
                    <br/>
                    🔗: <a href="https://www.github.com/in/elliotvilhelm">github.com/elliotvilhelm</a>
                    <br/>
                    🔗: <a href="https://www.linkedin.com/in/elliot-pourmand">linkedin.com/in/elliot-pourmand</a>
                    <br/>
                </div>
            </div>
        )
    }
}

export default HomePage;
