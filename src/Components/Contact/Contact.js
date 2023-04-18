import styles from '../../styles/Contact.module.css'
import Button from "@/Components/Button/Button";

import intersectionStyles from "../../styles/slideIn.module.css"
import useIntersectionObserver from '../useIntersectionObserver';

const Contact = () => {
    const [ref, isIntersecting] = useIntersectionObserver({}, 0.5);
    return (

        <div ref={ref} className={`${intersectionStyles.slide_in} ${isIntersecting ? intersectionStyles.visible : ''}`} >
            <section id="reachout" className={styles.contact}>
                <h2>
                    <span className={styles.number_font} style={{color: '#FF9D00'}}>03. </span>
                    Contact
                </h2>

                <h3>Get in Touch</h3>
                <p>I am always looking for opportunities to connect with other established or aspiring software developers. Feel free to reach out if you want to connect or have a question!</p>

                <div className={styles.vertical_icons}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/christopher-ga"><i className="bi bi-github"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopher-a-gar"><i className="bi bi-linkedin"></i></a>
                </div>

                <a href="mailto:chrisga@sas.upenn.edu?subject=Let's Connect!&body=Type your message here"
                   className={styles.emailButton}>
                    <Button margin='20px' padding='17px' width='150px'>Say Hello</Button>
                </a>
            </section>
        </div>

    )
}

export default Contact;