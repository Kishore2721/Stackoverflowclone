import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from  './components/Navbars/Navbars';
import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './AllRoutes';
import { fetchallusers } from './action/users';

import { useDispatch } from 'react-redux';
import { fetchallquestion } from './action/question';
function App() {
  const [slidein,setslidein]=useState(true)
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(fetchallusers());
  dispatch(fetchallquestion());
},[dispatch])

  useEffect(()=>{
    if(window.innerWidth<= 768){
      setslidein(false)
    }
  },[])
  const handleslidein=()=>{
    if(window.innerWidth<=768){
      setslidein((state)=> !state);
    }
  };

  return (
    <div className="App">
      <Router>
         <Navbar handleslidein={handleslidein}/>
         <AllRoutes slidein={slidein} handleslidein={handleslidein} />
      </Router>
    </div>
  );
}

export default App;
