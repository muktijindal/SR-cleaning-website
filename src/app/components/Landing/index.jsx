import React from 'react'
import { HeroSection } from './HeroSection'
import { FAQ } from './FAQ'
import OurTeam from './OurTeam'
import { OurService } from './OurService'

export const Landing = () => {
  return (
    <div>
        <HeroSection />
        <OurService />
        <OurTeam />
        <FAQ />
    </div>
  )
}
