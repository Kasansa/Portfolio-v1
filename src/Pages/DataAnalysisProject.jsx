import React from 'react'
import Navbar from '../Components/Navbar';
import { ThemeProvider } from '../Components/ThemeContext';
import {Link} from 'react-router-dom'
import ProjectSummary from '../Components/ProjectSummary';


const data={
  title:"Data Analysis Project",
  data:["I started with importing industry standard data analysis packages. ","Then, I converted the CSV data file into a Pandas DataFrame. ","Then, I used Matplotlib and Seaborn to plot the data. ","Finally, I used Pandas to analyze the data and generate insights."],
  image:"covid",
  splash:"covid splash.jpg"
}
function DataAnalysisProject() {

  
  return (
    <ThemeProvider>
      <div>
        <Navbar pageLinks="Contact" className="sticky top-0 z-50"/>
      </div>
      <ProjectSummary title={data.title} data={data.data} image={data.image} splash={data.splash}></ProjectSummary>
    </ThemeProvider>
  )
}

export default DataAnalysisProject