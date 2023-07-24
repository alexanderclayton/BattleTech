import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mechs() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='mech-class-cards'>
        <div className='light-mech-card' onClick={() => { navigate('/light-mechs') }}>
          <h3>light mechs</h3>
        </div>
        <div className='medium-mech-card' onClick={() => { navigate('/medium-mechs') }}>
          <h3>medium mechs</h3>
        </div>
        <div className='heavy-mech-card' onClick={() => { navigate('/heavy-mechs') }}>
          <h3>heavy mechs</h3>
        </div>
        <div className='assault-mech-card' onClick={() => { navigate('/assault-mechs') }}>
          <h3>assault mechs</h3>
        </div>
      </div>
    </div>
  )
}

export default Mechs