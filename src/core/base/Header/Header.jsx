import { Link as RouterLink } from "react-router-dom";
import './Header.css'
import { motion } from 'framer-motion';



const Header = () => {
   
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
            x: -20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1 }
        }
    }
    const item2 = {
        hidden: {
            opacity: 0,
            x: -20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 2 }
        }
    }
    const item3 = {
        hidden: {
            opacity: 0,
            x: -20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 3 }
        }
    }


    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-collapse">
                        <motion.ul 
                            variants={container} initial="hidden" animate="show"
                            className="navbar-nav me-auto mb-2 mb-lg-0"
                        >
                            <motion.li 
                                className="nav-item"
                                variants={item1}
                            >
                                <RouterLink to="/" className="nav-link">
                                    <motion.h1
                                        className="fs-1"
                                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                                    >
                                        Index
                                    </motion.h1>
                                </RouterLink>
                            </motion.li>
                            <motion.li 
                                className="nav-item"
                                variants={item2}
                            >
                                <RouterLink to="/projects" className="nav-link">
                                    <motion.h1
                                        className="fs-1"
                                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                                    >
                                        Projects
                                    </motion.h1>
                                </RouterLink>
                            </motion.li>
                            <motion.li 
                                className="nav-item"
                                variants={item3}
                            >
                                <RouterLink to="/about" className="nav-link">
                                    <motion.h1
                                        className="fs-1"
                                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                                    >
                                        Links
                                    </motion.h1>
                                </RouterLink>
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}



export default Header;