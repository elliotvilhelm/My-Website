import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import { URLProvider } from 'react-url';
import selfie from '../images/selfie.png';
import github_icon from '../images/Octocat.jpg'
import ucsd from '../images/UCSD.png'
// import '../styles/style.css?ts=<?=time()?>'
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
        this.state = {data: "idk!!", pieces: Chess.getDefaultLineup()};
        this.handleMovePiece = this.handleMovePiece.bind(this);
        this.getComputerMove = this.getComputerMove.bind(this);
        this.getPiece = this.getPiece.bind(this);
    }

    componentDidMount() {
        // this.handleMovePiece(this.state.pieces[0], null, 'd5')
        // console.log("did rook update")
        // console.log(this.state.pieces)
        // console.log("end rook update chekc")
        //
        // this.setState({pieces: [this.state.pieces[0]]})
        // console.log("comp mount piece")
        // console.log(this.state.pieces)
        // console.log("end comp mount piece")
    }



    render() {

        return (

            <div>
                <AppBar title="" style={styles.appBar}>
                    <Tabs style={styles.tabs}>
                        <Tab label="Home" buttonStyle={{fontsize: 40, fontweight: 'bold'}}>
                            <Center>
                                <Paper style={style}>
                                    <div className="center-div">
                                        <h1>Elliot Vilhelm Pourmand</h1>
                                        <Img src={selfie} className="img"/>
                                        <h4>Computer Scientist studying at the</h4>
                                        <h4>University of California San Diego.</h4>
                                        <Img src={ucsd} className="img-right"/>
                                        <br/>Check Out my <a href="https://github.com/ElliotVilhelm">GitHub!</a>
                                        <Img src={github_icon} className="img-right"/>
                                    </div>
                                    <div>
                                        <table className="center">
                                            <tr>
                                                <th>Language</th>
                                                <th>Proficiency</th>
                                            </tr>
                                            <tr>

                                                <th>Python:</th>
                                                <th>
                                                    <progress value="75" max="100">
                                                    </progress>
                                                </th>
                                            </tr>
                                            <tr>

                                                <th>Java:</th>
                                                <th>
                                                    <progress value="22" max="100">
                                                    </progress>
                                                </th>
                                            </tr>
                                            <tr>

                                                <th>C:</th>
                                                <th>
                                                    <progress value="50" max="100">
                                                    </progress>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>C++:</th>
                                                <th>
                                                    <progress value="75" max="100">
                                                    </progress>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Javascript:</th>
                                                <th>
                                                    <progress value="55" max="100">
                                                    </progress>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Ruby on Rails:</th>
                                                <th>
                                                    <progress value="45" max="100">
                                                    </progress>
                                                </th>
                                            </tr>

                                        </table>
                                    </div>
                                </Paper>
                            </Center>


                        </Tab>
                        <Tab label="Chess Engine">
                            <div className="chess-div">
                                <Chess pieces={this.state.pieces} onMovePiece={this.handleMovePiece}/>
                            </div>
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

    getPiece(square) {
        var i = 0;
        for (let p of this.state.pieces) {
            if (p.split('@')[1] === square) {
                return [p[0], i];
            }
            i += 1;
        }
        return "not found"
    }

    handleMovePiece(piece, fromSquare, toSquare) {

        // console.log("from sq")
        // console.log(fromSquare)
        console.log(piece)
        // console.log(toSquare)
        // console.log("end printing from and to sq")
        const newPieces = this.state.pieces
            .map((curr, index) => {
                console.log(piece.index, "  ", index)
                if (piece.index === index) {
                    return `${piece.name}@${toSquare}`
                } else if (curr.indexOf(toSquare) === 2) {
                    return false // To be removed from the board
                }
                return curr
            })
            .filter(Boolean);
        this.setState({pieces: newPieces})
        // this.setState({pieces: []})
        // console.log("logging pieaces")
        // console.log(this.state.pieces)
        // console.log("done logging pieces")
        this.getComputerMove(this.state.pieces, piece, fromSquare, toSquare);
        // console.log("logging output")
        // console.log(output)
        // console.log("finished logging output")
    }

    getComputerMove(board, piece, from_sq, to_sq) {
        var result = "empty";
        axios.get(`/chess`, {
            params: {
                board: `${board}`,
                piece_name: `${piece.name}`,
                piece_index: `${piece.index}`,
                from_square: `${from_sq}`,
                to_square: `${to_sq}`
            }})
            .then(res => {
                result = res.data;
                var moves = result.split(',')
                var move_piece = this.getPiece(moves[0])
                var move_piece_index = move_piece[1]
                var move_piece_name = move_piece[0]
                var toSquare = moves[1];
                const newPieces = this.state.pieces
                    .map((curr, index) => {
                        console.log(move_piece_index, "  ", index)
                        if (move_piece_index === index) {
                            console.log("found your boy")
                            return `${move_piece_name}@${toSquare}`
                        } else if (curr.indexOf(toSquare) === 2) {
                            return false // To be removed from the board
                        }
                        return curr
                    })
                    .filter(Boolean);
                this.setState({pieces: newPieces})

            });
    }

}






export default HomePage;
