import React, {Component} from 'react';
import { URLProvider } from 'react-url';
import '../styles/style.css'
import SideBar from './SideBar'
import Paper from 'material-ui/Paper'
import Comments from './Comments'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Postgres from '../images/postgres.png'
import axios from "axios/index";



class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {user: "user", comment: "Enter a Comment"};
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }
    handleCreate() {
        axios.post(`/PostComment`, {
            params: {
                poster_name: `${this.state.user}`,
                comment: `${this.state.comment}`
            }})
            .then(res => {
                result = res.data;
            });
    }

    handleUserChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        });
    }

    handleCommentChange({ target: { name, value } }){
        return this.setState({
            [name]: value
        });
    }

    render() {

        return (

            <div>
                <SideBar/>
                <Paper className='paper'>
                    <div className="chat-info-div">
                        <h2>Leave me a comment:</h2>
                        <form onSubmit={this.handleCreate}>
                            <TextField
                                name='user'
                                label='User'
                                value={this.state.user}
                                onChange={this.handleUserChange}
                                margin='normal'
                            />
                            <TextField
                                name='comment'
                                label='Comment'
                                value={this.state.comment}
                                onChange={this.handleCommentChange}
                                margin='normal'
                            />
                            <RaisedButton
                                type='submit'
                                color='primary'
                                variant='raised'
                            >
                                Create
                            </RaisedButton>
                        </form>
                    </div>
                    <Comments/>
                    <div className="chat-info-div">
                        <h2>Comments are stored on PostgreSQL Database hosted on Heroku</h2>
                        <img src={Postgres} className='img-postgres'/>
                    </div>
                </Paper>
            </div>

        )
    }
}

export default Chat;