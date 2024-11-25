import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll";


//determines which links to show depending on the page
const navLinks = [
{
    location: ["Contact","dataAnalysisP","mindCharterP"],
    element: <Link to="/">Home</Link>
},
{
    location: ["home" ],
    element: <ScrollLink to="timeline" smooth={true} duration={200}>
    Timeline
  </ScrollLink>
},
{
    location: ["home"],
    element: <ScrollLink to="projects" smooth={true} duration={500}>
    Projects
  </ScrollLink>
}
]

export default navLinks