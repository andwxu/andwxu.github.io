import React from 'react'
import { useSpring, animated } from 'react-spring';

export default function Hi() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 300,
    });

    const props2 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 800,
    });

    const props3 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1200,
    });

    const props4 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 2000,
    });

    const props5 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 2500,
    });

    return (
        <div>
            <animated.h1 style={props}>Hi.</animated.h1>
            <animated.h2 style={props2}> I'm</animated.h2>
            <animated.h3 style={props3}>Andrew Xu</animated.h3>
            <animated.h4 style={props4}>•</animated.h4>
            <animated.h5 style={props5}>CS Student at Georgia Tech</animated.h5>
        </div>
    )
}