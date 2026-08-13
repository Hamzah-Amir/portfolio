import React from 'react'
import styles from './Work.module.css'  

const Work = () => {
  return (
    <>
        <section id='work'>
            <div className="wrap">
                <div className={`${styles["section-head"]} ${styles.reveal}`}>
                    <div>
                        <span className={`${styles["section-num"]}`}>Selected Work</span>
                        <h2>Platform and Bots I have shipped</h2>
                    </div>
                    <p className={styles.desc}>A mix of full products built solo and automation systems that replaced hours of manual work.</p>
                </div>
                <div className={`${styles['work-grid']}`}>
                    <div className={`${styles['work-card']} ${styles['featured']}`}>
                        <span className={`${styles['kicker']}`}>SaaS cold email outreach</span>
                        <h3>Inbox Pilot</h3>
                        <p>A full-stack cold email outreach platform — lead scraping, AI-generated sequences, and send scheduling, with subscription billing built in from day one.</p>
                        <div className={`${styles['tag-row']}`}>
                            <span className={styles.tag}>Next.js</span>
                            <span className={styles.tag}>Prisma</span>
                            <span className={styles.tag}>Mysql</span>
                            <span className={styles.tag}>Google GenAI</span>
                        </div>
                    </div>
                    <div className={`${styles['work-card']}`}>
                        <span className={`${styles['kicker']}`}>SaaS cold email outreach</span>
                        <h3>Inbox Pilot</h3>
                        <p>A full-stack cold email outreach platform — lead scraping, AI-generated sequences, and send scheduling, with subscription billing built in from day one.</p>
                        <div className={`${styles['tag-row']}`}>
                            <span className={styles.tag}>Next.js</span>
                            <span className={styles.tag}>Prisma</span>
                            <span className={styles.tag}>Mysql</span>
                            <span className={styles.tag}>Google GenAI</span>
                        </div>
                    </div>
                    <div className={`${styles['work-card']}`}>
                        <span className={`${styles['kicker']}`}>SaaS cold email outreach</span>
                        <h3>Inbox Pilot</h3>
                        <p>A full-stack cold email outreach platform — lead scraping, AI-generated sequences, and send scheduling, with subscription billing built in from day one.</p>
                        <div className={`${styles['tag-row']}`}>
                            <span className={styles.tag}>Next.js</span>
                            <span className={styles.tag}>Prisma</span>
                            <span className={styles.tag}>Mysql</span>
                            <span className={styles.tag}>Google GenAI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Work