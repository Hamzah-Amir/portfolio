import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
        <div className="wrap">
            <div className={styles.foot}>
                <div>
                    <p>&copy; 2026 Hamza Amir - Developer</p>
                </div>
                <div>
                    <p>Karachi, PK . Available for work</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer