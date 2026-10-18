'use client'

import { useEffect } from 'react'

const ScrollReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    const scan = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        if (prefersReducedMotion) el.classList.add('in')
        else observer.observe(el)
      })
    }

    scan()

    // Pick up .reveal elements added or replaced after mount (client navigation, hot reload)
    const mutations = new MutationObserver(scan)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [])

  return null
}

export default ScrollReveal
