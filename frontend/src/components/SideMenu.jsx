import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
function SideMenu() {
    const handleProfileClick = () => {
        
    }
    return (
        <section className='w-16 bg-zinc-900 border-x-white border border-y-0 h-screen py-3 '>
            <aside className='h-full'>
                <nav className='h-full flex flex-col justify-between items-center'>
                    <div></div>
                    <Avatar className='cursor-pointer' onClick={handleProfileClick}>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </nav>
            </aside>
        </section>
    )
}

export default SideMenu