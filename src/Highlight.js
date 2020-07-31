import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';

export default function Highlight() {
    const [state, toggle] = useState(true);
    const props = useSpring({
        from: {width: '0px', background: state ? 'black' : 'lightblue'},
        to: {width: '320px', background: state ? 'lightblue' : 'black'},
        delay: 1500,
    });

    return (
        <div style={wrapper} onClick={() => toggle(!state)}>
            <animated.div style={props}>
                <div style={style}></div>
            </animated.div>
        </div>
    )
}

const style = {
    height: '90px',
}

const wrapper = {
    height: '90px',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '90px',
    display: 'inline',
}