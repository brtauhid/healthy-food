import About from "./components/About";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tips from "./components/Tips";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Contact></Contact>
      <Tips></Tips>
      <Blog1></Blog1>
      <Blog2></Blog2>
      <Gallery></Gallery>
      <About></About>
    </div>
  );
}

export default App;
