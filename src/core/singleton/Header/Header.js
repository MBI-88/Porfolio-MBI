import { Link as RouterLink } from "react-router-dom";
import './Header.css'
import { AiFillHome, AiFillFolder, AiFillApi } from "react-icons/ai";

const Header = () => (
    <header>
        <ul className="nav flex-lg-column flex-md-column flex-sm-row header-background-nav pt-lg-5">
            <li className="nav-item">
                <RouterLink to="/" className="nav-link text-light"> <h3><AiFillHome /></h3></RouterLink>
            </li>
            <li className="nav-item">
                <RouterLink to="/projects" className=" nav-link text-light"><h3><AiFillFolder /></h3></RouterLink>
            </li>
            <li className="nav-item">
                <RouterLink to="/about" className=" nav-link text-light"><h3><AiFillApi /></h3></RouterLink>
            </li>
        </ul>
    </header>
)

export default Header;