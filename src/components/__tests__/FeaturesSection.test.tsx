import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FeaturesSection from '../FeaturesSection'
import { en } from '@/dictionaries/en'

describe('FeaturesSection', () => {
  const dict = en.features

  it('renders the section title and subtitle', () => {
    render(<FeaturesSection dict={dict} />)

    expect(screen.getByText(dict.title)).toBeInTheDocument()
    expect(screen.getByText(dict.subtitle)).toBeInTheDocument()
  })

  it('renders all feature items', () => {
    render(<FeaturesSection dict={dict} />)

    // Check for each feature title and description from the dictionary
    Object.values(dict.items).forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.desc)).toBeInTheDocument()
    })
  })

  it('renders the correct number of feature cards', () => {
    const { container } = render(<FeaturesSection dict={dict} />)

    // Each feature is in a motion.div (mocked as div) with glass-card class
    const featureCards = container.querySelectorAll('.glass-card')
    const expectedCount = Object.keys(dict.items).length
    expect(featureCards.length).toBe(expectedCount)
  })

  it('renders feature icons', () => {
    const { container } = render(<FeaturesSection dict={dict} />)

    // Check that there are SVG icons rendered
    const svgs = container.querySelectorAll('svg')
    // There are 8 features, each has one icon.
    // The section itself might have other elements but let's check for at least 8 SVGs
    expect(svgs.length).toBeGreaterThanOrEqual(Object.keys(dict.items).length)
  })
})
