import React from 'react'
import Navbar from '../Components/Navbar';
import { ThemeProvider } from '../Components/ThemeContext';
import {Link} from 'react-router-dom'

function DataAnalysisProject() {
  return (
    <ThemeProvider>
      <div>
        <Navbar pageLinks="Contact"/>
      </div>
    </ThemeProvider>
  )
}

export default DataAnalysisProject