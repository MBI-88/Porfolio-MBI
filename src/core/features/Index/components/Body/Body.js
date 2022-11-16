import './Body.css'

const Body = () => {
    return (
        <div className="d-lg-flex d-md-block d-sm-block  bg-transparent">
            <section id="Background" className=" pe-lg-5 pb-sm-5 pb-md-5">
                <article id="Profile" className="pb-3">
                    <h4 className="card-title fw-bolder">Profile</h4>
                    <p className="card-text">
                        Developer of web applications, desktop and machine-learning algorithms <br />
                        with more than 5 years of <br />
                        experience with languages such as: Python3, JavaScript, SQL. <br />
                        Algorithm solving ability, mathematical skills.<br />
                        Proactivity and dynamism. <br />
                    </p>
                </article>

                <article id="Education" className="pb-3">
                    <section className="pb-3">
                        <h4 className="card-title text-subtitle">TELECOMMUNICATIONS AND ELECTRONICS ENGINEER</h4>
                        <p className="card-text">
                            TECHNOLOGICAL UNIVERSITY OF HAVANA JOSE ANTONIO <br />
                            ECHEVERRIA BIANCHI, CUBA   JUNIO 2021 <br />
                        </p>
                    </section>
                    <section className="pb-3">
                        <h4 className="card-title text-subtitle">INDUSTRIAL ELECTRICAL TECHNICIAN</h4>
                        <p className="card-text">
                            ARACELIO IGLESIAS DIAZ, CUBA 2003-2007
                        </p>
                    </section>
                </article>
                <article id="Skills" className="pb-3">
                    <h4 className="card-title text-subtitle">SKILLS</h4>
                    <p className="card-text">
                        English (intermediate) <br/>
                        Python, JavaScript, SQL, HTML, CSS, TypeScript<br/>
                        Django, Flask, FastApi, Tensorflow, Scikit-learn, OpenCV, Numpy, Pandas, Scikit-image,Scapy, PyTest, PyQt5.<br/>
                        JQuery, Bootstrap, React, Angular, Ionic, Selenium, Jest<br/>
                        Docker, Redis, Git, VirtualBox, Vmware, Hypert-V.<br/>
                        Leadership, organization, teamwork.<br/>
                        MongoDB, PostgreSQL, MySQL server.<br/>
                        OWASP<br/>
                        Windows and Linux systems<br/>
                    </p>
                </article>
            </section>
            <section id="Experience">
                <article id="1" className=" mb-3">
                    <h4 className="card-title fw-bolder">Experience</h4>
                    <h5 className='text-subtitle'>SOFTWARE DEVELOPER PYTHON/DJANGO</h5>
                    <h6>AUTONOMOUS  JAN 2017 – PRESENT</h6>
                    <p className="card-text">
                        Application for image processing.<br />
                        Machine-Learning algorithms<br />
                        Database administration.<br />
                        Web applications: blogs, online sales, platform, social network.<br />
                        Tools for testing networks.<br />
                    </p>
                </article>
                <article id="2" className="mb-3">
                    <h5 className='text-subtitle'>MINISTRY SCIENCE TECHNOLOGY AND ENVIRONMENT</h5>
                    <h6>SOFTWARE QUALITY TESTER  04/11/2022-07/01/2022</h6>
                    <p className="card-text">
                        Penetration testing<br />
                        Website quality test<br />
                        Functional test<br />
                        Integration test<br />
                        Development of measures of quality, and efficiency of the software life cycle<br />
                    </p>

                </article>
                <article id="3" className="mb-3">
                    <h5 className='text-subtitle'>TECHNOLOGICAL UNIVERSITY OF HAVANA</h5>
                    <h6>NETWORK ENGINEER  2019-2021</h6>
                    <p className="card-text">
                        Development of network communication systems.<br />
                        Installation and configuration of devices (routers, switches, firewalls) and servers.<br />
                        Design of highly scalable systems.<br />
                    </p>
                </article>
                <article id="4" className="mb-3">
                    <h5 className='text-subtitle'>CUBAN TELECOMMUNICATIONS COMPANY</h5>
                    <h6>TELEMATICS TECHNICIAN  2007-2014</h6>
                    <p className="card-text">
                        Installation of power plants.<br />
                        Implementation of data networks.<br />
                        Implementation of three-phase and single-phase networks.<br />
                    </p>

                </article>
            </section>
        </div>

    );
};

export default Body;