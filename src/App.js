import './App.css';
import React from 'react';
import StopWatch from './components/StopWatch';
import Ciao from './components/CiaoSection/Ciao'


function App(){
  return <>
  <Ciao name="Elon" id="1"/>
  <StopWatch />
  </>;
  
}
export default App;