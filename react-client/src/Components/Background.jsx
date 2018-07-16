import React, {Component} from 'react';

import background from '../images/blue_background.png';

const style = {
    display: 'inline-block',
    margin: '40px 32px 16px 0',
};

class Background extends Component {
    render() {
        return (
            <img src={background} className='background' />
        )
    }
}

export default Background;

