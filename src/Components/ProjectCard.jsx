import React from'react'

const ProjectCard = ({title,description,image,pageLink}) => {
    return (
        <div className="card bg-base-100 image-full min-h-96 shadow-xl">
                <figure>
                    <img
                    src={image}
                    alt={description} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
                        <div className="collapse-title text-sm lg:text-xl font-medium">More</div>
                    <div className="collapse-content">
                        <p>{description}</p>
                    </div>
                    </div>
                    <div className="card-actions justify-end">
                        {pageLink}
                    </div>
                </div>
            </div>
    )
}



export default ProjectCard