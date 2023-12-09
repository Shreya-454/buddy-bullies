import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Section2 from './components/Section2';
import Carddata from './components/Carddata';
import 'bootstrap/dist/js/bootstrap.min.js';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="App">
      <Header />
      <Section2 />
      <Carddata />
      <Roadmap/>
      <Accordian />
      <Footer/>

    </div>
  );
}

export default App;
