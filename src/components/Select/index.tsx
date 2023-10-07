'use client'
import { ChangeEvent, useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import Text from '../Text'

interface IOptions {
    id: string
    name: string
    value: string | number | boolean
}
interface ISelect {
    title: string
    placeholder: string
    options: Array<IOptions>
}

export default function Select({ title, placeholder, options }: ISelect) {
    const [selectedValue, setSelectedValue] = useState<IOptions | ''>('')
    const [query, setQuery] = useState('')

    const filteredValues = options.filter(opt => opt.name.toLowerCase().includes(query.toLowerCase()))

    const handleChange = (v: IOptions) => setSelectedValue(v)
    
    const handleQuery = (v: ChangeEvent<HTMLInputElement>) => setQuery(v.target.value)
    
    return (
        <div className='flex flex-row'>
            <Combobox 
                value={selectedValue} 
                onChange={handleChange}
            >
                {
                    ({ open }) => (
                        <div className='flex flex-col relative'>
                            <Combobox.Label className='mb-2'>
                                <Text type='label' >{title}</Text>
                            </Combobox.Label>
                            <div className='flex relative'>
                                <Combobox.Input 
                                    placeholder={placeholder}
                                    className='p-1 pr-6 focus-visible:outline-none'
                                    onChange={handleQuery}
                                    displayValue={(v: IOptions) => v.name}    
                                />
                                <Combobox.Button className='absolute p-1 right-1 top-1/2 -translate-y-1/2'>
                                    {
                                        open 
                                        ? <CaretUp size={12} color='#000'/>
                                        : <CaretDown size={12} color='#000'/>
                                    }
                                </Combobox.Button>
                            </div>
                            <Combobox.Options className='bg-zinc-400 border-x border-x-zinc-500 border-t border-t-zinc-500 absolute top-[68px] w-full'>
                                {
                                    filteredValues.map(v => <Combobox.Option className='p-1 cursor-pointer border-b border-b-zinc-500 hover:bg-zinc-200' key={v.id} value={v}>{v.name}</Combobox.Option>)
                                }
                            </Combobox.Options>
                        </div>
                    )
                }
            </Combobox>
        </div>
    )
}