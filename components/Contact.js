import React from 'react'
import styles from './Contact.module.css' 

const Contact = () => {
  return (
    <>
    <section id="contact" className={styles["contact"]}>
        <div className="wrap">
        <div className={`${styles['contact-inner']} ${styles['reveal']}`}>
            <div>
            <h2>Have a system that needs building?</h2>
            <p className={styles["sub"]}>Freelance and contract work — web platforms, SaaS products, and automation. Based in Karachi, working async-friendly with clients anywhere.</p>
            </div>
            <div className={styles["contact-links"]}>
            <a href="mailto:hello@ashglobals.co">hello@ashglobals.co</a>
            <a href="https://www.github.com/Hamzah-Amir" target="_blank" rel="noopener">github.com/Hamzah-Amir</a>
            <a href="https://www.linkedin.com/in/hamza-amir-a7b628429/" target="_blank" rel="noopener">linkedin.com/in/hamza-amir</a>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Contact