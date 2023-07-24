import Flea from '../assets/LightMechImages/FleaCardImage.png'

type Light = {
    id: string
    name: string
    image: string
    weapons?: number
    pilots?: string[]
}

export const LightMechsData: Light[] = [
    {
        id: "Flea",
        name: "Flea",
        image: Flea,
    }
]