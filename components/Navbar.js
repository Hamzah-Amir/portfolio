import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} wrap`}>
        <Link href="#top" className={`${styles.logo}`} aria-label="hamza.dev">
          <span className={`${styles.dot}`} aria-hidden="true"></span>
          <span>hamza</span>
          <span style={{ color:'var(--muted)', "fontWweight": "400"}} className={``}>
            .dev
          </span>
          <button className={`${styles.navToggle}`} id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </Link>
        <div className={`${styles.navLinks}`} id="nav-links">
          <Link href="#work">Work</Link>
          <Link href="#stack">stack</Link>
          <button className='btn btn-primary'><Link href="#contact">Get in touch</Link></button>
        </div>
    </nav>
  )
}

export default Navbar