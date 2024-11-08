import React from 'react'
import './Pending.css'
function Pending() {
  return (
    <div className='pen-main'>
        <div className='pen-box'>
             <h4 style={{color:'aqua',fontFamily:'initial',fontSize:'30px',marginLeft:'20px'}}>Vacation Leave</h4>
             <p style={{color:'red',fontFamily:'initial'}}>Pending..</p>
        </div>

        <div className='pen-box'>
             <h4 style={{color:'aqua',fontFamily:'initial',fontSize:'30px',marginLeft:'20px'}}>Sick Leave</h4>
             <p style={{color:'red',fontFamily:'initial'}}>Pending..</p>
        </div>

        <div className='pen-box'>
             <h4 style={{color:'aqua',fontFamily:'initial',fontSize:'30px',marginLeft:'20px'}}>Function Leave</h4>
             <p style={{color:'red',fontFamily:'initial'}}>Pending..</p>
        </div>
    </div>
  )
}

export default Pending