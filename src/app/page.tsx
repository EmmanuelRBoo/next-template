'use client'
import { Select, Text, Button } from '@/components'

export default function Home() {
    const teste = [
        {
            id: '1',
            value: 1,
            name: 'organização name 1'
        },
        {
            id: '2',
            value: 2,
            name: 'organização name 2'
        },
        {
            id: '3',
            value: 3,
            name: 'organização name 3'
        },
        {
            id: '4',
            value: 4,
            name: 'organização name 4'
        },
    ]

    const renderSelect = () => (
        <div className='flex flex-col m-1'>
            <Select 
                title='Organização'
                placeholder='Selecione uma organização'
                options={teste}
            />
        </div>
    )

    const renderText = () => (
        <div className='flex flex-col m-1'>
            <Text bold type='title'>Teste</Text>
            <Text bold type='subtitle'>Teste</Text>
            <Text type='label'>Teste <Text bold >teste</Text></Text>
            <Text type='big'>Teste <Text type='small' italic>teste</Text></Text>
            <Text italic>Teste</Text>
            <Text italic type='small'>Teste</Text>
        </div>
    )

    const renderButton = () => (
        <div className='flex flex-col m-1'>
            <div className='flex flex-row my-1'><Button size='sm' onClick={() => {}}>Teste</Button></div>
            <div className='flex flex-row my-1'><Button size='sm' variant='secondary' onClick={() => {}}>Teste</Button></div>
            <div className='flex flex-row my-1'><Button disable size='sm' variant='success' onClick={() => {}}>Teste</Button></div>
            <div className='flex flex-row my-1'><Button size='sm' variant='warning' onClick={() => {}}>Teste</Button></div>
            <div className='flex flex-row my-1'><Button loading size='sm' variant='danger' onClick={() => {}}>Teste</Button></div>
            <div className='flex flex-row my-1'><Button size='sm' variant='default' onClick={() => {}}>Teste</Button></div>
        </div>
    )

    return (
        <main className="flex flex-col justify-evenly w-screen h-screen">
            { renderSelect() }
            { renderText() }
            { renderButton() }
        </main>
    )
}
