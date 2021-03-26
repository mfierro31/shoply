import Routes from './Routes';
import NavBar from './NavBar';
import ScrollToTop from './ScrollTotop';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
