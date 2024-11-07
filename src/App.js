import './App.css';
import React, {useState } from 'react'
import News from './Component/News';
import Navbar from './Component/Navbar';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
import Footer from './Component/Footer';

function App() {
  const x = window.matchMedia("(max-width: 1000px)").matches?6:4;
 
 const pagesize = 15
 const[progress,setProgress] =useState(0);
  return (
    <Router basename='/DevNews'>
    <Navbar/>
    <LoadingBar
     color='#f11946'
     progress={progress}
   />
<Routes>
   <Route exact path='/' element={ <News items={x} setProgress = {setProgress}key="general" pagesize = {pagesize}  category={"general"}/>}/>

   <Route exact path='/Business' element = {<News items={x} setProgress = {setProgress} key="business" pagesize = {pagesize}  category={"business"}/>}/>
   <Route exact path='/Entertainment' element = {<News items={x} setProgress = {setProgress} key="entertainment" pagesize = {pagesize}  category={"entertainment"}/>}/>
   <Route exact path='/Health'element = {<News items={x} setProgress = {setProgress} key="health" pagesize = {pagesize}  category={"health"}/>}/>
   <Route exact path='/Science' element = {<News items={x} setProgress = {setProgress} key="science" pagesize = {pagesize}  category={"science"}/>}/>
   <Route exact path='/Sports'element = {<News items={x} setProgress = {setProgress} key="sports" pagesize = {pagesize}  category={"sports"}/>}/>
   <Route exact path='/Technology'element = {<News items={x} setProgress = {setProgress}  key="technology" pagesize = {pagesize}  category={"technology"}/>}/>
   
 </Routes>
 <Footer/>
   </Router>
  )
}

export default App

