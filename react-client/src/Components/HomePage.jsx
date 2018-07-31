import React, {Component} from 'react';
import { URLProvider } from 'react-url';
import '../styles/style.css'
import SideBar from './SideBar'
import Paper from 'material-ui/Paper'
import github from '../images/github.png'



class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>
                <SideBar/>
                <Paper className='paper'>
                    <div className='name-div'>
                    <h1>Elliot Vilhelm Pourmand</h1>
                    </div>
                    <div className='photo-div'>
                        <a href="https://github.com/elliotvilhelm">
                        <h2>Creator</h2>
                        <img src={github} className='img-icon'/>
                        </a>
                    </div>
                </Paper>
            </div>

        )
    }
}

export default HomePage;
