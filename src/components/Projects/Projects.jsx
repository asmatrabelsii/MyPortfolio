import React from 'react'

import projects from '../../data/projects';
import ProjectCard from './ProjectCard';

import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>{
            projects.map((project, id) => {
            return (
                <ProjectCard key={id} project={project} />
            )
        })}</div>
    </section>
  )
}

export default Projects
