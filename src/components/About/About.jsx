import React from 'react'

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt='Me sitting with a laptop' className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor icon'/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I am a frontend developer with a passion for creating responsive and user-friendly interfaces.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt='Server icon'/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and scalable backend systems and APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ideaIcon.png")} alt='Idea icon'/>
            <div className={styles.aboutItemText}>
              <h3>Research Enthusiast</h3>
              <p>I enjoy exploring new technologies and methodologies to improve my skills and contribute to innovative projects.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
