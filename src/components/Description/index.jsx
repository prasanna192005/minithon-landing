import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "Empowering women to elevate brands in the digital age.Together, we will redefine the status quo. Authentic and fearless, always leading the way.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>With a passion for creativity and collaboration, I stand for the strength and resilience of women, fostering a community where we uplift and inspire one another.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About Us</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
