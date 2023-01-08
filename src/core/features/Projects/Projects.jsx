import { useEffect, useReducer } from "react";
import { Loader } from "../../../shared/Loading/Loading";
import { GetApi } from "../../services/Helpers";
import Body from "./components/Body/Body";
import { motion } from 'framer-motion';
import './Projects.css'



const apiUrl = process.env.REACT_APP_API_URL
const userName = process.env.REACT_APP_NAME


const custumeState = (states, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...states, loading: true, error: false
            }
        case 'FETCHING':
            return {
                ...states, loading: false, error: false, data: action.payload
            }
        case 'ERROR':
            return {
                ...states, loading: false, error: true
            }

        default: throw new Error()
    }

}

const Projects = () => {
    const [state, setState] = useReducer(custumeState, {
        data: [], loading: true, error: false
    })

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 2
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
            transition: { duration: 1.5, delay: 4 }
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
            transition: { duration: 1.5, delay: 5 }
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
            transition: { duration: 1, delay: 6 }
        }
    }
    const item4 = {
        hidden: {
            opacity: 0,
            x: -20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 7 }
        }
    }
    const item5 = {
        hidden: {
            opacity: 0,
            x: -20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 8 }
        }
    }

    useEffect(() => {
        setState({ type: 'LOADING' })
        GetApi(apiUrl + `${userName}/repos`)
        .then(response => response.json())
        .then(result => {
          setState({type: 'FETCHING', payload: result})
        })
        .catch(() => {
          setState({ type: 'ERROR' })
        })
    }, [])

    return (
        <div>
            <section>
                <motion.div
                    className="d-lg-flex flex-row align-content-center"
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1, animationTimingFunction: 'linear' }}
                    transition={{ duration: 1.2 }}
                >
                    <motion.img
                        className="img-fluid rounded-3 w-auto"
                        src="/assets/Porfolio_MBI_Face.png"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0, animationTimingFunction: 'ease-in' }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />

                    <div className="mt-5 pt-lg-5">
                        <motion.ul variants={container} initial="hidden" animate="show" className="mt-lg-5 pt-lg-5">
                            <motion.li variants={item1} className='nav nav-item text-start'>
                                <h3 className='fs-1 fw-bold text-color'>
                                    My
                                </h3>
                            </motion.li>
                            <motion.li variants={item2} className='nav nav-item text-start'>
                                <h3 className='fs-1 fw-bold text-color'>
                                    Full
                                </h3>
                            </motion.li>
                            <motion.li variants={item3} className='nav nav-item text-start'>
                                <h3 className='fs-1 fw-bold text-color'>
                                    Stack
                                </h3>
                            </motion.li>
                            <motion.li variants={item4} className='nav nav-item text-start'>
                                <h3 className='fs-1 fw-bold text-color'>
                                    Projects
                                </h3>
                            </motion.li>
                            <motion.li variants={item5} className='nav nav-item text-start'>
                                <h3 className='fs-1 fw-bold text-color'>
                                    Here
                                </h3>
                            </motion.li>
                        </motion.ul>
                    </div>

                    <motion.div
                        className="mt-5 ps-lg-5 ms-lg-5 text-end"
                        initial={{ scale: 1.5 }}
                        animate={{ scale: 1, animationTimingFunction: 'linear' }}
                        transition={{ duration: 1.2, delay: 10}}

                    >
                        <motion.img
                            className="img-fluid w-100"
                            src="/assets/Web.png"
                            initial={{ opacity: 0, x: 250 }}
                            animate={{ opacity: 1, x: 0, animationTimingFunction: 'inherit' }}
                            transition={{ duration: 4, delay: 10 }}
                        />
                    </motion.div>

                </motion.div>

            </section>

            <section className="mt-5">
                <div className="space"></div>
                {
                    state.loading ?
                        <div className="text-center mt-5">
                            <Loader />
                        </div> : state.Error ? <div className="container text-center pt-5 bg-danger">
                            <h3 className=" h3 fw-bold pt-3">Connection error</h3>
                        </div> :
                            (
                                <Body data={state.data} />

                            )
                }
            </section>
        </div>


    );
};

export default Projects;