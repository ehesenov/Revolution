import './App.css';
import { useState,useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import Shop from './Shop'
import Contact from './Contact';
import Card from './Card';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Offers from './Offers';
import {Switch,Route} from 'react-router-dom'
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'


function App() {
  const selector=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const[state,setState]=useState([])

useEffect(()=>{
axios.get("https://my-json-server.typicode.com/emilfermanli/db/product")
.then(res=>    dispatch({type:"API_DATA",payload:res.data}))
//dispatch({type:"API_DATA",payload:res.data})
},[])
  return (
    //{ data.map((index,key)=> <img src={index.url})}
    <div className="App">
      {
        selector
      }
     <Header  />
     <Switch>
   <Route exact path="/">
   <Home />
   </Route>
   <Route path="/card">
     <Card />
   </Route>
   <Route path="/:topicId">
     <About paltar={state}/>  
   </Route>
 </Switch>

     <Menu/>
    <Footer />
    </div>
  );
}

export default App;
