import Flea from '../assets/LightMechImages/FleaCardImage.png'
import Cicada from '../assets/MediumMechImages/CicadaCardImage.png'
import Dragon from '../assets/HeavyMechImages/DragonCardImage.png'
import Atlas from '../assets/AssaultMechImages/AtlasCardImage.png'
import Battlemaster from '../assets/AssaultMechImages/BattleMasterCardImage.png'
import KingCrab from '../assets/AssaultMechImages/King_CrabCardImage.png'


type Mech = {
    id: string
    name: string
    class: string
    image: string
    weapons?: number
    pilots?: string[]
}

export const MechsData: Mech[] = [
    {
        id: "Flea",
        name: "Flea",
        class: "Light",
        image: Flea,
    },
    {
        id: "Cicada",
        name: "Cicada",
        class: "Medium",
        image: Cicada
    },
    {
        id: "Dragon",
        name: "Dragon",
        class: "Heavy",
        image: Dragon
    },
    {
        id: "Atlas",
        name: "Atlas",
        class: "Assault",
        image: Atlas,
        weapons: 2,
        pilots: ["Adam Steiner"]
    },
    {
        id: "Battlemaster",
        name: "Battlemaster",
        class: "Assault",
        image: Battlemaster,
        weapons: 2,
        pilots: ["Taylan Dobbs"]
    },
    {
        id: "KingCrab",
        name: "King Crab",
        class: "Assault",
        image: KingCrab,
        weapons: 2,
        pilots: ["Alex Clayton"]
    }
]