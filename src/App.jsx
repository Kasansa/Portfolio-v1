import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import Timeline from "./Pages/TImeline";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Landing />
        <Timeline />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
