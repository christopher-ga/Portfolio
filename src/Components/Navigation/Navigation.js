import {useEffect, useState} from 'react';
import styles from '../../styles/Navigation.module.css'
import Button from "@/Components/Button/Button";

const Navigation = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    function handleAboutClick(event) {
        event.preventDefault();
        const aboutSection = document.querySelector('#about');
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function handleProjectsClick(event) {
        event.preventDefault();
        const aboutSection = document.querySelector('#projects');
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function handleContactClick(event) {
        event.preventDefault();
        const meow = document.querySelector('#reachout');
        meow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.open('/resume.pdf', '_blank')
    }

    return (
        <>
            <nav className={`${styles.navigation_grid} ${styles.sticky} ${isScrolled ? styles.scrolled : ''}`}>



                <ul className={` ${styles.navigation_items_right}`}>
                    <li className={styles.hover_text}>
                        <a onClick={handleAboutClick} href="#about">

                        <span style={{color: '#FF9D00'}}>
                            01.</span>&nbsp;About
                        </a>
                    </li>



                    <li className={styles.hover_text}>

                        <a onClick={handleProjectsClick} href='#projects'>
                        <span style={{color: '#FF9D00'}}>02.</span>&nbsp;Work
                        </a>
                        </li>

                    <li className={styles.hover_text}>

                        <a onClick={handleContactClick} href='#reachout'>
                        <span style={{color: '#FF9D00'}}>03.</span>&nbsp;Contact
                        </a>

                        </li>

                    <li><Button onClick={handleClick} padding='10px' width='100px'>Resume</Button></li>

                </ul>
                <img className={styles.burger} src="/portfolioburger.png" alt=""/>
            </nav>


        </>
    )
}

export default Navigation;