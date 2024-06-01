import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
            <Button>DEFAULT</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="primaryOutline">Primary Outline</Button>

            <Button variant="secondary">Secondary</Button>
            <Button variant="secondaryOutline">Secondary Outline</Button>

            <Button variant="danger">Danger</Button>
            <Button variant="dangerOutline">Danger Outline</Button>
            
            <Button variant="super">super</Button>
            <Button variant="superOutline">super Outline</Button>

            <Button variant="ghost">ghost</Button>
            <Button variant="sidebar">sidebar</Button>
            <Button variant="sidebarOutline">sidebarOutline</Button>
            
       
        </div>
    )
}

export default page