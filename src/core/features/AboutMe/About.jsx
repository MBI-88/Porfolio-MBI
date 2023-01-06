import './About.css'
import { useState } from 'react';
import { Loader } from '../../../shared/Loading/Loading';
import { BsFacebook, BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs"
import { BiCurrentLocation } from "react-icons/bi"
import ReactTooltip from 'react-tooltip';


const About = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)

    }, 1000)
    return (
        <section className="container">
            {
                loading ?
                    <div className="text-center pt-5">
                        <Loader />
                    </div>
                    : (
                        <article className={loading ? "display-hidden" : "container-fluid text-center ps-lg-5 mt-lg-3 p-0  mt-5 mb-2 pe-lg-5 about-appear"}>
                            <div className="card text-center shadow rounded-5">
                                <div className="p-3 bg-header-cv">
                                    <div className="p-2">
                                        <img className="card-img-top img-fluid rounded w-25" src="./assets/links.png" alt="Title" loading="lazy" decoding="async" />
                                    </div>
                                </div>
                                <div className='d-lg-flex d-md-block d-sm-block gap-3'>
                                    <div className="card-body text-start">
                                        <h4 className='card-title fw-bolder'>Links</h4>
                                        <p className='card-text'>
                                            <a href='mailto:ingmbi8807@gmail.com' >
                                                <h4><BsMailbox data-tip data-for="mail" className='icon-color' /></h4>
                                                <ReactTooltip id="mail" place="right" effect="solid" className="info">
                                                    E-mail
                                                </ReactTooltip>
                                            </a><br />

                                            <a href='https://github.com/MBI-88/'>
                                                <h4> <BsGithub data-tip data-for="github" className='icon-color' /></h4>
                                                <ReactTooltip id="github" place="right" effect="solid" className="info">
                                                    Github
                                                </ReactTooltip>
                                            </a> <br />

                                            <a href='https://www.facebook.com/IngMBI8807'>
                                                <h4> <BsFacebook data-tip data-for="facebook" className='icon-color' /></h4>
                                                <ReactTooltip id="facebook" place="right" effect="solid" className="info">
                                                    Facebook
                                                </ReactTooltip>
                                            </a> <br />

                                            <a href='https://www.linkedin.com/in/mbi-bi'>
                                                <h4> <BsLinkedin data-tip data-for="linkedin" className='icon-color' /></h4>
                                                <ReactTooltip id="linkedin" place="right" effect="solid" className="info">
                                                    Linked in
                                                </ReactTooltip>
                                            </a> <br />
                                        </p>

                                    </div>
                                    <div className='card-body text-start'>
                                        <h4 className='card-title fw-bolder'>References</h4>
                                        <p className='card-text'>
                                            <h6 className='h6'>
                                                Omar Antonio Hernández Duany <br />
                                                Main professor of programming <br />
                                                at José Antonio Echeverria Cujae, Cuba <br />
                                                Computer Engineer <br />
                                            </h6>
                                            <a href='mailto:oahd1963@gmail.com'>
                                                <h4><BsMailbox data-tip data-for="omar" /></h4>
                                            </a>
                                            <ReactTooltip id="omar" place='right' effect='solid' className='info'>
                                                E-mail
                                            </ReactTooltip>

                                            <h6 className='h6'>
                                                Jessica Pedraza <br />
                                                Ministry of Science, <br />
                                                Technology and Environment CITMA, Cuba <br />
                                                Main Esp. <br />
                                            </h6>
                                            <a href='mailto:jessica@citma.gob.cu'>
                                                <h4><BsMailbox data-tip data-for="jessica" /></h4>
                                            </a>
                                            <ReactTooltip id="jessica" place='right' effect='solid' className='info'>
                                                E-mail
                                            </ReactTooltip>

                                            <h6 className='h6'>
                                                Niurka Arms  <br />
                                                Ministry of Science,   <br />
                                                Technology and Environment CITMA, Cuba  <br />
                                                Department Director  <br />
                                            </h6>
                                            <a href='mailto:niurka.armas@citma.gob.cu'>
                                                <h4><BsMailbox data-tip data-for="niurka" /></h4>
                                            </a>
                                            <ReactTooltip id="niurka" place='right' effect='solid' className='info'>
                                                E-mail
                                            </ReactTooltip>
                                        </p>

                                    </div>
                                    <div className='card-body text-start'>
                                        <h4 className='card-title fw-bolder'>Location</h4>
                                        <p className='card-text'>
                                            <a href='https://www.google.com/maps/d/viewer?mid=1r3VtIGnbAeoSO5XL7Q5wdgYZ3wM&hl=en_US&ll=-34.88753697329169%2C-56.183469724385006&z=20'>
                                                <h4> <BiCurrentLocation data-tip data-for="location"/> </h4>
                                            </a>
                                            <ReactTooltip id="location" place='right' effect='solid' className='info'>
                                                Location
                                            </ReactTooltip>
                                        </p>
                                    </div>

                                </div>

                            </div>
                            <div className="space">
                            </div>
                        </article>
                    )
            }
        </section>
    );
};

export default About;