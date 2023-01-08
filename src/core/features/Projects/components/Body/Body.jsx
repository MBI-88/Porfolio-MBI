import './Body.css';
//import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Details from '../Details/Details';


const Body = ({ data }) => {

    return (
        <motion.article
            className='container-fluid mt-5 p-4'
            initial={{ opacity: 0, y: 300 }}
            whileInView={{
                opacity: 1, y: 0,
                transition: { duration: 1 },
            }}
            viewport={{ once: true }}
        >
            <motion.div
                className="row row-cols-lg-4 row-cols-1 mt-2  rounded-5"
                initial={{borderColor: 'ActiveBorder',borderWidth: 2, borderStyle: 'solid'}}
                animate={{
                    borderColor: ['#fc0505', '#fcf405', '#5ffc05', '#00f6ff','#fa00ff'],
                    animationTimingFunction: 'ease-out'
                }}
                transition={{ duration: 0.5, repeat: Infinity }}

            >
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
            </motion.div>
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