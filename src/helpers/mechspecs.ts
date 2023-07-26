import Flea from '../assets/LightMechImages/FleaCardImage.png'
import Locust from '../assets/LightMechImages/LocustCardImage.png'
import Commando from '../assets/LightMechImages/CommandoCardImage.png'
import Javelin from '../assets/LightMechImages/JavelinCardImage.png'
import Spider from '../assets/LightMechImages/SpiderCardImage.png'
import UrbanMech from '../assets/LightMechImages/UrbanMechCardImage.png'
import Firestarter from '../assets/LightMechImages/FirestarterCardImage.png'
import Jenner from '../assets/LightMechImages/JennerCardImage.png'
import Panther from '../assets/LightMechImages/PantherCardImage.png'
import Raven from '../assets/LightMechImages/RavenCardImage.png'
import Assassin from '../assets/MediumMechImages/AssassinCardImage.png'
import Cicada from '../assets/MediumMechImages/CicadaCardImage.png'
import Vulcan from '../assets/MediumMechImages/VulcanCardImage.png'
import Blackjack from '../assets/MediumMechImages/BlackjackCardImage.png'
import Hatchetman from '../assets/MediumMechImages/HatchetmanCardImage.png'
import PhoenixHawk from '../assets/MediumMechImages/PhoenixHawkCardImage.png'
import Vindicator from '../assets/MediumMechImages/VindicatorCardImage.png'
import Centurion from '../assets/MediumMechImages/CenturioncardImage.png'
import Crab from '../assets/MediumMechImages/CrabCardImage.png'
import Enforcer from '../assets/MediumMechImages/EnforcerCardImage.png'
import Hunchback from '../assets/MediumMechImages/HunchbackCardImage.png'
import Trebuchet from '../assets/MediumMechImages/TrebuchetCardImage.png'
import Griffin from '../assets/MediumMechImages/GriffinCardImage.png'
import Kintaro from '../assets/MediumMechImages/KintaroCardImage.png'
import ShadowHawk from '../assets/MediumMechImages/ShadowHawkCardImage.png'
import Wolverine from '../assets/MediumMechImages/WolverineCardImage.png'
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
        id: "Javelin",
        name: "Javelin",
        class: "Light",
        image: Javelin
    },
    {
        id: "Spider",
        name: "Spider",
        class: "Light",
        image: Spider
    },
    {
        id: "UrbanMech",
        name: "UrbanMech",
        class: "Light",
        image: UrbanMech
    },
    {
        id: "Firestarter",
        name: "Firestarter",
        class: "Light",
        image: Firestarter
    },
    {
        id: "Jenner",
        name: "Jenner",
        class: "Light",
        image: Jenner
    },
    {
        id: "Panther",
        name: "Panther",
        class: "Light",
        image: Panther
    },
    {
        id: "Raven",
        name: "Raven",
        class: "Light",
        image: Raven
    },
    {
        id: "Assassin",
        name: "Assassin",
        class: "Medium",
        image: Assassin
    },
    {
        id: "Cicada",
        name: "Cicada",
        class: "Medium",
        image: Cicada
    },
    {
        id: "Vulcan",
        name: "Vulcan",
        class: "Medium",
        image: Vulcan
    },
    {
        id: "Blackjack",
        name: "BlackJack",
        class: "Medium",
        image: Blackjack
    },
    {
        id: "Hatchetman",
        name: "Hatchetman",
        class: "Medium",
        image: Hatchetman
    },
    {
        id: "PhoenixHawk",
        name: "Phoenix Hawk",
        class: "Medium",
        image: PhoenixHawk
    },
    {
        id: "Vindicator",
        name: "Vindicator",
        class: "Medium",
        image: Vindicator
    },
    {
        id: "Centurion",
        name: "Centurion",
        class: "Medium",
        image: Centurion
    },
    {
        id: "Crab",
        name: "Crab",
        class: "Medium",
        image: Crab
    },
    {
        id: "Enforcer",
        name: "Enforcer",
        class: "Medium",
        image: Enforcer
    },
    {
        id: "Hunchback",
        name: "Hunchback",
        class: "Medium",
        image: Hunchback
    },
    {
        id: "Trebuchet",
        name: "Trebuchet",
        class: "Medium",
        image: Trebuchet
    },
    {
        id: "Griffin",
        name: "Griffin",
        class: "Medium",
        image: Griffin
    },
    {
        id: "Kintaro",
        name: "Kintaro",
        class: "Medium",
        image: Kintaro
    },
    {
        id: "ShadowHawk",
        name: "Shadow Hawk",
        class: "Medium",
        image: ShadowHawk
    },
    {
        id: "Wolverine",
        name: "Wolverine",
        class: "Medium",
        image: Wolverine
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