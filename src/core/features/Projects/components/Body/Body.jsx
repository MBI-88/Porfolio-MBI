import './Body.css';
//import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Details from '../Details/Details';


const Body = ({ data }) => {

    return (
        <motion.article
            className='container-fluid mt-5'
            initial={{ opacity: 0, y: 300 }}
            whileInView={{opacity: 1, y: 0, transition: {duration: 1}}}
            viewport={{ once: true }}
        >
            <div className="row row-cols-lg-4 row-cols-1 ps-lg-5 mt-lg-3 mt-5 mb-2 pe-lg-5">
                {
                    data.map(item =>
                    (
                        <motion.div
                            className="col col-md-0 col-sm-0 pb-5" key={item.id}
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0, animationTimingFunction: 'ease-in' }}
                            transition={{ duration: 1.8, delay: 1 }}
                        >
                            <Details dataItem={item} />
                        </motion.div>

                    )
                    )
                }
            </div>
            {/*
                <RouterLink to={`/project-details/`} state={item} className="btn btn-primary">
                    <motion.h4
                        className='fs-4 fw-bold'
                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Info
                    </motion.h4>
                </RouterLink>
            */}
        </motion.article>
    )
}


export default Body