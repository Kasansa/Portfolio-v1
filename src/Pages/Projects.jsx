import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { projects } from '../Components/Projectslists'
  
function Projects() {
  if (!projects || projects.length === 0) {
    return (
      <div>
        <h1 className='text-sm lg:text-3xl font-bold m-4 text-center'>No projects to display</h1>
      </div>
    )
  }
    return (
    <div id="projects" >
      <h1 className='text-2xl lg:text-3xl font-bold m-auto text-center'>
        Projects Ive worked on
        </h1>
      <div>
            <ul className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-8'>
                {projects.map((project, index) => {
                if (!project || !project.title || !project.description || !project.image ) {
                    console.error(`Project at index ${index} is missing required properties`)
                    return null
                }

                return (
                    <li key={index}>
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                    </li>
                )
                })}
            </ul>
      </div>
    </div>
  )

}



export default Projects