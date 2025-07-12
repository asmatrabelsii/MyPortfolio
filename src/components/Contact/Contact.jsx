import React from 'react'

import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:trabelsi7asma@gmail.com">trabelsi7asma@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
            <a href="https://www.linkedin.com/in/asma-trabelsi-230b1a260/">https://www.linkedin.com/in/asma-trabelsi-230b1a260/</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
            <a href="https://github.com/asmatrabelsii">https://github.com/asmatrabelsii</a>
        </li>
    </ul>
  </footer>
}

export default Contact
