import React from 'react'
import MechCard from '../components/MechCard'
import { LightMechsData } from '../helpers/lightMechs'

function LightMechs() {
  return (
    <div>
        <h2>Light Mechs</h2>
        <div>
            {LightMechsData.map((mech) => {
                return (
                    <MechCard image={mech.image} name={mech.name} id={mech.id} />
                )
            })}
        </div>
    </div>
  )
}

export default LightMechs