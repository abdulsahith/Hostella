import React from 'react'
import './Home.css'
function Approved() {
  return (
    <div className='main'>
       <div className="box">
      <h3 className='title'>Sick Request</h3>
       <h4 className='date'>Sun,May 09 2024-Wed,May 11 2024</h4>
       <h3 className='name'>Sahith</h3>
       <h3 className='reason'>Sick leave</h3>

       <div className='status' style={{backgroundColor:'lightgreen'}}><h3>Approved</h3></div>
     </div>
    </div>
  )
}

export default Approved