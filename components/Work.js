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
            </div>
        </section>
    </>
  )
}

export default Work