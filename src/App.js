import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./core/components/Header/Header";
import About from "./core/modules/AboutMe/About";
import Index from "./core/modules/Index/Index";
import Projects from "./core/modules/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


const App = () => (
  <div className="d-lg-flex d-md-flex d-sm-block">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route  path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  </div>

)

export default App;
