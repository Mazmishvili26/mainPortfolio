import { useState } from 'react';
import './App.css';

// import Components

import Landing from './Components/LandingComponent/Landing';
import Skill from './Components/SkillComponent/Skill';
import About from './Components/About Component/About';
import Portfolio from './Components/PortfolioComponent/Portfolio';
import Contact from './Components/Contact Component/Contact';
import Footer from './Components/Footer Component/Footer';
import Success from './Components/Success Component/Success';
import Loading from './Components/Loading Component/Loading';
import Header from './Components/Header Component/Header';
import Cursor from './Components/Cursor Component/Cursor';



function App() {
  
  const [successMSG,setSuccessMSG] = useState(false)
  const [loading,setLoading] = useState(false);

  return (
    <>
      <Header/>
      <Landing/>
      <Skill/>
      <About/>
      <Portfolio/>
      <Cursor/>
      <Contact setSuccessMSG={setSuccessMSG} setLoading={setLoading}/>
      <Footer setSuccessMSG={setSuccessMSG} setLoading={setLoading}/>
      {successMSG && <Success setSuccessMSG={setSuccessMSG}/>}
      {loading && <Loading/>}
    </>  
  )
}

export default App;
