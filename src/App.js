import React,{useEffect, useState} from 'react';
import { Route, Routes} from "react-router-dom"
import './App.css';
import Header from './Header';
import Compare from './Compare';
import Home from './Home';
import Favorite from './Favorite';
import AddNewToy from './AddToy'
import About from './About'




function App() {
  const dataLink = "http://localhost:3500/toys"
    const [toysList, setToyslist] = useState([])
   
    useEffect(()=> {
      fetch(dataLink)
      .then((r) => r.json())
      .then((data)=>setToyslist(data))
    }, [])
  
  return (
    <div>
      <Header />
      <AddNewToy currentToys = {toysList} setToyslist= {setToyslist}/>

      <Routes>
        <Route element = {<Home toysList={toysList} setToyslist={setToyslist}/>}path='/'/>
        <Route element = {<About />} path='/About'/>
        <Route element = {<Compare toysList={toysList}/>} path='/Compare'/>
      </Routes>
      
      
    </div>
  );
}

export default App;
