import styles from '../styles/Home.module.css'
import {useEffect} from 'react';


import Navigation from '../Components/Navigation/Navigation'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import ProjectL from "@/Components/Projects/ProjectL";
import ProjectR from "@/Components/Projects/ProjectR";
import ProjectCard from "@/Components/Projects/ProjectCard";

import SectionBreak from "@/Components/SectionBreak/SectionBreak";
import Contact from "@/Components/Contact/Contact";

export default function Home() {

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    return (
        <>

            <Navigation/>
            <Hero/>
            <About/>
            <SectionBreak
                text='Projects'
                number='2'
            />

            <ProjectL
                image={"/jobHarvest.png"}
                projectName='Job Harvest'
                projectDescription="A web app for accessing recent job postings from 4 major job board websites.
                Utilizes a variety of web scraping techniques to harvest the newest job postings and store them in a
                backend database. Also demonstrates NextAuth functionality."
                link="https://jobharvest.herokuapp.com"
                gitLink = "https://github.com/christopher-ga/JobHarvest"
                showGit={true}

                tech={{
                    t1: 'React',
                    t2: 'NextJS',
                    t3: 'Heroku',
                    t4: 'MongoDB',
                    t5: 'NodeJS',
                    t6: 'NexAuth',
                }}
            />

            <ProjectR
                image={"/nutriscan.png"}
                projectName='NutriScan'
                projectDescription="A web app to access information over a food item by scanning its barcode. Useful to quickly
                determine if your food item is vegan and halal, and to see related food item prices at 3 grocery stores."
                link="https://nutriscan.herokuapp.com/"
                showGit={false}

            />

            <ProjectL
                image={"/kyraPortfolio.png"}
                projectName='Art Portfolio'
                projectDescription="A client project. Artist is able to display artwork through a responsive website and receive requests for commission work. Client is able to upload additional material through protected backend endpoint for dynamic display."
                link="https://kyra-portfolio.herokuapp.com/"
                tech={{
                    t1: 'React' ,
                    t2: 'NextJS',
                    t3: 'Heroku',
                    t6: 'NodeJS',
                }}
                showGit={false}
            />

            <ProjectCard/>
            <Contact></Contact>

            <div className={styles.container}>
                <div className={styles.line}></div>

                <div className={styles.vertical_icons}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/christopher-ga"><i
                        className="bi bi-github"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopher-a-gar"><i
                        className="bi bi-linkedin"></i></a>
                </div>

                <div className={styles.vertical_email}>
                    <p>chrisga@sas.upenn.edu</p>
                </div>

                <div className={styles.line2}></div>
            </div>
        </>
    )
}
