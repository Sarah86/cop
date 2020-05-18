import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline, SplitLetters } from 'react-gsap'

const LetterTransitions = ({ children }) => (
  <div>
    <div className="section" />
    <Controller>
      <Scene pin={false} reverse={true} duration={500} offset={-300}>
        <Tween
          wrapper={<div className="textContainer" />}
          staggerFrom={{
            left: -2000,
            rotation: -720,
            opacity: 0,
            ease: 'Expo.easeOut',
          }}
          stagger={0.15}
          onCompleteAll={() => {
            console.log('on complete all')
          }}
        >
          <div className="text">
            <SplitLetters>{children}</SplitLetters>
          </div>
        </Tween>
      </Scene>
      <div className="section" />
    </Controller>
    <div className="section" />
  </div>
)

export default LetterTransitions
