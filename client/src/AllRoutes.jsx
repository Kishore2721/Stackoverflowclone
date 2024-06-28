import React from 'react';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import {Routes,Route} from 'react-router-dom';
import Questions from './pages/Questions/Questions';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import Userprofile from './pages/Userprofile/Userprofile'

function AllRoutes({slidein,handleslidein}) {
  return (
    <Routes>
      <Route  path='/' element={<Home  slidein={slidein} handleslidein={handleslidein}/>}/>
      <Route  path='/Auth' element={<Auth/>}/>
      <Route  path='/Questions' element={<Questions slidein={slidein} handleslidein={handleslidein}/>}/>
      <Route  path='/AskQuestion' element={<AskQuestion/>}/>
      <Route  path='/Questions/:id' element={<DisplayQuestion slidein={slidein} handleslidein={handleslidein}/>}/>
      <Route  path='/Tags' element={<Tags slidein={slidein} handleslidein={handleslidein}/>}/>
      <Route  path='/Users' element={<Users slidein={slidein} handleslidein={handleslidein}/>}/>
      <Route  path='/Users/:id' element={<Userprofile slidein={slidein} handleslidein={handleslidein}/>}/>

    </Routes>
  )
}

export default AllRoutes