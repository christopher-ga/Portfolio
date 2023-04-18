import styles from "../../styles/ProjectCard.module.css"
import intersectionStyles from "../../styles/slideIn.module.css"
import useIntersectionObserver from '../useIntersectionObserver';

import GithubLink from "@/Components/Icons/GithubLink";
import ExternalLink from "@/Components/Icons/ExternalLink";

const ProjectCard = () => {
    const [ref, isIntersecting] = useIntersectionObserver({}, 0.5);
    return (
        <>
            <div
                ref={ref}
                className={`${intersectionStyles.slide_in} ${isIntersecting ? intersectionStyles.visible : ''}`}
            >
                <div className={styles.header}>Other Noteworthy Projects</div>

                <section className={styles.projects_grid}>


                    <div className={styles.container}>
                        <i className="bi bi-folder"></i>
                        <a target="_blank" rel="noopener noreferrer" href="https://christopher-ga.github.io/Wordle/"><p className={styles.title}>Wordle Game Clone</p></a>
                        <p className={styles.description}>A clone of the popular word game owned by the New York Times.
                            Built with vanilla Javascript.</p>
                        <div className={styles.tech_container}>
                            <ExternalLink
                                link="https://christopher-ga.github.io/Wordle/"
                            ></ExternalLink>
                            <GithubLink
                                link="https://github.com/christopher-ga/Wordle"
                            ></GithubLink>
                        </div>
                        <div className={styles.tech_container}>
                            <p>Javascript</p>
                            <p>CSS</p>
                            <p>HTML</p>
                        </div>
                    </div>


                    <div className={styles.container}>
                        <i className="bi bi-folder"></i>
                        <p className={styles.title}>Personal Website</p>
                        <p className={styles.description}>My current portfolio website.</p>
                        <div className={styles.tech_container}>
                            <GithubLink
                                link="https://icons.getbootstrap.com/icons/github/"
                            />
                        </div>

                        <div className={styles.tech_container}>
                            <p>NextJS</p>
                            <p>React</p>
                        </div>
                    </div>


                </section>

            </div>
        </>
    )


}

export default ProjectCard;