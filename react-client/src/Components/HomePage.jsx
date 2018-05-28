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
import Img from 'react-image'





const style = {
    textAlign: 'center',
    display: 'inline-block'

};


const ReactDOM = require('react-dom')
const Chess = require('react-chess')

var styles = {

    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
        fontsize: 500,
        // fontweight: 'bold',
        // fontcolor: '#000FFF'
    },
};


var PythonShell = require('python-shell');

PythonShell.run('../sample.py', function (err) {
    if (err) throw err;
    console.log('finished');
});



class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {pieces: Chess.getDefaultLineup()};
        this.handleMovePiece = this.handleMovePiece.bind(this);
    }
    render() {
        const {pieces} = this.state;

        return (
            <div>
                <AppBar title="" style={styles.appBar}>
                    <Tabs style={styles.tabs}>
                        <Tab label="Home" buttonStyle={{fontsize: 40, fontweight: 'bold'}}>


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
                                    <Img
                                        src={selfie}
                                        className="img-circle"
                                    />
                                </div>
                            </Paper>


                        </Tab>
                        <Tab label="Chess Engine">
                            <Chess pieces={pieces} onMovePiece={this.handleMovePiece}/>
                            <p>To be plugged in soon!</p>
                        </Tab>
                        <Tab label="Resume">
                            <div>
                                <iframe
                                    src="https://docs.google.com/document/d/e/2PACX-1vTP2bTMTLN155e4uPs6Wo4_pZ6Lpbh2yw3tXnqpMekAw2s4t8xNzwVOcIfW-cnFA1kFYnjRpbdNe_vv/pub?embedded=true"
                                    width="100%" height="800"/>
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

    // check state ( game over? , turn ?) .. updateState()
    // want to check from square and to square legality
    // allow or block move
    handleMovePiece(piece, fromSquare, toSquare) {
        console.log(piece);
        console.log(fromSquare);
        console.log(toSquare);
        const newPieces = this.state.pieces
            .map((curr, index) => {
                if (piece.index === index) {
                    return `${piece.name}@${toSquare}`
                } else if (curr.indexOf(toSquare) === 2) {
                    return false // To be removed from the board
                }
                return curr
            })
            .filter(Boolean);
        this.setState({pieces: newPieces})
    }
}

export default HomePage;
