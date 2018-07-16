import React, {Component} from 'react';
import axios from "axios/index";
import ReactChess from 'react-chess'
import SideBar from './SideBar'




class Chess extends Component {
    constructor(props) {
        super(props);

        this.state = {open: false, pieces: ReactChess.getDefaultLineup()};
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
            <div className="chess-div">
                <SideBar/>
                <ReactChess pieces={this.state.pieces} onMovePiece={this.handleMovePiece}/>
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

            });
    }

}

export default Chess;
