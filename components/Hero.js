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
            <div className={styles['pipeline-wrap']}>
                <div className={styles['pipeline-label']}>
                    <span>SAMPLE PIPELINE - PRODUCT RESEARCH BOT</span>
                    <span className={styles['live']}>RUNNING</span>
                </div>
                <svg className="pipeline" viewBox="0 0 980 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of an automation pipeline: source API to queue to logic to output">
          <path className={styles['pipe-line']} d="M150,75 H310" />
          <path className={styles['pipe-line']} d="M430,75 H590" />
          <path className={styles['pipe-line']} d="M710,75 H870" />
 
          <circle className={styles['pipe-dot']} r="4"><animateMotion dur="3s" repeatCount="indefinite" path="M150,75 H310" /></circle>
          <circle className={styles['pipe-dot']} r="4"><animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M430,75 H590" /></circle>
          <circle className={styles['pipe-dot']} r="4"><animateMotion dur="3s" begin="2s" repeatCount="indefinite" path="M710,75 H870" /></circle>
 
          <g>
            <rect className={styles['node-box']} x="30" y="45" width="120" height="60" rx="8" />
            <text className={styles['node-label']} x="90" y="72" textAnchor="middle">Keepa API</text>
            <text className={styles['node-sub']} x="90" y="88" textAnchor="middle">source data</text>
          </g>
          <g>
            <rect className={styles['node-box']} x="310" y="45" width="120" height="60" rx="8" />
            <text className={styles['node-label']} x="370" y="72" textAnchor="middle">MySQL</text>
            <text className={styles['node-sub']} x="370" y="88" textAnchor="middle">queue &amp; store</text>
          </g>
          <g>
            <rect className={styles['node-box']} x="590" y="45" width="120" height="60" rx="8" />
            <text className={styles['node-label']} x="650" y="72" textAnchor="middle">Profit logic</text>
            <text className={styles['node-sub']} x="650" y="88" textAnchor="middle">JS worker</text>
          </g>
          <g>
            <rect className={styles['node-box']} x="870" y="45" width="80" height="60" rx="8" />
            <text className={styles['node-label']} x="910" y="72" textAnchor="middle">Discord</text>
            <text className={styles['node-sub']} x="910" y="88" textAnchor="middle">alert</text>
          </g>
        </svg>
            </div>
        </div>
    </section>
  )
}

export default Hero