import './Body.css'
import { motion } from 'framer-motion'
import { HiOutlineDownload } from 'react-icons/hi'
import {
    IoLogoJavascript, IoLogoPython, IoLogoHtml5,
    IoLogoCss3, IoLogoSass, IoLogoAngular
} from 'react-icons/io'
import {
    SiTypescript, SiTensorflow, SiMysql,
    SiPostgresql, SiMongodb, SiDocker
} from 'react-icons/si'
import { SiDjango, SiFlask, SiFastapi, SiOwasp, SiGoland } from 'react-icons/si'
import { FaBootstrap, FaLinux, FaWindows, FaReact } from 'react-icons/fa'


const Body = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 6
            }
        }
    }

    const item1 = {
        hidden: {
            opacity: 0,
            y: -20
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 3 }
        }
    }
    const item2 = {
        hidden: {
            opacity: 0,
            y: -25
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 4 }
        }
    }
    const item3 = {
        hidden: {
            opacity: 0,
            y: -30
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 5 }
        }
    }
    const item4 = {
        hidden: {
            opacity: 0,
            y: -35
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 6 }
        }
    }
    const item5 = {
        hidden: {
            opacity: 0,
            y: -40
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 7 }
        }
    }
    const item6 = {
        hidden: {
            opacity: 0,
            y: -45
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 8 }
        }
    }
    const item7 = {
        hidden: {
            opacity: 0,
            y: -50
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 9 }
        }
    }

    return (
        <section>
            <section>
                <motion.div id='Review'
                    className="container pt-5"
                    initial={{
                        opacity: 0,
                        y: 400
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1 },
                    }}
                    viewport={{ once: true }}
                >
                    <motion.h1 className='fs-1 text-start'
                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    >
                        Background
                    </motion.h1>
                    <div className='text-start p-3 mt-5'>
                        <h3 className='fs-3 text-color'>
                            I'm a Telecommunications and Electronics engineer.
                            I'm a fan of technologies and the internet. When I learned how to programme,
                            I never stopped doing it. Of all the aspects that my career offers me, I chose programming.
                            I started with small applications using C++, since it was the first language I learned. Then,
                            I made small console applications to manage user registries and small databases.
                            But I decided that C++ was not the language I identified with,
                            it took too long to be developed. As far as C# concerns,
                            I was more comfortable using it and I was able to make larger scale applications with graphical interfaces,
                            one of them was a tool for a Telecommunications Fundamentals course where you could measure bandwidth
                            and bit rate among other variables.
                            Then I found Python and with it offered a lot of advantages for different branches of programming.
                            Python was everything I was looking for. After a time of experience, I reproduced several applications
                            that I had already done before and others in the field of Cybersecurity, where it has great domain. I worked
                            with artificial intelligence and data science, in web development with frameworks like Django, Flask and FastApi,
                            also in the development of desktop applications with the PyQT5 and PySide framework. Certainly, Python is an all-rounder.
                            Also, while working with this technology,
                            I was programming relational databases such as MySQL, PostgresSQL and non-relational databases such as MongoDb.
                            I had to learn JavaScript, HTML5 and CSS5 as part of web development, since Django did not provide me with all the necessary
                            tools for a good graphic design.
                            As a result, I got acquainted with React and Angular. 
                            I have worked with React more because it is my main front-end tool.
                            Currently, I have continuous improvement of my skills and I often look for information about new technologies.

                        </h3>
                    </div>
                </motion.div>
            </section>
            <section>
                <div id='Main' className='container pt-5'>
                    <motion.h1 className='fs-1 text-start'
                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    >
                        I have worked with these technologies
                    </motion.h1>

                    <motion.article
                        className='d-lg-flex d-md-flex flex-row align-content-center p-3 mt-5'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1, y: 0, transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='container-fluid text-center'>
                            <motion.ul variants={container} initial="hidden" animate="show" className='text-center'>
                                <motion.li variants={item1} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <IoLogoJavascript />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item2} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <IoLogoPython />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item3} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiGoland />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item4} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <IoLogoHtml5 />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item5} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <IoLogoCss3 />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item6} className="nav nav-item">
                                    <h3 className='fs-1 text-color'>
                                        <IoLogoSass />
                                    </h3>
                                </motion.li>
                                <motion.li variants={item7} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiTypescript />
                                    </h2>
                                </motion.li>
                            </motion.ul>
                        </div>

                        <div className='container-fluid text-center'>
                            <motion.ul variants={container} initial="hidden" animate="show" className='text-center'>
                                <motion.li variants={item1} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiDjango />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item2} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiFlask />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item3} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiFastapi />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item4} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <FaReact />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item5} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <IoLogoAngular />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item6} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <FaBootstrap />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item7} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiTensorflow />
                                    </h2>
                                </motion.li>

                            </motion.ul>
                        </div>

                        <div className='container-fluid text-center'>
                            <motion.ul variants={container} initial="hidden" animate="show" className='text-center'>
                                <motion.li variants={item1} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiMysql />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item2} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiPostgresql />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item3} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiMongodb />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item4} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiDocker />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item5} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <FaLinux />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item6} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <FaWindows />
                                    </h2>
                                </motion.li>
                                <motion.li variants={item7} className="nav nav-item">
                                    <h2 className='fs-1 text-color'>
                                        <SiOwasp />
                                    </h2>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </motion.article>
                </div>
                <motion.a
                    href='/assets/CV-MBI-EN.pdf'
                    className='container nav nav-link'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className='fs-4 fw-bold text-start'
                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                        Resumé <HiOutlineDownload />
                    </motion.h3>
                </motion.a>
            </section>
        </section>
    );
};

export default Body;