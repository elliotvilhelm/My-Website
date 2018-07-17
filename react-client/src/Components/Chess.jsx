import React, {Component} from 'react';
import axios from "axios/index";
import ReactChess from 'react-chess'
import SideBar from './SideBar'
import Paper from 'material-ui/Paper'
import '../styles/style.css'
import terminator from '../images/terminator.png'




class Chess extends Component {
    constructor(props) {
        super(props);

        this.state = {open: false, pieces: ReactChess.getDefaultLineup(), allowMoves: true};
        this.handleMovePiece = this.handleMovePiece.bind(this);
        this.getComputerMove = this.getComputerMove.bind(this);
        this.getPiece = this.getPiece.bind(this);
        this.current_pieces = ReactChess.getDefaultLineup();
        this.update_pieces = this.update_pieces.bind(this);
        this.preventDragHandler = this.preventDragHandler.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        // this.renderChess = this.renderChess.bind(this);

    }
    preventDragHandler () {
    }
    handleToggle() {
        this.setState({open: !this.state.open})
    }

    handleClose() {
        this.setState({open: false})
    }

    update_pieces (lineup) {
        this.setState({pieces: lineup},function(){
            console.log("force update")
        });

    }
    render() {
        return (
            <div>
                <SideBar/>
                <Paper className='paper'>
                    <div className='banner-div'>
                        <img src={terminator} className='img-terminator'/>
                    </div>
                    <div className='chess-top-div'>
                        <h1>Can you beat my Chess Engine?</h1>
                        <h3>Make a move, the engine will play back.</h3>
                    </div>
                    <div className="chess-div">
                        <ReactChess pieces={this.state.pieces} onMovePiece={this.handleMovePiece} allowMoves={this.state.allowMoves}/>
                        <br/>
                        <div className='chess-info-div'>
                            <h3>
                                This Chess Engine is written in Python by myself. Code can be found on my <a href="https://github.com/ElliotVilhelm/IZII"> Github</a> ❤️
                            </h3>
                        </div>
                    </div>
                    {/*<div className='chess-info-div'>*/}
                    {/*<h3>*/}
                        {/*This Chess Engine is written in Python by myself. Code can be found on my <a href="https://github.com/ElliotVilhelm/IZII"> Github</a> ❤️*/}
                    {/*</h3>*/}
                    {/*</div>*/}
                    <div className='chess-space-div'>

                    </div>
                </Paper>
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
        var result = "empty";
        this.setState({allowMoves: false});


        axios.get(`/validate_move`, {
            params: {
                board: `${this.state.pieces}`,
                piece_position: `${piece.position}`,
                to_square: `${toSquare}`
            }})
            .then(res => {
                result = res.data;
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
                if (result === true) {
                    this.setState({pieces: newPieces});
                    this.getComputerMove(this.state.pieces, piece, fromSquare, toSquare);
                    this.current_pieces = newPieces
                    return true
                }
                else {
                    this.setState({pieces: newPieces});
                    this.setState({pieces: this.current_pieces})
                    this.setState({allowMoves: true})
                    return false
                }
            });
    }

    getComputerMove(board, piece, from_sq, to_sq) {
        var result = "empty";
        axios.get(`/play-chess`, {
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
                        if (move_piece_index === index) {
                            return `${move_piece_name}@${toSquare}`
                        } else if (curr.indexOf(toSquare) === 2) {
                            return false // To be removed from the board
                        }
                        return curr
                    })
                    .filter(Boolean);
                this.setState({pieces: newPieces})
                this.current_pieces = newPieces

                this.setState({allowMoves: true})
            });
    }

}

export default Chess;

