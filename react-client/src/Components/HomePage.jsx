import React, {Component} from 'react';
import { URLProvider } from 'react-url';
import '../styles/style.css'
import SideBar from './SideBar'
import Background from './Background'



class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>
                <SideBar/>
                <Background/>
             </div>

        )
    }
}

export default HomePage;
