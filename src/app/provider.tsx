'use client'

import { NextUIProvider } from '@nextui-org/react'

interface IProvider {
    children: React.ReactNode
}

export default function Provider({ children }: IProvider) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}