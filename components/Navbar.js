'use client'

import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className={`${styles.navbar} wrap`}>
        <Link href="#top" className={`${styles.logo}`} aria-label="hamza.dev" onClick={closeMenu}>
          <span className={`${styles.dot}`} aria-hidden="true"></span>
          <span>hamza</span>
          <span style={{ color:'var(--muted)', fontWeight: '400'}}>
            .dev
          </span>
        </Link>
        <button
          className={`${styles.navToggle}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((prev) => !prev)}
        >
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <div className={`${styles.navLinks} ${open ? styles.open : ''}`} id="nav-links">
          <Link href="#work" onClick={closeMenu}>Work</Link>
          <Link href="#stack" onClick={closeMenu}>stack</Link>
          <Link href="#contact" className='btn btn-primary' onClick={closeMenu}>Get in touch</Link>
        </div>
    </nav>
  )
}

export default Navbar
