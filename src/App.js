
import './App.css';
import About from './components/About/About';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Habilidades from './components/Habilidades/Habilidades';
import Info from './components/Info/Info';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cover/>
      <About/>
      <Habilidades/>
      <Gallery/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
