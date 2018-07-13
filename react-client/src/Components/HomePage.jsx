import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import { URLProvider } from 'react-url';
import selfie from '../images/selfie.png';
import github_icon from '../images/Octocat.jpg'
import ucsd from '../images/UCSD.png'
import home from '../images/home.svg'
import profile from '../images/profile.svg'
import chess from '../images/chess.svg'
// import '../styles/style.css?ts=<?=time()?>'
import '../styles/style.css'
import {AppBar, Tabs, Tab} from 'material-ui';
import Img from 'react-image';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
import background from '../images/blue_background.png';


import Chess from 'react-chess';
import Center from 'react-center';
import axios from 'axios'



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
        this.current_pieces = Chess.getDefaultLineup();
        this.update_pieces = this.update_pieces.bind(this);
        this.preventDragHandler = this.preventDragHandler.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {open: false};
        // this.renderChess = this.renderChess.bind(this);

    }

    handleToggle() {
        this.setState({open: !this.state.open})
    }

    handleClose() {
        this.setState({open: false})
    }

    update_pieces () {
        this.setState({pieces: lineup},function(){
            console.log("force update")
        });

    }
    preventDragHandler () {
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
                {renderBackground()}
                {/*<AppBar title="" style={styles.appBar}>*/}
                    {/*<Tabs style={styles.tabs}>*/}
                        {/*<Tab label="Home" buttonStyle={{fontsize: 40, fontweight: 'bold'}}>*/}

                                    {/*<div className="center-div">*/}
                                        {/*<div className="left-div">*/}
                                            {/*<div className="photo-div">*/}
                                                {/*<h1 className="caligraphy">Elliot</h1>*/}

                                                {/*<Img src={selfie} className="img"/>*/}
                                            {/*</div>*/}
                                            {/*<div class="vertical-menu">*/}
                                                {/*<a href="#" class="active">Home</a>*/}
                                                {/*<a href="#">Link 1</a>*/}
                                                {/*<a href="#">Link 2</a>*/}
                                                {/*<a href="#">Link 3</a>*/}
                                                {/*<a href="#">Link 4</a>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                {/*<Paper className="paper">*/}

                                {renderSideBar()}
                                    {/*<div>*/}
                                        {/*<h1>Elliot Vilhelm Pourmand</h1>*/}
                                        {/*<h4>Computer Scientist studying at the</h4>*/}
                                        {/*<h4>University of California San Diego.</h4>*/}
                                        {/*<Img src={ucsd} className="img-right"/>*/}
                                        {/*<br/>Check Out my <a href="https://github.com/ElliotVilhelm">GitHub!</a>*/}
                                        {/*<Img src={github_icon} className="img-right"/>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                        {/*<table className="center">*/}
                                            {/*<tr>*/}
                                                {/*<th>Language</th>*/}
                                                {/*<th>Proficiency</th>*/}
                                            {/*</tr>*/}
                                            {/*<tr>*/}
                                            {/**/}
                                                {/*<th>Python:</th>*/}
                                                {/*<th>*/}
                                                    {/*<progress value="75" max="100">*/}
                                                    {/*</progress>*/}
                                                {/*</th>*/}
                                            {/*</tr>*/}
                                            {/*<tr>*/}
                                            {/**/}
                                                {/*<th>Java:</th>*/}
                                                {/*<th>*/}
                                                    {/*<progress value="22" max="100">*/}
                                                    {/*</progress>*/}
                                                {/*</th>*/}
                                            {/*</tr>*/}
                                            {/*<tr>*/}
                                            {/**/}
                                                {/*<th>C:</th>*/}
                                                {/*<th>*/}
                                                    {/*<progress value="50" max="100">*/}
                                                    {/*</progress>*/}
                                                {/*</th>*/}
                                            {/*</tr>*/}
                                            {/**/}
                                            {/*<tr>*/}
                                                {/*<th>C++:</th>*/}
                                                {/*<th>*/}
                                                    {/*<progress value="75" max="100">*/}
                                                    {/*</progress>*/}
                                                {/*</th>*/}
                                            {/*</tr>*/}
                                            {/*<tr>*/}
                                                {/*<th>Javascript:</th>*/}
                                                {/*<th>*/}
                                                    {/*<progress value="55" max="100">*/}
                                                    {/*</progress>*/}
                                                {/*</th>*/}
                                            {/*</tr>*/}
                                            {/*<tr>*/}
                                                {/*<th>Ruby on Rails:</th>*/}
                                                {/*<th>*/}
                                                    {/*<progress value="45" max="100">*/}
                                                    {/*</progress>*/}
                                                {/*</th>*/}
                                            {/*</tr>*/}
                                        {/**/}
                                        {/*</table>*/}
                                    {/*</div>*/}
                                {/*</Paper>*/}


                        {/*</Tab>*/}
                        {/*<Tab label="Chess Engine">*/}
                            {/*<div className="chess-div">*/}
                                {/*<Chess pieces={this.state.pieces} onMovePiece={this.handleMovePiece}/>*/}
                            {/*</div>*/}
                        {/*</Tab>*/}
                         {/*<Tab label="Resume">*/}
                            {/*<Center>*/}
                                {/*<div>*/}
                                    {/*<iframe*/}
                                        {/*src="https://docs.google.com/document/d/e/2PACX-1vQuEKG84tB_EgsoYg-L1-BoYtaXDoCyD25wHlUPcvgKVcR4E0NdSyOfkWaDMjoELWDorMhbXgjayPDV/pub?embedded=true"*/}
                                        {/*width="800px"*/}
                                        {/*height="1000px"*/}
                                        {/*align="center"*/}
                                    {/*>*/}
                                    {/*</iframe>*/}
                                {/*</div>*/}
                            {/*</Center>*/}
                        {/*</Tab>*/}
                     {/*</Tabs>*/}
                {/*</AppBar>*/}
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
        // this.update_pieces()

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

function renderBackground() {
    return <img src={background} className='background' />;
}

function renderSideBar() {
    return (
        <Drawer containerClassName='left-drawer' docked={true} zDepth={2}>
            <MenuItem className='menu-item'>
                <Link to={"Home"}>
                    <img src={home} className='img-right'/>
                </Link>
            </MenuItem>
            <MenuItem className='menu-item'>

                <Link to={"About"}>
                    <Img src={profile} className="img-right"/>
                </Link>
            </MenuItem>
            <MenuItem className='menu-item'>
                <Link to={"Chess"}>
                    <img src={chess} className='img-right'/>
                </Link>
            </MenuItem>
        </Drawer>
    );

}




export default HomePage;
