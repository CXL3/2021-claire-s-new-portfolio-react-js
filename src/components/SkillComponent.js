import React, { useState, useRef } from 'react'

import { useSpring, animated } from 'react-spring'
import ReactParticles from 'react-particles-js'

function Skill() {
  return (
    <section id='skill'>
      <div id='skillComponent'>
        <Particles>
          <Hero>
            <div className='container'>
              <Info />
              <div className='row'>
                {cards.map((card, i) => (
                  <div className='col-lg-4 d-flex align-items-stretch mx-auto mt-3'>
                    <Card>
                      <div className='card-title'>{card.title}</div>
                      <div className='card-body'>{card.description}</div>
                      <Image
                        ratio={card.imageRatio}
                        
                        resizeMode='stretch'
                        src={card.image}
                      />
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Hero>
        </Particles>
      </div>
    </section>
  )
}
export default Skill

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef()

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false)

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    }
  })

  return (
    <animated.div
      ref={ref}
      className='card'
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft))

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop))

        // Set animated values based on mouse position and card dimensions
        const dampen = 50 // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07, // Scale
        ]

        // Update values to animate to
        setAnimatedProps({ xys: xys })
      }}
      onMouseLeave={() => {
        setHovered(false)
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] })
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  )
}

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  )
}

function Hero({ children }) {
  return (
    <div className='hero'>
      <div className='hero-body'>{children}</div>
    </div>
  )
}

function Image({ ratio, src }) {
  return (
    <div className='image-container'>
      <div className='image-inner-container'>
        <div
          className='ratio'
          style={{
            paddingTop: ratio * 100 + '%',
          }}
        >
          <div className='ratio-inner'>
            <img src={src} alt={src} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Info() {
  return (
    <div>
      <h1
        style={{
          color: 'white',
          fontSize: 38,
          ontSize: '5em',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
        }}
      >
        SKILLS
      </h1>
    </div>
  )
}

const cards = [
  {
    title: 'Fullstack web and mobile development⚡️',
    description: '',
    image: 'assets/images/fullstack.jpg',
    imageRatio: 784 / 1016,
  },
  {
    title: 'Android Development by Java 👩‍🎨',
    description: 'Published applications since 2016.',
    image: 'assets/images/android.jpg',
    imageRatio: 839 / 1133,
  },
  {
    title: 'Certified AWS Solution Architect 🚀',
    description: '',
    image: 'assets/images/AWS.jpg',
    imageRatio: 730 / 1030,
  },
]
