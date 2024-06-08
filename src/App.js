import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SubNavbar from './component/SubNavbar';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import AboutUs from './pages/AboutUs';
import Meeting from './pages/Meeting';
import News_Stories from './pages/News_stories';
import Acheivement from './pages/Acheievement';
import AddTestinomial from './pages/AddTestinomials';
import AddDomnation from './pages/DonateNow';
import ScholarshipForm1 from './pages/ScholarshipFormForEmpKids';
import ScholarshipForm2 from './pages/ScholarshipFormForEmpThemselve';
import Gallery from './component/Gallery';

function App() {
  return (<BrowserRouter>
    <SubNavbar/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/meeting' element={<Meeting/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
