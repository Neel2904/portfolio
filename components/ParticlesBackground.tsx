'use client'

import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from '@/particles-config'

const ParticlesBackground = () => {
  return (
    <Particles params={particlesConfig} />
  )
}

export default ParticlesBackground