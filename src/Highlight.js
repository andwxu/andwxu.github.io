import React from 'react';
import { useSpring, animated } from 'react-spring';
import buzz from './images/buzz.png';

export default function Highlight() {
    const props = useSpring({
        from: { 
            width: '0px', 
            background: 'lightblue', 
            marginLeft: '124px',
            position: 'relative',
            zIndex: '50',
        },
        to: { width: '155px' },
        delay: 2400,
    });

    const props2 = useSpring({
        from: { 
            width: '0px', 
            background: '#ffef8a', 
            marginLeft: '153px', 
            marginTop: '5px',
            position: 'relative',
            zIndex: '50',
        },
        to: { width: '100px' },
        delay: 2800,
    });

    const buzzSpring = useSpring({
        from: { 
            opacity: 0,
            top: '-20px',
            right: '-40px',
        },
        to: {
            opacity: 1,
            top: '20px',
            right: '10px',
        },
        delay: 3100,
    });

    return (
        <div className='highlights' style={wrapper2}>
            <animated.div className='blueHighlight' style={props}>
                <div style={style}></div>
            </animated.div>
            <animated.div style={props2}>
                <div style={style2}></div>
            </animated.div>
            <animated.img style={buzzSpring} src={buzz}></animated.img>
        </div>
    )
}

const style = {
    height: '30px',
}

const style2 = {
    height: '19px',
}

const wrapper = {
    position: 'absolute',
    margin: '0 auto',
    textAlign: 'center',
}

const wrapper2 = {
    position: 'relative',
    margin: '0 auto',
    width: '300px',
    height: '55px',
    top: '-54px',
}