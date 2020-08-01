import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

let loaded = false;

export default function Bubble() {
    const [state, toggle] = useState(false);

    const props = useSpring({
        from: { width: '0px', background: state ? 'lightgreen' : 'green', marginLeft: '100px' },
        to: { width: '200px', background: state ? 'green' : 'lightgreen' },
        delay: loaded ? 0 : 4500,
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