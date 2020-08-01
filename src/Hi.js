import React from 'react'
import { useSpring, animated } from 'react-spring';

export default function Hi() {
    const props = useSpring({
        opacity: 1,
        from: { 
            opacity: 0,
            position: 'relative',
        },
        delay: 300,
    });

    const props2 = useSpring({
        opacity: 1,
        from: { 
            opacity: 0,
            position: 'relative',
        },
        delay: 800,
    });

    const props3 = useSpring({
        opacity: 1,
        from: { 
            opacity: 0,
            zIndex: '100',
            position: 'relative',
        },
        delay: 1200,
    });

    const props4 = useSpring({
        opacity: 1,
        from: { 
            opacity: 0,
            zIndex: '100',
            position: 'relative',
        },
        delay: 2000,
    });

    return (
        <div className='introduction'>
            <animated.h1 style={props}>Hi.</animated.h1>
            <animated.h2 style={props2}> I'm </animated.h2>
            <animated.h3 style={props3}>Andrew Xu</animated.h3>
            <animated.h4 style={props4}>CS Student at Georgia Tech</animated.h4>
        </div>
    )
}
