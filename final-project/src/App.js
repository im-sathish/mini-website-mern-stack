import { Route, Routes } from 'react-router-dom';
import Anime from './Anime';
import Home from './Home';
import Register from './Register';
import Contact from './Contact';
import About from './About';
import Anime1 from './Anime1';
import Admin from './Admin';
import Adminlogin from './Adminlogin';

function App() {
  return (
    <>
       <Routes>
       <Route path="/" element={<Anime/>}/>

          <Route path="/Register" element={<Register/>}/>
          <Route path="/anime" element={<Anime/>}/>
          <Route path="/anime1" element={<Anime1/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/anime" element={<Anime/>}/>
          <Route path="/admin" element={<Adminlogin/>}/>
          <Route path="/admin1" element={<Admin/>}/>
       </Routes>

       

    </>
  );
}

export default App;
