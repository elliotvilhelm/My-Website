import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import SideBar from "./SideBar";
import '../styles/style.css'

const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class Stuff extends Component {
    render() {
        return (
                <Paper className='paper'>
                    <SideBar/>
                    <div style={{"padding-top": '200px'}}>
                    <div className="stuff-div">
                    <h3>Page under construction, enjoy these links</h3>
                    <ul>
                        <li><a href={"https://medium.com/@huntie/10-essential-vim-plugins-for-2018-39957190b7a9"}>10-essential-vim-plugins-for-2018</a></li>
                        <li><a href={"http://cs231n.github.io/"}>Stanford's CS231n</a></li>
                        <li><a href={"https://www.commandlinefu.com/commands/browse/last-week/sort-by-votes"}>Command Line Fu - Top Commands of the Week</a></li>
                        <li><a href={"http://thume.ca/howto/2014/12/02/using-mjolnir-an-extensible-osx-window-manager/"}>mjolnir OSX Window Manager</a></li>
                        {/*<l1>curl parrot.live</l1>*/}
                    </ul>
                    {/*<h2>Maybe do:</h2>*/}
                    {/*<ul>*/}
                        {/*<l1>git stars component</l1>*/}
                    {/*</ul>*/}
                    </div>
                    </div>
                </Paper>
        )
    }
}

export default Stuff;

// maybe make a feed for this stuff
// https://api.github.com/users/elliotvilhelm/starred
