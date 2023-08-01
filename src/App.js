import React from 'react'
import Accordian from './Accordian'
import { useEffect,useState } from 'react';
import logo from './assets/imgs/pngwing.com.png'
import { Container, Dimmer, Loader } from 'semantic-ui-react';
//import folder from'./assets/imgs/folder.png'
import './App.css'
import OtherPage from './OtherPage';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Films from './components/Films';
export default function() {
  const items = [
    {
       title: "Films",
       content: <button className='accordianbutton' onClick={()=> window.location.href = '/films'} >Movies</button>
    },
    {
       title: "Planets",
       content: <button className='accordianbutton' onClick={()=> window.location.href = '/planets'}>Planets</button>
    },
    {
       title: "Starships",
       content: <button className='accordianbutton' onClick={()=> window.location.href = '/starships'} >Jets</button>
    },
    {
      title: "Characters",
      content: <button className='accordianbutton' onClick={()=> window.location.href = '/other'}>People</button>
   },
    {
      title: "Species",
      content: <button className='accordianbutton' onClick={()=> window.location.href = '/species'}>Species</button>
   },
   {
    title: "Vehicles",
    content: <button className='accordianbutton' onClick={()=> window.location.href = '/vehicles'}>Cars</button>
 }
 ]
  const [people,setPeople] =useState([]);
  const [planets,setPlanets] =useState([]);
  const[starships,setStarships]= useState([]);
  const[species,setSpecies]=useState([]);
  const[vehicles,setVehicles]=useState([]);
  const[films,setFilms]=useState([]);
  const [loading,setLoading] =useState(true);
  useEffect(()=> {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    async function fetchPlanets(){
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    async function fetchStarships(){
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }
    async function fetchSpecies(){
      let res = await fetch('https://swapi.dev/api/species/?format=json');
      let data = await res.json();
      setSpecies(data.results);
      setLoading(false);
    }
    async function fetchVehicles(){
      let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
      let data = await res.json();
      setVehicles(data.results);
      setLoading(false);
    }
    async function fetchFilms(){
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchPlanets();
    fetchStarships();
    fetchSpecies();
    fetchVehicles();
    fetchFilms();
    
  }, []);
  return (
    <div className='main-container'>
        <div className='sidebar'>
      <img src={logo} className='logo' height='100px' width='150px'></img>
      <div className='searchbar'>
      <input
        type="text"
        placeholder="Search..."
      />
    </div>
      <Accordian className='Accordians' items={items}/>
      </div>
      <BrowserRouter>
      {loading ? (
          <Dimmer active inverted>
            <Loader inverted>
              Loading
            </Loader>
          </Dimmer>
      ): (
        <Routes>
        <Route index element={<Homepage/>}></Route>
        <Route path='/other' element={<OtherPage data={people}/>}></Route>
        <Route path='/planets' element={<Planets data={planets}/>}></Route>
        <Route path='/starships' element={<Starships data={starships}/>}></Route>
        <Route path='/species' element={<Species data={species}/>}></Route>
        <Route path='/vehicles' element={<Vehicles data={vehicles}/>}></Route>
        <Route path='/films' element={<Films data={films}/>}></Route>
        </Routes>
      )}
      
      </BrowserRouter>
    </div>
     
  )
}
