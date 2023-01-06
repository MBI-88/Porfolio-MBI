import { Link as RouterLink } from "react-router-dom";
import './Header.css'
import { motion } from 'framer-motion';


const Header = () => {


    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-transparent position-fixed">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-header"
                        aria-controls="navbar-header" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-bg-danger rounded-2"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-header">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <motion.li className="nav-item">
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
                            <motion.li className="nav-item">
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
                            <motion.li className="nav-item">
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
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}



export default Header;