import styles from "../../styles/SectionBreak.module.css"
import intersectionStyles from "../../styles/slideIn.module.css"
import useIntersectionObserver from '../useIntersectionObserver';

const SectionBreak = ({text, number}) => {

    const [ref, isIntersecting] = useIntersectionObserver({}, 0.5);


    return (
        <>
            <div
                ref={ref}
                className={`${intersectionStyles.slide_in} ${isIntersecting ? intersectionStyles.visible : ''}`}
            >
                <section className={styles.about_grid}>
                    <div className={styles.about_left}>
                        <div className={styles.header_line_container}>
                            <h2><span className={styles.number_font}
                                      style={{color: '#FF9D00'}}>0{number}.</span>&nbsp;&nbsp;{text}</h2>
                            <div className={styles.line}></div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default SectionBreak;