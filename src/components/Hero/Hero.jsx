import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Asma</h1>
        <p className={styles.description}>I am a web developer and research enthusiast. I blend creativity with logic to build meaningful digital solutions. Feel free to reach out!</p>
        <a href="mailto:trabelsi7asma@gmail.com" className={styles.contactBtn}>Contact me</a>
      </div>
      <img src={getImageUrl("about/hero.png")} alt="Asma's Avatar" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>;
}

export default Hero
