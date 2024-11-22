import React from "react"
import { Link } from "react-router-dom"

const projects = [ 
  {
    title: "COVID-19 Data Analysis for Africa",
    description: "An exploratory data analysis of Africa's COVID-19 statistics between 2019 and 2021, using Pandas and Matplotlib",
    image: "africacovid.jpg",
    pageLink: <button className="btn btn-primary "><Link to='DataAnalysisProject'>View Project Summary</Link></button>
  },
  {
    title: "Mind Charter Task Tracker",
    description: "A web-based task tracker that integrates HTML, CSS, and JavaScript to manage tasks interactively.",
    image: "neuralnet.jpg",
    pageLink: <button className="btn btn-primary "><Link to='ComingSoon'>View Project Summary</Link></button>
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "A data analysis tool created with Streamlit that performs sentiment analysis on user-provided text data, using natural language processing (NLP) techniques. This dashboard allows users to visualize positive, neutral, and negative sentiment trends over time and across categories, giving users insights into emotional tone and content trends.",
    image: "data dash.jpg",
    pageLink: <button className="btn btn-primary "><Link to='ComingSoon'>View Project Summary</Link></button>
  },
  {
    title: "Interactive Portfolio Website",
    description: "An React, Tailwind, and Vite-powered personal portfolio showcasing web development and data science projects.",
    image: "vitereact.png",
    pageLink: <button className="btn btn-primary "><Link to='ComingSoon'>View Project Summary</Link></button>
  },
  {
    title: "Data Dashboard with Streamlit",
    description: "A data visualization dashboard that offers interactive exploration of datasets through graphs, charts, and filters. Built with Python and Streamlit, this tool can be customized to visualize a wide range of datasets, supporting exploratory data analysis for research, education, or general data insights.",
    image: "https://via.placeholder.com/300x200",
    pageLink: <button className="btn btn-primary "><Link to='ComingSoon'>View Project Summary</Link></button>
  }
]                            


export {projects} 
