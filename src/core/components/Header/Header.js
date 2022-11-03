import { Link as RouterLink } from "react-router-dom";
import './Header.css'

const Header = () => (
     <header>
            <ul className="nav flex-lg-column flex-md-column flex-sm-row header-background-nav">
                <li className="nav-item">
                    <RouterLink to="/" className="nav-link text-light"><h4 className="h4 fw-bold">Index</h4>  </RouterLink>
                </li>
                <li className="nav-item">
                    <RouterLink to="/projects" className=" nav-link text-light"><h4 className=" h4 fw-bold">Projects</h4></RouterLink>
                </li>
                <li className="nav-item">
                    <RouterLink to="/about" className=" nav-link text-light"><h4 className="h4 fw-bold">About me</h4></RouterLink>
                </li>
            </ul>
    </header>
)

export default Header;