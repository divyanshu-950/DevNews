import './App.css';
import React, { Component } from 'react'
import News from './Component/News';
import Navbar from './Component/Navbar';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  pagesize = 15
  state = {
    progress: 0
  }
  setProgress=(progress) =>{
    this.setState({progress:progress});
  }
  render() {
    return (

      <Router basename='/DevNews'>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
   <Routes>
      <Route exact path='/' element={ <News setProgress = {this.setProgress}key="general" pagesize = {this.pagesize}  category={"general"}/>}/>

      <Route exact path='/Business' element = {<News setProgress = {this.setProgress} key="business" pagesize = {this.pagesize}  category={"business"}/>}/>
      <Route exact path='/Entertainment' element = {<News setProgress = {this.setProgress} key="entertainment" pagesize = {this.pagesize}  category={"entertainment"}/>}/>
      <Route exact path='/Health'element = {<News setProgress = {this.setProgress} key="health" pagesize = {this.pagesize}  category={"health"}/>}/>
      <Route exact path='/Science' element = {<News setProgress = {this.setProgress} key="science" pagesize = {this.pagesize}  category={"science"}/>}/>
      <Route exact path='/Sports'element = {<News setProgress = {this.setProgress} key="sports" pagesize = {this.pagesize}  category={"sports"}/>}/>
      <Route exact path='/Technology'element = {<News setProgress = {this.setProgress}  key="technology" pagesize = {this.pagesize}  category={"technology"}/>}/>
      
    </Routes>
      </Router>
    )
  }
}

export default App

