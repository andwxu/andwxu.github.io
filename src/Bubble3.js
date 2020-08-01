import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

let loaded = false;

export default function Bubble() {
    const [state, toggle] = useState(false);

    const props = useSpring({
        from: { width: '0px', background: state ? '#dfbdff' : 'purple', marginLeft: '150px' },
        to: { width: '200px', background: state ? 'purple' : '#dfbdff' },
        delay: loaded ? 0 : 5000,
    });

    return (
        <div>
            <animated.div style={props} onClick={() => {loaded = true;toggle(!state);}}>
                <div style={style}></div>
            </animated.div>
        </div>
    )
}

const style = {
    height: '75px',
    marginTop: '25px',
}