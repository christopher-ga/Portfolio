import styles from "../../styles/GithubLink.module.css"

const GithubLink = ({link}) => {

    return (
        <>
            <div className={styles.vertical_icons}>
                <a target="_blank" rel="noopener noreferrer" href={link}><i className="bi bi-github"></i></a>
            </div>
        </>
    )


}

export default GithubLink;