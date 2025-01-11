import React from'react'

const ProjectCard = ({title,description,image,pageLink}) => {
    return (
        <div className="card bg-base-100 image-full min-h-96 shadow-md shadow-black">
                <figure>
                    <img
                    src={image}
                    alt={description} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div tabIndex={0} className="collapse collapse-plus  bg-zinc-800 ">
                        
                    <div className="p-5">
                        <p>{description}</p>
                    </div>
                    </div>
                    <div className="card-actions justify-end">
                    </div>
                        {pageLink.length>1?<a href={pageLink} target='_blank'><button className="btn btn-primary text-white">View Project</button></a>:null}
                    
                    
                </div>
                
            </div>
    )
}



export default ProjectCard