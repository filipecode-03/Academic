import { useState, useEffect } from 'react'

import TestimonialCard from './TestimonialCard'
import TestimonialImage from './TestimonialImage'
import CarouselControls from './CarouselControls'

import { testimonials } from '../data/testimonials'

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    )
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    )
  }

  const testimonial = testimonials[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide()
      }

      if (e.key === 'ArrowLeft') {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }
  }, [])

  return (
    <div className='p-8'>
      <TestimonialImage
        image={testimonial.image}
      />
      <CarouselControls
        onPrev={prevSlide}
        onNext={nextSlide}
      />
      <TestimonialCard
        text={testimonial.text}
        name={testimonial.name}
        role={testimonial.role}
      />
    </div>
  )
}

export default TestimonialsCarousel