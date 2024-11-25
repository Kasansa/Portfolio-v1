import { a } from '@react-spring/web'
import React from 'react'
import { useState } from 'react'
function State() {
    const [state,setState]= useState([])
    
    const addListItem = () => {
        if (state.length < 3) {
        setState([...state,1])
    }else{
        alert("Sorry no more pandas for you")
    }
}

  return (
    <div >
        <button className='btn btn-primary block m-auto text-3xl border-solid-4 border-slate-950 mt-0' onClick={addListItem}>Add Panda</button>
         <div className='flex flex-row flex-wrap justify-center w-screen '>
            {
            state.map((item, index) => (
                <img className='max-h-32 lg:max-h-80 p-2'src={`panda${index+1}.jpg`}/>))
            }
        </div>
    </div>
  )
}

export default State