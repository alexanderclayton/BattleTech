import Cicada from '../assets/MediumMechImages/CicadaCardImage.png'

type Medium = {
    id: string
    name: string
    image: string
    weapons?: number
    pilots?: string[]
}

export const MediumMechData: Medium[] = [
    {
        id: "Cicada",
        name: "Cicada",
        image: Cicada
    }
]