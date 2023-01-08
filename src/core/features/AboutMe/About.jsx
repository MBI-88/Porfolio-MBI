import './About.css'
import { BsFacebook, BsGithub, BsLinkedin, BsMailbox, BsWhatsapp } from "react-icons/bs"
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';


const About = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 3
            }
        }
    }

    const item1 = {
        hidden: {
            opacity: 0,
            x: 20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 2 }
        }
    }
    const item2 = {
        hidden: {
            opacity: 0,
            x: 20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 3 }
        }
    }
    const item3 = {
        hidden: {
            opacity: 0,
            x: 20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 4 }
        }
    }
    const item4 = {
        hidden: {
            opacity: 0,
            x: 20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 5 }
        }
    }
    const item5 = {
        hidden: {
            opacity: 0,
            x: 20,

        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 6 },

        }
    }
    
    return (
        <section>
            <div className='height'></div>
            <article className="d-lg-flex flex-row gap-5 pt-lg-5 ">
                <div className="mt-lg-5 p-3 p-lg-0 mt-0">
                    <motion.img
                        className="img-fluid" src="./assets/Porfolio_MBI3.png" alt=""
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0, animationTimingFunction: 'ease-in' }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                </div>
                <motion.div
                    className='mt-5'
                    variants={container}
                    initial="hidden"
                    animate="show"

                >
                    <motion.a
                        className='nav nav-link'
                        href='mailto:ingmbi8807@gmail.com'
                        variants={item1}
                    >
                        <motion.h2
                            initial={{ color: '#0a65b4' }}
                            whileHover={{ color: '#ea0a0a', scale: [null, 1.25] }}
                            transition={{ duration: 0.5 }}
                        >
                            <BsMailbox data-tip data-for="mail" />
                        </motion.h2>
                        <ReactTooltip id="mail" place="top" effect="solid">
                            E-mail
                        </ReactTooltip>
                    </motion.a>

                    <motion.a
                        className='nav nav-link'
                        href='https://github.com/MBI-88/'
                        variants={item2}
                    >
                        <motion.h2
                            initial={{ color: '#0a65b4' }}
                            whileHover={{ color: '#ea0a0a', scale: [null, 1.25] }}
                            transition={{ duration: 0.5 }}
                        >
                            <BsGithub data-tip data-for="github" />
                        </motion.h2>
                        <ReactTooltip id="github" place="top" effect="solid">
                            Github
                        </ReactTooltip>
                    </motion.a>

                    <motion.a
                        className='nav nav-link'
                        href='https://www.facebook.com/IngMBI8807'
                        variants={item3}
                    >
                        <motion.h2
                            initial={{ color: '#0a65b4' }}
                            whileHover={{ color: '#ea0a0a', scale: [null, 1.25] }}
                            transition={{ duration: 0.5 }}
                        >
                            <BsFacebook data-tip data-for="facebook" />
                        </motion.h2>
                        <ReactTooltip id="facebook" place="top" effect="solid">
                            Facebook
                        </ReactTooltip>
                    </motion.a>

                    <motion.a
                        className='nav nav-link'
                        href='https://www.linkedin.com/in/mbi-bi'
                        variants={item4}
                    >
                        <motion.h2
                            initial={{ color: '#0a65b4' }}
                            whileHover={{ color: '#ea0a0a', scale: [null, 1.25] }}
                            transition={{ duration: 0.5 }}
                        >
                            <BsLinkedin data-tip data-for="linkedin" />
                        </motion.h2>
                        <ReactTooltip id="linkedin" place="top" effect="solid">
                            Linked in
                        </ReactTooltip>
                    </motion.a>

                    <motion.a
                        className='nav nav-link'
                        href='https://api.whatsapp.com/send?phone=59891359503'
                        variants={item5}
                    >
                        <motion.h2
                            initial={{ color: '#0a65b4' }}
                            whileHover={{ color: '#ea0a0a', scale: [null, 1.25] }}
                            transition={{ duration: 0.5 }}
                        >
                            <BsWhatsapp data-tip data-for="Wahtsapp" />
                        </motion.h2>
                        <ReactTooltip id="whatsapp" place="top" effect="solid">
                            WhatsApp
                        </ReactTooltip>
                    </motion.a>
                </motion.div>
            </article>

        </section>
    );
};

export default About;