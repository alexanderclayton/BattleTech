import React from 'react'
import MechCard from '../components/MechCard'
import { MechsData } from '../helpers/mechspecs'

function MediumMechs() {
  const MediumMechsData = MechsData.filter(item => item.class === "Medium")

  return (
    <div>
        <h2>Medium Mechs</h2>
        <div>
            {MediumMechsData.map((mech) => {
                return (
                    <MechCard image={mech.image} name={mech.name} id={mech.id} />
                )
            })}
        </div>
    </div>
  )
}

export default MediumMechs