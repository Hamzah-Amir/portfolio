import React from 'react'
import Image from 'next/image'
import styles from './Work.module.css'

const Work = () => {
    const projects = [
        {
            id: 1,
            title: 'Inbox Pilot',
            description: 'A full-stack cold email outreach platform — lead scraping, AI-generated sequences, and send scheduling, with subscription billing built in from day one.',
            kicker: 'SaaS cold email outreach',
            tags: ['Next.js', 'Prisma', 'Mysql', 'Google GenAI'],
            // Put screenshots in /public/projects/ and set e.g. '/projects/inbox-pilot.png'
            image: null,
            liveUrl: "https://www.inboxpilot.pro",
            repoUrl: "https://github.com/Hamzah-Amir/inbox_pilot"
        },
        {
            id: 2,
            title: 'Cartify',
            description: 'full stack buyer and seller based e-commerce website',
            kicker: 'E-commerce website',
            tags: ["Django", "Postgresql"],
            image: null,
            liveUrl: "https://cartify-1h1k.onrender.com/",
            repoUrl: "https://github.com/Hamzah-Amir/Cartify",
        },
    ];

  return (
    <>
        <section id='work'>
            <div className="wrap">
                <div className="section-head reveal">
                    <div>
                        <span className="section-num">Selected Work</span>
                        <h2>Platform and Bots I have shipped</h2>
                    </div>
                    <p className="desc">A mix of full products built solo and automation systems that replaced hours of manual work.</p>
                </div>
                <div className={`${styles['work-grid']}`}>
                    {projects.map((project) => (
                        <div key={project.id} className={`${styles['work-card']} ${project.id === 1 ? styles['featured'] : ''}`}>
                            <div className={styles.shot}>
                                <div className={styles['shot-bar']} aria-hidden="true"><span></span><span></span><span></span></div>
                                <div className={styles['shot-body']}>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} screenshot`}
                                            fill
                                            sizes="(max-width: 800px) 100vw, 1120px"
                                            className={styles['shot-img']}
                                        />
                                    ) : (
                                        <div className={styles['shot-placeholder']}>
                                            <span>{project.title}</span>
                                            <small>Screenshot coming soon</small>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span className={`${styles['kicker']}`}>{project.kicker}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className={`${styles['tag-row']}`}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <a
                                href={project.liveUrl}
                                className={styles['link-capsule']}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Visit site
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}

export default Work