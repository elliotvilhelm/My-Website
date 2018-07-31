import React, {Component} from 'react';
import axios from "axios/index";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {Comments: []}
        this.renderTable = this.renderTable.bind(this);
    }
    componentDidMount() {
        axios.get(`/GetComments`)
            .then(res => {
                const result = res.data;
                this.setState({Comments: result});
                // console.log(this.state)
            });
    }

    renderTable(){
        return(
            <div className="chat-div">
                <table>
                    <tr>
                        <td><h2>User</h2></td>
                        <td><h2>Comment</h2></td>
                    </tr>
                </table>
                {this.state.Comments.map(post => {
                    return (
                        <table>
                            <tr>
                                {/*<td>User</td>*/}
                                <td>{post.poster_name}</td>
                                <td>{post.comment}</td>
                            </tr>
                        </table>
                    )
                })}
            </div>
        );
    }



    render() {
        return (
            <div>
                <div>
                    {this.renderTable()}
                </div>
            </div>

        )
    }
}

export default Comments;