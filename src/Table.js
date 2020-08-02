import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Table.css';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as Linked } from './linkedin.svg';

export default function Hi() {
    const props = useSpring({
        to: {
            opacity: 1,
            width: '50%',
        },
        from: { 
            opacity: 0,
            width: '45%',
        },
        delay: 3000,
    });

    //all images are #262626
    return (
        <table className='contacts'>
            <animated.td style={props}><a href='https://github.com/andwxu'>
                <Github /></a></animated.td>
            <animated.td style={props}><a href='https://www.linkedin.com/in/andrew-xu-440a90193/'>
                <Linked /></a></animated.td>
        </table>
    )
}