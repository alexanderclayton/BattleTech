import React from 'react'
import MechCard from '../components/MechCard'
import { HeavyMechData } from '../helpers/heavyMechs'

function HeavyMechs() {
  return (
    <div>
        <h2>Heavy Mechs</h2>
        <div>
            {HeavyMechData.map((mech) => {
                return (
                    <MechCard image={mech.image} name={mech.name} id={mech.id} />
                )
            })}
        </div>
    </div>
  )
}

export default HeavyMechs