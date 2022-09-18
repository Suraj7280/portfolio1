import './App.css';
import About from './component/about/About';
import Nav from './component/navbar/Nav';
import Slider from './component/slider/Slider';
import Header from './component/header/Header';
import Achieve from './component/achieve/Achieve';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Achieve />
      <Slider />
    </div>
  );
}

export default App;
