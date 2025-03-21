
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


createRoot(document.getElementById('root')).render(
   
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  

)
