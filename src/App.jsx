

import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

function App() {
  

  return (
    <>
     <Navigation/> 

     <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="*" element={<Navigate to="/"/>} />
     </Routes>
    </>

  )
}




export default App;
