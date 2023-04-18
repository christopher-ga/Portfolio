import styles from "../../styles/ExternalLink.module.css"

const ExternalLink = ({link}) => {

    return (
        <>
            <div className={styles.vertical_icons}>
                <a target="_blank" rel="noopener noreferrer" href={link}>
                    <i className="bi bi-box-arrow-up-right"></i></a>
            </div>
        </>
    )


}

export default ExternalLink;