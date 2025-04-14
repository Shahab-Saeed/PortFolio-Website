import "./index.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Customcursor from "./Components/Customcursor/Customcursor";
import { Route, Routes } from "react-router-dom";
import Frontendprojects from "./Pages/Frontendprojects";
const App = () => {
  const [setprojectcategory, setsetprojectcategory] = useState(true)
  return (
    <div>
      <Customcursor />
      <Navbar setprojectcategory={setprojectcategory}  setsetprojectcategory={setsetprojectcategory}/>
      {setprojectcategory ? "": <Home />}
      {setprojectcategory ? "": <About />}
      {setprojectcategory ? "": <Services />}
      {setprojectcategory ? "": <Projects />}
      {setprojectcategory ? <Frontendprojects setprojectcategory={setprojectcategory}  setsetprojectcategory={setsetprojectcategory} />: ""}
      {setprojectcategory ? "": <Contact />}
      {setprojectcategory ? "": <Footer />}
      
    </div>
  );
};

export default App;
