import './Index.css';
import { motion } from "framer-motion";
import Body from './components/Body/Body';


const Index = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1
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
            transition: { duration: 1.5, delay: 1 }
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
            transition: { duration: 1.5, delay: 2 }
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
            transition: { duration: 1, delay: 3 }
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
            transition: { duration: 1, delay: 4 }
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
            transition: { duration: 1, delay: 5 }
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
            transition: { duration: 1, delay: 6 }
        }
    }


    return (
        <div>
            <section className='index-background'>
                <div className='container d-lg-flex flex-row align-content-center'>
                    <motion.img
                        initial={{ scale: 1.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                        src="/assets/Porfolio_MBI2.png"
                        className="img-fluid ps-lg-5 rounded-pill"
                    >
                    </motion.img>
                    <motion.ul variants={container} initial="hidden" animate="show" className='text-start pt-5 ps-5'>
                        <motion.li className='nav nav-item text-start' variants={item1}>
                            <h3 className='fs-1 fw-bold text-color'>
                                Hi, my name is Michael
                            </h3>
                        </motion.li>
                        <motion.li className='nav nav-item text-start' variants={item2}>
                            <h3 className='fs-1 fw-bold text-color'>
                                I'm a software developer
                            </h3>
                        </motion.li>
                        <motion.li className='nav nav-item text-start'>

                        </motion.li>
                        <motion.li className='nav nav-item text-start' variants={item3}>
                            <h3 className='fs-1 fw-bold text-color'>
                                and
                            </h3>
                        </motion.li>
                        <motion.li className='nav nav-item text-start' variants={item4}>
                            <h3 className='fs-1 fw-bold text-color'>
                                I love my job
                            </h3>
                        </motion.li>
                        <motion.li className='nav nav-item text-start' variants={item5}>
                            <h3 className='fs-1 fw-bold text-color'>
                                Efficiency and Productivity
                            </h3>
                        </motion.li>
                        <motion.li className='nav nav-item text-start' variants={item6}>
                            <h3 className='fs-1 fw-bold text-color'>
                                are my main skills
                            </h3>
                        </motion.li>

                    </motion.ul>
                </div>
            </section>
            <Body />
        </div>


    );
};

export default Index;