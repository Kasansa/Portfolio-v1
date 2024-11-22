import React from 'react'
import { ThemeProvider } from '../Components/ThemeContext'
import ProjectSummary from '../Components/ProjectSummary';
import Navbar from '../Components/Navbar';

function ComingSoon() {
  return (
    <ThemeProvider>
        <Navbar pageLinks="Contact" className="sticky top-0 z-50"></Navbar>
        <ProjectSummary title="Coming Soon" data={["This project is coming soon!"]} splash="Coming Soon.jpg"></ProjectSummary>
    </ThemeProvider>
  )
}

export default ComingSoon