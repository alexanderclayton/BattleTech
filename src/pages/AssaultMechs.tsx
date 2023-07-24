import React from 'react'
import MechCard from '../components/MechCard'
import { AssaultMechsData } from '../helpers/assaultMechs'

function AssaultMechs() {
  return (
    <div>
        <h2>Assault Mechs</h2>
        <div>
            {AssaultMechsData.map((mech) => {
                return (
                    <MechCard image={mech.image} name={mech.name} id={mech.id} />
                )
            })}
        </div>
    </div>
  )
}

export default AssaultMechs