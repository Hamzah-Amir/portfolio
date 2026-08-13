import React from 'react'
import styles from './Stack.module.css'

const Stack = () => {
  return (
    <section id='stack'>
        <div className="wrap">
            <div className={styles['section-head']}>
                <div>
                    <span className={styles['section-num']}>Tool Box</span>
                    <h2>What I build with</h2>
                </div>
                <p className={styles.desc}>A mix of full products built solo and automation systems that replaced hours of manual work.</p>
            </div>
           <div className={styles['stack-grid']}>
            <div className={styles['stack-cell']}>
                <h4>Frontend</h4>
                <ul>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
            <div className={styles['stack-cell']}>
                <h4>Backend</h4>
                <ul>
                    <li>Node.js</li>
                    <li>Django</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className={styles['stack-cell']}>
                <h4>Automation</h4>
                <ul>
                    <li>Webhook Pipelines</li>
                    <li>Third-party API integrations</li>
                </ul>
            </div>
            <div className={styles['stack-cell']}>
                <h4>Databases</h4>
                <ul>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Stack