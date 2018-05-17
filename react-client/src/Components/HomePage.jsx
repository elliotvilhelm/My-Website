import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import { URLProvider } from 'react-url';
import UCSD from '../images/UCSD1.jpg'
import selfie from '../images/selfie.jpg'
import '../styles/style.css'
import {AppBar, Tabs, Tab} from 'material-ui'
// import FlatButton from 'material-ui/FlatButton';
import Image from 'material-ui-image'
import Text from 'material-ui/TextField'



const style = {
    textAlign: 'center',
    display: 'inline-block'

};

var styles = {
    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
    },
};
class HomePage extends Component {
    render() {
        return (
            <div>
                <AppBar title="" style={styles.appBar}>
                    <Tabs style={styles.tabs}>
                        <Tab label="Home">
                            <Paper style={style}>
                            <div className="center-div">
                                <h1>Elliot Vilhelm Pourmand</h1>

                                <p> I am a Computer Scientist studying at the
                                    University of California San Diego. My interests are in computational theory
                                    and deep learning. I am very passionate about Algorithms and Data Structures. I
                                    enjoy chess programming and have written a Python Chess Engine called
                                    <a href="https://github.com/elliotvilhelm/IZII"> IZII</a>.

                                </p>

                                <h2>Check Out my <a href="https://github.com/elliotvilhelm">GitHub!</a></h2>

                                <Image
                                    src={selfie}
                                    className="img-circle"
                                />
                            </div>
                                {/*<div className="large-div">*/}
                                {/*<Image*/}
                                    {/*src={UCSD}*/}
                                    {/*className="img-transparent"*/}
                                {/*/>*/}
                            {/*</div>*/}
                            </Paper>


                        </Tab>
                        <Tab label="Resume">
                            <div>
                                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTP2bTMTLN155e4uPs6Wo4_pZ6Lpbh2yw3tXnqpMekAw2s4t8xNzwVOcIfW-cnFA1kFYnjRpbdNe_vv/pub?embedded=true" width="100%" height="800"/>
                            </div>
                        </Tab>

                        <Tab label="About Me">
                            <div>
                            </div>
                        </Tab>
                    </Tabs>
                </AppBar>
            </div>

        )
    }
}

export default HomePage;
