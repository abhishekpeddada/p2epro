import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
