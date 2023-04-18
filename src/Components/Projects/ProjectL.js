import styles from '../../styles/ProjectL.module.css';
import ProjectTile from "@/Components/Projects/ProjectTile";
import intersectionStyles from "../../styles/slideIn.module.css"
import useIntersectionObserver from '../useIntersectionObserver';

import ExternalLink from "@/Components/Icons/ExternalLink";
import GithubLink from "@/Components/Icons/GithubLink";

const ProjectL = ({showGit, gitLink, tech, image, projectName, projectDescription, link}) => {
    const [ref, isIntersecting] = useIntersectionObserver({}, 0.5);
    return (
        <>

            <div
                ref={ref}
                className={`${intersectionStyles.slide_in} ${isIntersecting ? intersectionStyles.visible : ''}`}
            >
                <section id='projects' className={styles.projects_container}>
                    <div className={styles.projects_container_left}>
                        <img src={image} alt=""/>
                        <a target="_blank" rel="noopener noreferrer" href={link}>
                            <div className={styles.overlay}></div>
                        </a>
                        <div className={styles.hold}></div>
                    </div>

                    <div className={styles.projects_container_right}>

                        <p className={styles.tag}>Featured Project</p>
                        <p className={styles.project_title}>{projectName}</p>

                        <div className={styles.testBox}>
                            <p>{projectDescription}</p>
                        </div>

                        <div className={styles.tech_row}>
                            <p>{tech.t1}</p>
                            <p>{tech.t2}</p>
                            <p>{tech.t3}</p>
                        </div>
                        <div className={styles.tech_row}>
                            <p>{tech.t4}</p>
                            <p>{tech.t5}</p>
                            <p>{tech.t6}</p>
                        </div>
                        <div className={styles.tech_row_icons}>

                            <ExternalLink
                                link={link}
                            ></ExternalLink>

                            {showGit && <GithubLink
                                link={gitLink}
                            ></GithubLink>}


                        </div>

                    </div>
                </section>


                <ProjectTile
                    projectName={projectName}
                    projectDescription={projectDescription}
                    image={image}
                    gitlink={gitLink}
                    link={link}
                    showGit={showGit}
                />
            </div>
        </>

    );
};

export default ProjectL;