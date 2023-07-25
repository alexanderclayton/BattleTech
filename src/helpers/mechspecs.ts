import Flea from '../assets/LightMechImages/FleaCardImage.png'
import Locust from '../assets/LightMechImages/LocustCardImage.png'
import Commando from '../assets/LightMechImages/CommandoCardImage.png'
import Cicada from '../assets/MediumMechImages/CicadaCardImage.png'
import Assassin from '../assets/MediumMechImages/AssassinCardImage.png'
import Hunchback from '../assets/MediumMechImages/HunchbackCardImage.png'
import Dragon from '../assets/HeavyMechImages/DragonCardImage.png'
import Warhammer from '../assets/HeavyMechImages/WarhammerCardImage.png'
import BlackKnight from '../assets/HeavyMechImages/BlackKnightCardImage.png'
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
        id: "Locust",
        name: "Locust",
        class: "Light",
        image: Locust
    },
    {
        id: "Commando",
        name: "Commando",
        class: "Light",
        image: Commando
    },
    {
        id: "Cicada",
        name: "Cicada",
        class: "Medium",
        image: Cicada
    },
    {
        id: "Assassin",
        name: "Assassin",
        class: "Medium",
        image: Assassin
    },
    {
        id: "Hunchback",
        name: "Hunchback",
        class: "Medium",
        image: Hunchback
    },
    {
        id: "Dragon",
        name: "Dragon",
        class: "Heavy",
        image: Dragon
    },
    {
        id: "Warhammer",
        name: "Warhammer",
        class: "Heavy",
        image: Warhammer
    },
    {
        id: "BlackKnight",
        name: "Black Knight",
        class: "Heavy",
        image: BlackKnight
    },
    {
        id: "Atlas",
        name: "Atlas",
        class: "Assault",
        image: Atlas,
        weapons: 2,
        pilots: ["Adam Steiner", "Others"]
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