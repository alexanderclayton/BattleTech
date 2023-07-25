import React from 'react'
import MechCard from '../components/MechCard'
import { MechsData } from '../helpers/mechspecs'

function HeavyMechs() {
  const HeavyMechsData = MechsData.filter(item => item.class === "Heavy")

  return (
    <div>
        <h2>Heavy Mechs</h2>
        <div>
            {HeavyMechsData.map((mech) => {
                return (
                    <MechCard image={mech.image} name={mech.name} id={mech.id} />
                )
            })}
        </div>
    </div>
  )
}

export default HeavyMechs