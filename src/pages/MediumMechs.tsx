import React from 'react'
import MechCard from '../components/MechCard'
import { MediumMechData } from '../helpers/mediumMechs'

function MediumMechs() {
  return (
    <div>
        <h2>Medium Mechs</h2>
        <div>
            {MediumMechData.map((mech) => {
                return (
                    <MechCard image={mech.image} name={mech.name} id={mech.id} />
                )
            })}
        </div>
    </div>
  )
}

export default MediumMechs