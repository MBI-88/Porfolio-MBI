import { Link as RouterLink } from "react-router-dom";
import './Header.css'
import { AiFillHome, AiFillFolder, AiFillApi } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';


const Header = () => (
    <header>
        <ul className="nav flex-lg-column flex-md-column flex-sm-row header-background-nav pt-lg-5">
            <li className="nav-item">
                <RouterLink to="/" className="nav-link text-light">
                    <h3><AiFillHome data-tip data-for="index" /></h3>
                    <ReactTooltip id="index" place="right" effect="solid" className="tooltip">
                        Index
                    </ReactTooltip>
                </RouterLink>
            </li>
            <li className="nav-item">
                <RouterLink to="/projects" className=" nav-link text-light">
                    <h3><AiFillFolder data-tip data-for="projects" /></h3>
                    <ReactTooltip id="projects" place="right" effect="solid" className="tooltip">
                        Projects
                    </ReactTooltip>
                </RouterLink>
            </li>
            <li className="nav-item">
                <RouterLink to="/about" className=" nav-link text-light">
                    <h3><AiFillApi data-tip data-for="link" /></h3>
                    <ReactTooltip id="link" place="right" effect="solid" className="tooltip">
                        Links
                    </ReactTooltip>
                </RouterLink>
            </li>
        </ul>
    </header>
)

export default Header;