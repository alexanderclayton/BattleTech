import React from 'react'
import { useParams } from 'react-router-dom'
import { MechsData } from '../helpers/mechspecs'

function Mech() {
  const { id } = useParams();
  const mech = MechsData.find(mech => mech.id === id)

  if (!mech) {
    return ("Mech not found")
  } else if (!mech.pilots) {
    return (
      <div>
        <img src={mech.image} alt={mech.name} />
        <h1>{mech.name}</h1>
        <h3>Class: {mech.class}</h3>
      </div>
    )
  }
    return (
      <div>
        <img src={mech.image} alt={mech.name} />
        <h1>{mech.name}</h1>
        <h3>Class: {mech.class}</h3>
        <h3>Notable Pilots: {mech.pilots}</h3>
      </div>
    )
  }

  export default Mech