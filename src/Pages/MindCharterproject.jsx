import React from 'react'
import Navbar from '../Components/Navbar';
import { ThemeProvider } from '../Components/ThemeContext';
import Landing from './Landing';


function MindCharterproject() {

  const pageLinks= "mindCharterP";

  return (
    <ThemeProvider>
      <div>
        <Navbar pageLinks='mindCharterP'/>
      </div>
    </ThemeProvider>
  )
}

export default MindCharterproject