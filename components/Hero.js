import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'

const nodes = [
    { label: 'Keepa API', sub: 'source data' },
    { label: 'MySQL', sub: 'queue & store' },
    { label: 'Profit logic', sub: 'JS worker' },
    { label: 'Discord', sub: 'alert' },
]

// Horizontal layout (desktop): x position and width of each node
const hNodes = [
    { x: 30, w: 120 },
    { x: 310, w: 120 },
    { x: 590, w: 120 },
    { x: 870, w: 80 },
]
const hPaths = ['M150,75 H310', 'M430,75 H590', 'M710,75 H870']

// Vertical layout (mobile): y position of each node
const vNodes = [20, 140, 260, 380]
const vPaths = ['M120,80 V140', 'M120,200 V260', 'M120,320 V380']

const Dots = ({ paths }) => paths.map((path, i) => (
    <circle key={path} className={styles['pipe-dot']} r="4">
        <animateMotion dur="3s" begin={`${i}s`} repeatCount="indefinite" path={path} />
    </circle>
))

const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className="wrap">
            <div className={styles.eyebrow}><span className={styles.bar}></span>KARACHI, PAKISTAN - AVAILABLE FOR FREELANCE &amp; CONTRACT WORK</div>
            <h1>I build software that works <span className={styles.accent}>while you don&apos;t.</span></h1>
            <p>Full-stack developer and automation engineer. I design and ship production web platforms, then build the bots and pipelines that quietly automate the busywork behind them</p>
            <div className={styles['hero-cta']}>
                <Link href="#work" className="btn btn-primary">See my work</Link>
                <Link href="#contact" className="btn btn-ghost">Start a project</Link>
            </div>
            <div className={styles['pipeline-wrap']}>
                <div className={styles['pipeline-label']}>
                    <span>SAMPLE PIPELINE - PRODUCT RESEARCH BOT</span>
                    <span className={styles['live']}>RUNNING</span>
                </div>

                <svg className={styles.pipeline} viewBox="0 0 980 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of an automation pipeline: source API to queue to logic to output">
                    {hPaths.map((d) => <path key={d} className={styles['pipe-line']} d={d} />)}
                    <Dots paths={hPaths} />
                    {nodes.map((node, i) => {
                        const { x, w } = hNodes[i]
                        return (
                            <g key={node.label}>
                                <rect className={styles['node-box']} x={x} y="45" width={w} height="60" rx="8" />
                                <text className={styles['node-label']} x={x + w / 2} y="72" textAnchor="middle">{node.label}</text>
                                <text className={styles['node-sub']} x={x + w / 2} y="88" textAnchor="middle">{node.sub}</text>
                            </g>
                        )
                    })}
                </svg>

                <svg className={styles['pipeline-vertical']} viewBox="0 0 240 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of an automation pipeline: source API to queue to logic to output">
                    {vPaths.map((d) => <path key={d} className={styles['pipe-line']} d={d} />)}
                    <Dots paths={vPaths} />
                    {nodes.map((node, i) => {
                        const y = vNodes[i]
                        return (
                            <g key={node.label}>
                                <rect className={styles['node-box']} x="40" y={y} width="160" height="60" rx="8" />
                                <text className={styles['node-label']} x="120" y={y + 27} textAnchor="middle">{node.label}</text>
                                <text className={styles['node-sub']} x="120" y={y + 43} textAnchor="middle">{node.sub}</text>
                            </g>
                        )
                    })}
                </svg>
            </div>
        </div>
    </section>
  )
}

export default Hero
