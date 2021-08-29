import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Table.css';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as Linked } from './linkedin.svg';
import boba from './boba.png'
import recipe from './recipe.png'

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

    const about = useSpring({
        to: {
            opacity: 1,
            top: '-50px',
        },
        from: { 
            opacity: 0,
        },
        delay: 3500,
    });

    const aboutText = useSpring({
        to: {
            width: '100%',
            top: '-23px',
        },
        from: { 
            position: 'relative',
            width: '0%',
            background: '#fcf5ee',
            height: '135px',
            zIndex: '2',
            display: 'block',
            top: '-33px',
        },
        delay: 3300,
    });

    const p = useSpring({
        to: {
            opacity: 1,
            top: '-10px',
            
        },
        from: { 
            opacity: 0,
            top: '-20px',
            minWidth: '400px',
        },
        delay: 3800,
    });

    const skill = useSpring({
        to: {
            opacity: 1,
            top: '-15px',
        },
        from: { 
            opacity: 0,
            top: '-25px',
        },
        delay: 4200,
    });

    const props2 = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '10px',
        },
        delay: 4400,
    });

    const project = useSpring({
        to: {
            opacity: 1,
            top: '-35px',
        },
        from: { 
            opacity: 0,
            top: '-45px',
        },
        delay: 4700,
    });

    const tr1 = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '15px',
        },
        delay: 5300,
    });

    const tr2 = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '15px',
        },
        delay: 5800,
    });

    //all images are #262626
    return (
        <div>
            <table className='contacts'>
                <tbody>
                <tr>
                    <animated.td style={props}><a href='https://github.com/andwxu'>
                        <Github /></a></animated.td>
                    <animated.td style={props}><a href='https://www.linkedin.com/in/andrew-xu-440a90193/'>
                        <Linked /></a></animated.td>
                </tr>
                </tbody>
            </table>

            <animated.div style={aboutText}>
                <animated.h5 style={about} className='about'>About Me</animated.h5>
                <animated.p style={p}>
                    I'm a programmer with a deep love for art and design. I'm curious and outgoing by nature, 
                    which might explain why I love working with student organizations at Tech to host movie events for thousands of students, baking,
                    reading, and solving problems.
                </animated.p>
            </animated.div>

            <animated.h5 style={skill}>Skills</animated.h5>
            <table className='skills'>
                <tbody>
                <tr>
                    <animated.td style={props2}>
                        React
                    </animated.td>
                    <animated.td style={props2}>
                        Javascript
                    </animated.td>
                    <animated.td style={props2}>
                        Java
                    </animated.td>
                </tr>
                <tr className='row2'>
                    <animated.td style={props2}>
                        Photoshop
                    </animated.td>
                    <animated.td style={props2}>
                        Node.js
                    </animated.td>
                    <animated.td style={props2}>
                        Illustrator
                    </animated.td>
                </tr>
                </tbody>
            </table>

            <animated.h5 style={project}>Projects</animated.h5>
            <table className='projects' cellpadding="0">
                <tbody>
                <animated.tr style={tr1}>
                    <td>
                    <a href='https://github.com/andwxu/slackbot'><img src={boba} alt='bobabot'/></a>
                    </td>
                    <td>
                        Bobabot is a slack app designed as a replacement for Donut bot. It pairs
                        people together each week to get to know each other, keeps track of 
                        points earned for participating in club activities, and uses Google sheets
                        API as a backend to keep track of members.
                    </td>
                </animated.tr>
                <animated.tr style={tr2}>
                    <td>
                        <a href='https://github.com/andwxu/projectrecipe'><img src={recipe} alt='recipeapp'/></a>
                    </td>
                    <td>
                        Project Recipe is an ongoing project to categorize and display recipes
                        across the web in a visually appealing manner. The frontend is done in
                        React.
                    </td>
                </animated.tr>
                </tbody>
            </table>
        </div>
    )
}