import Navbar from "./Components/Navbar"
import Landing from "./Pages/Landing"
import TImeline from "./Pages/TImeline"
import Projects from "./Pages/Projects"
import { ThemeProvider } from "./Components/ThemeContext"
import State from "./Components/State"
import Footer from "./Components/Footer"

function App() {
  
  const pageLinks = "home";

  return (
    <ThemeProvider>
   
    <Navbar pageLinks={pageLinks}></Navbar>
    <section >
    <Landing id='land'></Landing>
    <TImeline></TImeline>
    <Projects></Projects>
    <State></State>
    <Footer></Footer>
   </section>
   </ThemeProvider>
  )
}

export default App
