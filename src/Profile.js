import React from 'react'
import andrew from './andrew.jpg'
import { useSpring, animated } from 'react-spring';

export default function Profile() {
  const onOpen = useSpring({
    config: { friction: 40 },
    from: {
      top: '0%', 
      left: '0%', 
      width: '0%', 
      height: '0%',
      background: '#262626',
      position: 'absolute',
    },
    to: {
      width: '100%',
      height: '100%',
      background: '#fafafa',
    },
    delay: 500,
  });

  const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 900,
  });

  const propsDiv = useSpring({
      config: { friction: 40 },
      from: { zIndex: '100', top: '25px', marginLeft: '25px', width: '0px', height: '15px', background: 'lightblue' },
      to: async next => {
        while (1) {
          await next({ marginLeft: '25px', width: '70px' })
          await next({ marginLeft: '115px', width: '0px' })
          await next({ marginLeft: '25px', opacity: 0 })
          await next({ opacity: 1 })
        }
      },
      delay: 3500,
  });

  const propsDiv2 = useSpring({
      config: { friction: 30 },
      from: { zIndex: '100', top: '150px', marginLeft: '10px', width: '0px', height: '15px', background: '#ffb6b6', },
      to: async next => {
        while (1) {
          await next({ marginLeft: '10px', width: '70px' })
          await next({ marginLeft: '80px', width: '0px' })
          await next({ marginLeft: '10px', opacity: 0 })
          await next({ opacity: 1 })
        }
      },
      delay: 4000,
  });

  const propsDiv3 = useSpring({
      config: { friction: 35 },
      from: { zIndex: '100', top: '80px', marginLeft: '145px', width: '0px', height: '15px', background: 'lightgreen' },
      to: async next => {
        while (1) {
          await next({ marginLeft: '145px', width: '70px' })
          await next({ marginLeft: '235px', width: '0px' })
          await next({ marginLeft: '145px', opacity: 0 })
          await next({ opacity: 1 })
        }
      },
      delay: 4400,
  });

  const propsDiv4 = useSpring({
      config: { friction: 43 },
      from: { zIndex: '100', top: '175px', marginLeft: '160px', width: '0px', height: '15px', background: '#feceab' },
      to: async next => {
        while (1) {
          await next({ marginLeft: '160px', width: '70px' })
          await next({ marginLeft: '230px', width: '0px' })
          await next({ marginLeft: '160px', opacity: 0 })
          await next({ opacity: 1 })
        }
      },
      delay: 4700,
  });

  return (
      <div className='profile'>
        <animated.div style={onOpen} />
        <animated.div className='profile-box' style={propsDiv} />
        <animated.div className='profile-box' style={propsDiv2} />
        <animated.div className='profile-box' style={propsDiv3} />
        <animated.div className='profile-box' style={propsDiv4} />
        <animated.img style={props} src={andrew} />
      </div>
  )
}