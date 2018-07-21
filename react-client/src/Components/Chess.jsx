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

        this.state = {open: false, pieces: ReactChess.getDefaultLineup(), allowMoves: true, castlePerms: "0000"};
        this.handleMovePiece = this.handleMovePiece.bind(this);
        this.getComputerMove = this.getComputerMove.bind(this);
        this.getPiece = this.getPiece.bind(this);
        this.current_pieces = ReactChess.getDefaultLineup();
        this.update_pieces = this.update_pieces.bind(this);
        this.preventDragHandler = this.preventDragHandler.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.getSquare = this.getSquare.bind(this);
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

    getSquare(piece) {
        for (let p of this.state.pieces) {
            if (p.split('@')[0] === piece) {
                return p.split('@')[1]
            }
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
                to_square: `${toSquare}`,
                castle_perms: `${this.state.castlePerms}`
            }})
            .then(res => {
                result = res.data;
                //
                // result is true and fromsq & tosq is castle, then handle special move case,
                // update state castle perms
                // e1 -> g1
                // e1 -> c1
                var newPieces = this.state.pieces
                    .map((curr, index) => {
                        if (piece.index === index) {
                            return `${piece.name}@${toSquare}`
                        } else if (curr.indexOf(toSquare) === 2) {
                            return false // To be removed from the board
                        }
                        return curr
                    })
                    .filter(Boolean);

                console.log(this.state.pieces);
                fromSquare = this.getSquare('K');
                var oldPerms = this.state.castlePerms;
                if (result === true && fromSquare === 'e1' && toSquare === 'g1') {
                    var rook_index = newPieces.indexOf("R@h1")
                    var rookTosq = 'f1';
                    newPieces = newPieces
                        .map((curr, index) => {
                            if (rook_index === index) {
                                return `R@${rookTosq}`
                            } else if (curr.indexOf(rookTosq) === 2) {
                                return false // To be removed from the board
                            }
                            return curr
                        })
                        .filter(Boolean);
                    oldPerms = this.state.castlePerms;
                    oldPerms = setCharAt(oldPerms, 0, "2")
                    oldPerms = setCharAt(oldPerms, 1, "3")
                }

                else if (result === true && fromSquare === 'e1' && toSquare === 'c1') {
                    var rook_index = newPieces.indexOf("R@a1");
                    var rookTosq = 'd1';
                    newPieces = newPieces
                        .map((curr, index) => {
                            if (rook_index === index) {
                                return `R@${rookTosq}`
                            } else if (curr.indexOf(rookTosq) === 2) {
                                if (curr[0] === 'r' && toSquare === 'a7') {
                                    var oldPerms = this.state.castlePerms;
                                    oldPerms = setCharAt(oldPerms, 2, "3")
                                    this.setState({castlePerms: oldPerms})
                                }
                                else if (curr[0] === 'r' && toSquare === 'h7') {
                                    var oldPerms = this.state.castlePerms;
                                    oldPerms = setCharAt(oldPerms, 3, "3")
                                    this.setState({castlePerms: oldPerms})
                                }
                                return false // To be removed from the board
                            }
                            return curr
                        })
                        .filter(Boolean);
                    oldPerms = this.state.castlePerms;
                    oldPerms = setCharAt(oldPerms, 0, "3");
                    oldPerms = setCharAt(oldPerms, 1, "2");
                }

                if (result === true) {
                    if (piece.name === 'K') {
                        oldPerms = this.state.castlePerms;
                        oldPerms = setCharAt(oldPerms, 0, "3");
                        oldPerms = setCharAt(oldPerms, 1, "3");
                    }
                    if (piece.name === 'R' && fromSquare == 'a1') {
                        oldPerms = this.state.castlePerms;
                        oldPerms = setCharAt(oldPerms, 1, "3");
                    }
                    if (piece.name === 'R' && fromSquare == 'h1') {
                        oldPerms = this.state.castlePerms;
                        oldPerms = setCharAt(oldPerms, 0, "3");
                    }
                    this.setState({pieces: newPieces, castlePerms: oldPerms});
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
        console.log(this.state.castlePerms)
        var result = "empty";


        var oldPerms = this.state.castlePerms;
        if (piece.name === 'k') {
            oldPerms = this.state.castlePerms;
            oldPerms = setCharAt(oldPerms, 2, "3");
            oldPerms = setCharAt(oldPerms, 3, "3");
        }
        if (piece.name === 'R' && from_sq === 'a7') {
            oldPerms = this.state.castlePerms;
            oldPerms = setCharAt(oldPerms, 3, "3");
        }
        if (piece.name === 'R' && from_sq === 'h7') {
            oldPerms = this.state.castlePerms;
            oldPerms = setCharAt(oldPerms, 2, "3");
        }
        this.setState({castlePerms: oldPerms})
        axios.get(`/play-chess`, {
            params: {
                board: `${board}`,
                piece_name: `${piece.name}`,
                piece_index: `${piece.index}`,
                from_square: `${from_sq}`,
                to_square: `${to_sq}`,
                castle_perms: this.state.castlePerms
            }})
            .then(res => {

                //
                // if computer made castle modify the castle permissions accordingly and handle special move
                // e7 -> g7 king side
                // e7 -> c7 queen side
                result = res.data;
                var moves = result.split(',')
                var move_piece = this.getPiece(moves[0])
                var move_piece_index = move_piece[1]
                var move_piece_name = move_piece[0]
                var fromSquare = moves[0]
                var toSquare = moves[1];
                var newPieces = this.state.pieces
                    .map((curr, index) => {
                        if (move_piece_index === index) {
                            return `${move_piece_name}@${toSquare}`
                        } else if (curr.indexOf(toSquare) === 2) {
                            if (curr[0] === 'R' && toSquare === 'a1') {
                                var oldPerms = this.state.castlePerms;
                                oldPerms = setCharAt(oldPerms, 0, "3")
                                this.setState({castlePerms: oldPerms})
                            }
                            else if (curr[0] === 'R' && toSquare === 'h1') {
                                var oldPerms = this.state.castlePerms;
                                oldPerms = setCharAt(oldPerms, 1, "3")
                                this.setState({castlePerms: oldPerms})

                            }
                            return false // To be removed from the board
                        }
                        return curr
                    })
                    .filter(Boolean);
                if (fromSquare === 'e7' && toSquare === 'g7'  && move_piece[0] === 'k') {
                    var rook_index = newPieces.indexOf("r@h7")
                    var rookTosq = 'f7';
                    console.log(newPieces)
                    newPieces = newPieces
                        .map((curr, index) => {
                            if (rook_index === index) {
                                return `r@${rookTosq}`
                            } else if (curr.indexOf(rookTosq) === 2) {
                                return false // To be removed from the board
                            }
                            return curr
                        })
                        .filter(Boolean);
                    var oldPerms = this.state.castlePerms;
                    oldPerms = setCharAt(oldPerms, 2, "2")
                    oldPerms = setCharAt(oldPerms, 3, "3")
                    this.setState({castlePerms: oldPerms})
                }

                else if (fromSquare === 'e7' && toSquare === 'c7' && move_piece[0] === 'k') {
                    var rook_index = newPieces.indexOf("r@a7")
                    var rookTosq = 'd7';
                    newPieces = newPieces
                        .map((curr, index) => {
                            if (rook_index === index) {
                                return `r@${rookTosq}`
                            } else if (curr.indexOf(rookTosq) === 2) {
                                return false // To be removed from the board
                            }
                            return curr
                        })
                        .filter(Boolean);
                    var oldPerms = this.state.castlePerms;
                    oldPerms = setCharAt(oldPerms, 2, "3")
                    oldPerms = setCharAt(oldPerms, 3, "2")
                    this.setState({castlePerms: oldPerms})
                }

                this.setState({pieces: newPieces})
                this.current_pieces = newPieces

                this.setState({allowMoves: true})
            });
    }

}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

export default Chess;

