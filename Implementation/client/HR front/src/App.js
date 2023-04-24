import React from 'react';
import './App.css';
import AddStudent from './Component/AddStudent';
import AllStudent from './Component/AllStudent';
import NaveBar from './Component/NaveBar';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import UpdateStudent from './Component/UpdateStudent';
import AllEmployee from './Component/AllEmployee';
import AddEmployee from './Component/AddEmployee';
import AllDriver from './Component/AllDriver';
import AddDriver from './Component/AddDriver';
import Report from './Component/Report';
import UpdateDriver from './Component/UpdateDriver';
import UpdateEmployee from './Component/UpdateEmployee';
import ReportEmployee from './Component/ReportEmployee';
import ReportDriver from './Component/ReportDriver';
import AllHotel from './Component/AllHotel';
import AllVehical from './Component/AllVehical';
import HeaderBar from './Component/HeaderBar';
import AllUser from './Component/AllUser';






function App() {
  return (
  <div>
    
    <BrowserRouter> 
    <HeaderBar/>
   
     <NaveBar/>
     
    
     
    <Routes>


     {/* <Route path='/add student'exact Component={AddStudent}/>*/}
       <Route path='/'exact Component={AllStudent}/>
       <Route path='/edit/:id'element={<UpdateStudent/>}/>
       <Route path='/Employee'exact Component={AllEmployee}/>
       <Route path='/add/'element={<AddEmployee/>}/>
       <Route path='/driver'exact Component={AllDriver}/>
       <Route path='/add driver/'element={<AddDriver/>}/>
       <Route path='/report/:id'element={<Report/>}/>
       <Route path='/edit driver/:id'element={<UpdateDriver/>}/>
       <Route path='/edit employee/:id'element={<UpdateEmployee/>}/>
       <Route path='/report employee/:id'element={<ReportEmployee/>}/>
       <Route path='/report driver/:id'element={<ReportDriver/>}/>
       <Route path='/hotel'exact Component={AllHotel}/>
       <Route path='/vehical'exact Component={AllVehical}/>
       <Route path='/user'exact Component={AllUser}/>

      
     

   </Routes>
   </BrowserRouter>
   
   </div>
  );
}

export default App;
