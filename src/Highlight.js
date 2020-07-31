import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Highlight() {
    const props = useSpring({
        from: { width: '0px', background: 'lightblue' },
        to: { width: '320px' },
        delay: 1500,
    });

    const props2 = useSpring({
        from: { width: '0px', background: 'lightyellow', marginLeft: '145px'},
        to: { width: '140px' },
        delay: 3000,
    });

    return (
        <div style={wrapper}>
            <animated.div style={props}>
                <div style={style}></div>
            </animated.div>
            <animated.div style={props2}>
                <div style={style2}></div>
            </animated.div>
        </div>
    )
}

const style = {
    height: '90px',
    textAlign: 'center',
    verticalAlign: 'middle',
}

const style2 = {
    height: '30px',
    textAlign: 'center',
    verticalAlign: 'middle',
}

const wrapper = {
    height: '90px',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '90px',
    display: 'inline',
}