import React from 'react'
import { Link } from 'react-router-dom'


//determines which links to show depending on the page
const navLinks = [
{
    location: ["home","Contact"],
    element: <Link to="/">Home</Link>
},
{
    location: ["home"],
    element: <a href="#timeline">Timeline</a>
},
{
    location: ["home"],
    element: <a href="#projects">Projects</a>
},
{
    location: ["home"],
    element: <Link to="/contact">Contact</Link>
}
]

export default navLinks