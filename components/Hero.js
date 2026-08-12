import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className={styles.hero} styles="border-top: none; padding-top: 72px">
        <div className="wrap">
            <div className={styles.eyebrow}><span className={styles.bar}></span>KARACHI, PAKISTAN - AVALABLE FOR FREELANCE &amp; CONTRACT WORK</div>
            <h1>I build software that works <span className={styles.accent}>while you don&apos;t.</span></h1>
            <p>Full-stack developer and automation engineer. I design and ship production web platforms, then build the bots and pipelines that quietly automate the busywork behind them</p>
            <div className={styles['hero-cta']}>
                <button className="btn btn-primary"><Link href="#work">See my work</Link></button>
                <button className="btn btn-ghost"><Link href="#contact">Start a project</Link></button>
            </div>
        </div>
    </section>
  )
}

export default Hero