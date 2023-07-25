import React from 'react'
import MechCard from '../components/MechCard'
import { MechsData } from '../helpers/mechspecs'

function AssaultMechs() {
  const AssaultMechsData = MechsData.filter(item => item.class === "Assault")

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