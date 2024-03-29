import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Table.css';
import { ReactComponent as Github } from './images/github.svg';
import { ReactComponent as Linked } from './images/linkedin.svg';
import boba from './images/boba.png';
import junction from './images/junction.png';
import ncr from './images/ncr.png';
import amazon from './images/amazon.jpg';
import rehapp from './images/rehapp.png';
import Tooltip from './Tooltip';

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
            height: '125px',
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

    const employment = useSpring({
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

    const employmenttr1 = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '15px',
        },
        delay: 4300,
    });

    const employmenttr2 = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '15px',
        },
        delay: 4500,
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
        delay: 4700,
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
        delay: 4900,
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
        delay: 5000,
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

    const tr3 = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '15px',
        },
        delay: 6000,
    });

    //all images are #262626
    return (
        <div>
            <table className='contacts'>
                <tbody>
                <tr>
                    <animated.td style={props}><a target='_blank' href='https://github.com/andwxu'>
                        <Github /></a></animated.td>
                    <animated.td style={props}><a target='_blank' href='https://www.linkedin.com/in/andrew-xu-440a90193/'>
                        <Linked /></a></animated.td>
                </tr>
                </tbody>
            </table>

            <animated.div style={aboutText}>
                <animated.h5 style={about} className='about'>About Me</animated.h5>
                <animated.p style={p}>
                    Websites should be fun and <span><Tooltip message={'The headers on this page use Atkinson Hyperlegible, a font designed by the Braille Institute for low-vision readers'} position={'top'}>functional</Tooltip></span>! I'm curious and outgoing by nature, 
                    which might explain why I love helping to put on more than 40 events a year at Tech for the students.
                    <a className="link-1" href='https://studentcenter.gatech.edu/scpc' target="_blank"> Here's what I'm talking about</a>
                </animated.p>
            </animated.div>

            <animated.h6 style={employment}>Employment</animated.h6>
            <table className='employment' cellpadding="0">
                <tbody>
                <animated.tr style={employmenttr1}>
                    <td>
                    <a href='https://www.amazon.jobs/en/teams/aft' target='_blank'><img src={amazon} alt='Amazon'/></a>
                    </td>
                    <td>
                        At Amazon, I worked to implement an end-to-end validation application to verify if configuration settings were in sync
                        for every fulfillment center. The application was built from scratch and ran daily, cutting a ticket if issues were found, sending 
                        weekly email reports to the team, and sending metrics to a metrics portal. 
                    </td>
                </animated.tr>
                <animated.tr style={employmenttr2}>
                    <td>
                    <a href='https://www.ncr.com/restaurants/mobile-online-ordering' target='_blank'><img src={ncr} alt='NCR'/></a>
                    </td>
                    <td>
                        I worked at NCR during the 2021 Summer and Fall as an intern on the Digital Ordering team. I worked with a team
                        to add global metric tracking to the Aloha Online Ordering white label app, utilizing Microsoft
                        Application Insights to capture logs and build analytics dashboards. In the Fall, I picked up regular tickets and worked
                        alongside the team to implement features to the digital ordering website.
                    </td>
                    
                </animated.tr>
                </tbody>
            </table>

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
                        DynamoDB
                    </animated.td>
                    <animated.td style={props2}>
                        S3
                    </animated.td>
                    <animated.td style={props2}>
                        EC2
                    </animated.td>
                </tr>
                </tbody>
            </table>

            <animated.h5 style={project}>Projects</animated.h5>
            <table className='projects' cellpadding="0">
                <tbody>
                <animated.tr style={tr1}>
                    <td>
                    <a href='https://github.com/jjacobs44/Junior-Design-1324' target='_blank'><img src={rehapp} alt='rehapp'/></a>
                    </td>
                    <td>
                        Rehapp is a Android/iOS mobile application built in Flutter that is designed to 
                        help stroke survivors and therapists connect for the rehabilitation process. Therapists can assign 
                        exercises, and patients can complete them, providing feedback to the therapist immediately and without the use of 
                        paper entries.
                    </td>
                </animated.tr>
                <animated.tr style={tr2}>
                    <td>
                    <a href='https://github.com/andwxu/slackbot' target='_blank'><img src={boba} alt='bobabot'/></a>
                    </td>
                    <td>
                        Bobabot is a slack app designed as a replacement for Donut bot. It pairs
                        people together each week to get to know each other, keeps track of 
                        points earned for participating in club activities, and uses Google sheets
                        API as a backend to keep track of members.
                    </td>
                </animated.tr>
                <animated.tr style={tr3}>
                    <td>
                        <a href='https://github.com/andwxu/hackgt' target='_blank'><img src={junction} alt='junction'/></a>
                    </td>
                    <td>
                        Junction is a hackathon project to bring consumers and merchants together
                        on an online ordering solution. Consumers can choose to support their local businesses,
                        and businesses can view valuable analytics about their restaurants.
                    </td>
                </animated.tr>
                </tbody>
            </table>
        </div>
    )
}