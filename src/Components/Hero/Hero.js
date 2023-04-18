
import styles from '../../styles/Hero.module.css'

import Button from "@/Components/Button/Button";

const Hero = () => {

    const handleClick = () => {
        window.open('/resume.pdf', '_blank')
    }

    return (
        <>
            <section className={styles.hero_grid}>
                <p className={styles.above_header}>
                    Hi, my name is
                </p>

                <h2 className={styles.big_name_header}>
                    Christopher Garcia.
                </h2>

                <h2 className={styles.big_role_header}>
                    Fullstack Software Developer.
                </h2>

                <p className={styles.small_mission_header}>
                    I’m a self-taught software engineer looking to build creative and useful applications. Currently, I am focused on finding professional opportunities that can expand my skillset while also providing insight into effective software design practices.
                </p>

                    <Button onClick={handleClick} margin='20px' padding='17px' width='250px'>Check out my resume!</Button>
            </section>
        </>
    )
}

export default Hero;