import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import { URLProvider } from 'react-url';
import selfie from '../images/selfie.jpg'
import '../styles/style.css'
import {AppBar, Tabs, Tab} from 'material-ui';
import Img from 'react-image';

import Chess from 'react-chess';
import Center from 'react-center';
import axios from 'axios'

const style = {
    textAlign: 'center',
    display: 'inline-block',
    width: "80%"
};



var styles = {
    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
        fontsize: 500,
    },
};




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {pieces: Chess.getDefaultLineup()};
        this.handleMovePiece = this.handleMovePiece.bind(this);
    }

    componentDidMount() {
        axios.get(`/chess`)
            .then(res => {
                const persons = res.data;
                console.log("hit!")
                console.log(persons)
                console.log("end")
            })
    }
    render() {
        const {pieces} = this.state;

        return (
            <div>
                <AppBar title="" style={styles.appBar}>
                    <Tabs style={styles.tabs}>
                        <Tab label="Home" buttonStyle={{fontsize: 40, fontweight: 'bold'}}>
                            <Center>
                            <Paper style={style}>
                                <div className="center-div">
                                    <h1>Elliot Vilhelm Pourmand</h1>
                                    <h4>Computer Scientist studying at the University of California San Diego.
                                        <br/>Check Out my <a href="https://github.com/elliotvilhelm">GitHub!</a>
                                    </h4>
                                    <Img src={selfie} className="img-circle"/>
                                </div>
                            </Paper>
                            </Center>


                        </Tab>
                        <Tab label="Chess Engine">
                            <div className="chess-div">
                            <Chess pieces={pieces} onMovePiece={this.handleMovePiece}/>
                            </div>
                            <h1>To be plugged in!</h1>
                        </Tab>
                        <Tab label="Resume">
                            <Center>
                            <div>
                                <iframe
                                    src="https://docs.google.com/document/d/e/2PACX-1vQuEKG84tB_EgsoYg-L1-BoYtaXDoCyD25wHlUPcvgKVcR4E0NdSyOfkWaDMjoELWDorMhbXgjayPDV/pub?embedded=true"
                                    width="800px"
                                    height="1000px"
                                    align="center"
                                >
                                </iframe>
                            </div>
                            </Center>
                        </Tab>
                    </Tabs>
                </AppBar>
            </div>

        )
    }


    handleMovePiece(piece, fromSquare, toSquare) {
        console.log(piece);
        console.log(fromSquare);
        console.log(toSquare);
        getComputerMove(this.state.pieces, piece, fromSquare, toSquare);
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

function getComputerMove(board, piece, from_sq, to_sq) {

    axios.get(`/chess`, {
        params: {
            board: `${board}`,
            piece_name: `${piece.name}`,
            piece_index: `${piece.index}`,
            from_square: `${from_sq}`,
            to_square: `${to_sq}`
        }})
        .then(res => {
            console.log(res.data)
        })
}

export default HomePage;
