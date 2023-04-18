import styles from '../../styles/ProjectTile.module.css';
import ExternalLink from "@/Components/Icons/ExternalLink";
import GithubLink from "@/Components/Icons/GithubLink";

const ProjectTile = ({showGit=true, gitlink, link, overlayColor, projectName, projectDescription, image  }) => {
    return (
        <div className={styles.grid_container}>
            <img src={image} alt="" className={styles.background_image} />
            <div
                className={styles.text_container}
                style={{ backgroundColor: overlayColor }}
            >

                <p className={styles.tag}>Featured Project</p>

                <div className={styles.title_container}>

                    <a target="_blank" rel="noopener noreferrer" href={link}><p className={styles.project_title}>{projectName}</p></a>
                </div>


                <div className={styles.testBox}>
                    <p>{projectDescription}</p>
                </div>

                <div className={styles.tech_row}>
                    <p>NextJS</p>
                    <p>React</p>
                    <p>Heroku</p>
                    <p>Heroku</p>
                </div>

                <div className={styles.icon_container}>
                    <ExternalLink
                        link={link}
                    ></ExternalLink>


                    {showGit &&   <GithubLink
                        link={gitlink}
                    ></GithubLink>
                    }
                </div>

            </div>
        </div>
    );
};

export default ProjectTile;