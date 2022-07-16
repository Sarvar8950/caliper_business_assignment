import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Hydrophonic from './components/Hydrophonic';
import Services from './components/Services';
import Costs from './components/Costs';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hydroponic' element={<Hydrophonic />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/costs' element={<Costs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
