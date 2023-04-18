import styles from '../../styles/ProjectR.module.css';
import ProjectTile from "@/Components/Projects/ProjectTile";

import intersectionStyles from "../../styles/slideIn.module.css"
import ExternalLink from "@/Components/Icons/ExternalLink";
import useIntersectionObserver from '../useIntersectionObserver';

const ProjectR = ({showGit, link, image, projectName, projectDescription}) => {
    const [ref, isIntersecting] = useIntersectionObserver({}, 0.5);

    return (
        <>


            <div
                ref={ref}
                className={`${intersectionStyles.slide_in} ${isIntersecting ? intersectionStyles.visible : ''}`}
            >
                <section className={styles.projects_container}>
                    <div className={styles.projects_container_left}>
                        <img src="/nutriscan.png" alt=""/>
                        <a target="_blank" rel="noopener noreferrer" href={link}><div className={styles.overlay}></div></a>
                        <div className={styles.banana}></div>
                    </div>


                    <div className={styles.projects_container_right}>

                        <p className={styles.tag}>Featured Project</p>
                        <p className={styles.project_title}>{projectName}</p>

                        <div className={styles.testBox}>
                            <p>{projectDescription}</p>
                        </div>

                        <div className={styles.tech_row}>
                            <p>React</p>
                            <p>Heroku</p>
                        </div>

                        <div className={styles.tech_row}>
                            <p>MongoDB</p>
                            <p>NodeJS</p>
                            <p>Express</p>
                        </div>

                        <div className={styles.tech_row}>
                            <ExternalLink
                                link="https://nutriscan.herokuapp.com/"
                            ></ExternalLink>
                        </div>

                    </div>
                </section>

                <ProjectTile
                    projectName={projectName}
                    projectDescription={projectDescription}
                    image={image}
                    link={link}
                    showGit={showGit}
                />
            </div>
        </>

    );
};

export default ProjectR;