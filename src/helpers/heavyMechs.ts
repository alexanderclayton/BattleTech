import Dragon from '../assets/HeavyMechImages/DragonCardImage.png'

type Heavy = {
    id: string
    name: string
    image: string
    weapons?: number
    pilots?: string[]
}

export const HeavyMechData: Heavy[] = [
    {
        id: "Dragon",
        name: "Dragon",
        image: Dragon
    }
]