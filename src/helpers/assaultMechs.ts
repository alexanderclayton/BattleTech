import Atlas from '../assets/AssaultMechImages/AtlasCardImage.png'
import Battlemaster from '../assets/AssaultMechImages/BattleMasterCardImage.png'
import KingCrab from '../assets/AssaultMechImages/King_CrabCardImage.png'

type Assault = {
    id: string
    name: string
    image: string
    weapons?: number
    pilots?: string[]
}

export const AssaultMechsData: Assault[] = [
    {
        id: "Atlas",
        name: "Atlas",
        image: Atlas,
        weapons: 2,
        pilots: ["Adam Steiner"]
    },
    {
        id: "Battlemaster",
        name: "Battlemaster",
        image: Battlemaster,
        weapons: 2,
        pilots: ["Taylan Dobbs"]
    },
    {
        id: "KingCrab",
        name: "King Crab",
        image: KingCrab,
        weapons: 2,
        pilots: ["Alex Clayton"]
    }
]