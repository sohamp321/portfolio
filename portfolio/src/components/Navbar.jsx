import React, { useState } from 'react'
import Homepage from './Homepage'

function Navbar() {

  
  const [active, setActive]= useState(0);

  const handleTabChange = (args) => {setActive(args)};
  
  function Tab(active){
    switch (active){
      case 0:
        return <Homepage/>;
  
      case 1:
        return <div>CASE1</div>;
  
      case 2:
        return <div>CASE2</div>;
      case 3:
        return <div>CASE3</div>;
  
      default:
        return <div>DEFAULT</div>;
    }
  
  }



  return (
    <div className="navbar">
      <button onClick = {() => {handleTabChange(0)}} className={active === 0 ? 'active-nav-option' : 'nav-option'}>About Me</button>
      <button onClick = {() => {handleTabChange(1)}} className={active === 1 ? 'active-nav-option' : 'nav-option'}>My Works</button>
      <button onClick = {() => {handleTabChange(2)}} className={active === 2 ? 'active-nav-option' : 'nav-option'}>Resume</button>
      <button onClick = {() => {handleTabChange(3)}} className={active === 3 ? 'active-nav-option' : 'nav-option'}>Contact Me</button>

      {Tab(active)}

    </div>
  );
}



export default Navbar;
