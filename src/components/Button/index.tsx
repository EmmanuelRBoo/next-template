'use client'
import { Button as Btn } from '@nextui-org/react'

interface IButton {
    variant?: "primary" | "secondary" | "warning" | "danger" | "success" | "default"
    size?: "sm" | "md" | "lg"
    disable?: boolean
    loading?: boolean
    icon?: React.ReactNode | React.ReactNode[]
    children: React.ReactNode | React.ReactNode[] | string
    onClick: (props: any) => void
    onLoad?: (props: any) => void
}

export default function Button({ variant, size, disable, loading, children, icon, onClick, onLoad }: IButton) {
    
    return (
        <Btn 
            size={size || 'md'} 
            color={variant || 'primary'}
            onPress={onClick}
            onLoad={onLoad}
            isDisabled={disable}
            isLoading={loading}
            startContent={icon || <></>}
        >
            {children}
        </Btn>
    )
}