import styles from '../../styles/About.module.css';
import Image from "next/image";
import useIntersectionObserver from '../useIntersectionObserver';

const About = () => {

    const [ref, isIntersecting] = useIntersectionObserver({}, 0.1);

    return (

        <div ref={ref} className={`${styles.slide_in} ${isIntersecting ? styles.visible : ''}`}>
            <section id='about' className={styles.about_grid}>

                <div className={styles.about_left}>
                    <div className={styles.header_line_container}>
                        <h2><span className={styles.number_font}
                                  style={{color: '#FF9D00'}}>01.</span>&nbsp;&nbsp;About&nbsp;Me</h2>
                        <div className={styles.line}></div>
                    </div>

                    <p className={styles.p1}>
                        Hey there! My name is Christopher and I am a tenacious, self-taught software developer who
                        aspires to create impactful work.
                    </p>


                    <p className={styles.p2}>
                        I recently graduated from the University of Pennsylvania with a degree in Health Policy & Law.
                        Most of my professional work has been centered around politics and non-profit work, but after graduation,
                        I decided to commit myself full time to learning everything I need to know to become a job ready
                        software developer.
                    </p>

                    <p className={styles.p3}>
                        I am equipped with an unconventional background, which makes me well positioned and excited to
                        solve unique problems through software design.
                    </p>

                    <p className={styles.p4}>
                        Here are some of the technologies I have been working with recently:
                    </p>

                    <div className={styles.skills}>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>NextJS</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>

                        <ul>
                            <li>NodeJS</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.about_right}>
                    <div className={styles.image_container}>
                        <Image className={styles.headshot} src="/test.jpg" alt="hi" layout="fill" quality={100}
                               objectFit="cover"/>

                        {/*<div className={styles.overlay}></div>*/}

                        <div className={styles.underlay}></div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default About;