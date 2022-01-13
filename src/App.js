import './App.css';
import Navbar from './Components/Navbar.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home.js';
import FooterBar from './Components/Footer/index.js'
import ContactUs from './Components/ContactUs/ContactUs';
import Shop from './Components/Shop';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/contactus" element={<ContactUs/>}></Route>
        <Route exact path="/shop" element={<Shop/>}></Route>
      </Routes>
      
       <FooterBar/>
      </Router>
      
    </div>
  );
}

export default App;

