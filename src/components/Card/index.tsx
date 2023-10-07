import { ReactNode } from 'react'

interface ICard {
    row?: boolean
    col?: boolean
    children: React.ReactNode | ReactNode[]
}

export default function Card({ row, col, children }: ICard) {

    return (
        <div className={''}></div>
    )
}