import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from 'react-loaders'


//pages
import About from "./components/About";
import Projects from "./components/Projects";
import Company from "./components/Company";

function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
