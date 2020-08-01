import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

let loaded = false;

export default function Bubble1() {
    const [state, toggle] = useState(false);

    const props = useSpring({
        from: { width: '0px', background: state ? 'lightpink' : 'red', marginLeft: '50px'},
        to: { width: '200px', background: state ? 'red' : 'lightpink' },
        delay: loaded ? 0 : 4000,
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
    marginTop: '15px',
}