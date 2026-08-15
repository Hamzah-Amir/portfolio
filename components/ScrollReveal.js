'use client'

import { useEffect } from 'react'

const ScrollReveal = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal:not(.in)')
    if (!targets.length) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add('in'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}

export default ScrollReveal
