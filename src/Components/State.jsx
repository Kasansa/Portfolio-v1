import React from 'react'
import { useState } from 'react'
function State() {
    const [state,setState]= useState([])
    
    const addListItem = () => {
        setState([...state,1])
    }

  return (
    <div className='h-screen '>
        <button className='btn btn-primary block m-auto text-3xl border-solid-4 border-slate-950 mt-0' onClick={addListItem}>Add Panda</button>
         <div className='flex flex-row flex-wrap justify-center w-screen p-9'>
            {
            state.map((item) => (
                <img className='max-h-32 p-2'src="panda.jpg"/>))
            }
        </div>
    </div>
  )
}

export default State