import React, { useEffect, useState } from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
function SideMenu(props) {
    const [profileOpen, setProfileOpen] = useState(false);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleClickOutside = (event) => {
        // if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setProfileOpen(false);
        // }
    };
    const handleProfileClick = () => {
        setProfileOpen(!profileOpen);
    }
    return (
        <section className='w-16 bg-neutral-800  h-screen py-3 '>
            <aside className='h-full'>
                <nav className='h-full relative flex flex-col justify-between items-center'>
                    <div></div>
                    <Avatar className='cursor-pointer' onClick={handleProfileClick}>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className={`absolute flex flex-col justify-between duration-150 bottom-0 left-2 bg-white rounded-md min-h-60 p-4 ${!profileOpen ? ' translate-y-[120%]' : ' '}`}>
                        {/* <div className={'absolute flex flex-col justify-between bottom-0 left-2 bg-white rounded-md min-h-60 p-4' + (profileOpen ? ' translate-y-[120%]' : ' ')}> */}
                        <div className='flex gap-4'>
                            <Avatar className='cursor-pointer w-16 h-16' onClick={handleProfileClick}>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className='font-bold text-zinc-800 text-2xl'>{props.username}</p>
                                <p className='text-zinc-400'>{props.email}</p>
                            </div>
                        </div>
                        <div className='w-full h-6 rounded-md bg-slate-200'></div>
                        <div className='w-full h-6 rounded-md bg-slate-200'></div>
                        <div>
                            <Button className='w-full'>Edit Profile</Button>
                        </div>
                    </div>
                </nav>
            </aside>
        </section>
    )
}

export default SideMenu;