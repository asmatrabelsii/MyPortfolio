import React from 'react'

import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css';

const ProjectCard = ( {
    project: { title, description, skills, imageSrc, source }
}) => {
  return <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`image of ${title}`} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill, id) => {
                return <li key={id} className={styles.skill}>{skill}</li>;
            })}
        </ul>
        <div className={styles.links}>
            <a href={source} target="_blank" className={styles.link}>Source</a>
        </div>
    </div>
}

export default ProjectCard
