import React from 'react'


function TImeline() {
  return (
    <div id="timeline" className=' p-10'>
      <h1 className='text-3xl font-bold m-16 text-center'>Timeline</h1>
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">October 2017 – June 2021</time>
      <div className="text-lg font-black">Civil Engineering Degree - Jilin Jianzhu University</div>
      <span className='block m-2 ml-0'>Completed a Bachelor of Engineering in Civil Engineering.</span> 
      <span className='block'>The program focused on civil engineering and architectural design, 
      providing a foundation in both Mathematics and structural principles.</span>
    </div>
    <hr />
  </li>

  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">August 2021 – September 2023</time>
      <div className="text-lg font-black">Junior Mechanical Engineer at Nerospec</div>
      <span className='block m-2 ml-0'>Worked as a Junior Mechanical Engineer, collaborating in a multidisciplinary team on IoT and mining technology projects.
      </span>
      <span className='block m-2 ml-0'>Designed and managed various engineering projects, including a fuel flow measurement device, an underground remote control system, and an explosion-proof battery box for mining vehicles. 
       Developed expertise in CAD, stakeholder engagement, and documentation management.</span>
    </div>
    <hr />
  </li>

  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10">
      <time className="font-mono italic">2024</time>
      <div className="text-lg font-black">AI and Machine Learning Certificates - IBM and Google</div>
      <span className='block m-2 ml-0'>Earned certifications in Machine Learning with Python and Introduction to Artificial Intelligence from IBM, along with ongoing training in AI from Google.</span> 
      <span className='block m-2 ml-0'>These courses strengthened my programming and data analysis skills, with a focus on practical applications of machine learning, neural networks, and AI algorithms.</span>
    </div>
    <hr />
  </li>
  
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10 md:text-start">
      <time className="font-mono italic">2024</time>
      <div className="text-lg font-black">Responsive Web Design Certification - FreeCodeCamp</div>
      Completed a certification in Responsive Web Design, enhancing web development skills in HTML, CSS, and JavaScript. The training provided a solid understanding of creating adaptive web designs and modern user interfaces.
    </div>
  </li>
</ul>
</div>
  )
}

export default TImeline