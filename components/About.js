import React from 'react'
import Image from 'next/image'
import styles from './About.module.css'

// Put your photo in /public and set e.g. '/hamza.jpg'
const photo = null
// Put your résumé in /public and set e.g. '/resume.pdf' — the button is hidden until then
const resumeUrl = null

const facts = [
    { label: 'Based in', value: 'Karachi, Pakistan' },
    { label: 'Focus', value: 'Web platforms & automation' },
    { label: 'Availability', value: 'Freelance & contract' },
]

const About = () => {
  return (
    <section id="about">
        <div className="wrap">
            <div className={`${styles['about-grid']} reveal`}>
                <div className={styles.photo}>
                    {photo ? (
                        <Image src={photo} alt="Hamza Amir" fill sizes="(max-width: 800px) 240px, 300px" className={styles['photo-img']} />
                    ) : (
                        <span className={styles.initials} aria-hidden="true">HA</span>
                    )}
                </div>
                <div>
                    <span className="section-num">About</span>
                    <h2>Developer who likes the boring work automated.</h2>
                    <p className={styles.bio}>
                        I&apos;m Hamza, a full-stack developer and automation engineer based in Karachi. I build
                        products end to end — from the database and backend logic to the interface people
                        actually use — mostly with Next.js and Django.
                    </p>
                    <p className={styles.bio}>
                        Beyond the product itself, I care about what runs behind it: the bots, pipelines and
                        integrations that take repetitive work off people&apos;s plates. I work with clients
                        remotely, async-friendly, across time zones.
                    </p>
                    <dl className={styles.facts}>
                        {facts.map((fact) => (
                            <div key={fact.label}>
                                <dt>{fact.label}</dt>
                                <dd>{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                    {resumeUrl && (
                        <a href={resumeUrl} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                            Download résumé
                        </a>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
