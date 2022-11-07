import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./core/singleton/Header/Header";
import About from "./core/features/AboutMe/About";
import Index from "./core/features/Index/Index";
import Projects from "./core/features/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


const App = () => (
  <main className="d-lg-flex d-md-flex d-sm-block">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </main>

)

export default App;
