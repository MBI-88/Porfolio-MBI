import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./core/base/Header/Header";
import About from "./core/features/AboutMe/About";
import Index from "./core/features/Index/Index";
import Projects from "./core/features/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Details from "./core/features/Projects/components/Details/Details";


const App = () => (
  <main>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/project-details/"  element={<Details />} />
      </Routes>
    </BrowserRouter>
  </main>

)

export default App;
