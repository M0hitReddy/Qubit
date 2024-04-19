import React, { useEffect, useRef, useState } from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
function SideMenu({details,onLogout}) {
    const profileRef = useRef();
    const [profileOpen, setProfileOpen] = useState(false);
    useEffect(() => {
        function handleClickOutside(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleProfileClick = () => {
        setProfileOpen(!profileOpen);
    }
    const handleLogout = () => {
        // Remove the token from local storage
        // localStorage.removeItem('token');
    
        // Update state to reflect that user is no longer authenticated
        onLogout();
    };
    return (
        <section className='w-16 bg-neutral-800  h-screen py-3 '>
            <aside className='h-full'>
                <nav className='h-full relative flex flex-col justify-between items-center'>
                    <div></div>
                    <Avatar className='cursor-pointer' onClick={handleProfileClick}>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div ref={profileRef} className={`absolute flex flex-col justify-between duration-150 bottom-0 left-2 bg-white rounded-md min-h-60 p-4 overflow-hidden ${!profileOpen ? ' -translate-x-[120%]' : ' '}`}>
                        {/* <div className={'absolute flex flex-col justify-between bottom-0 left-2 bg-white rounded-md min-h-60 p-4' + (profileOpen ? ' translate-y-[120%]' : ' ')}> */}
                        <div className='flex gap-4'>
                            <Avatar className='cursor-pointer w-16 h-16' onClick={handleProfileClick}>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className='font-bold text-zinc-800 text-2xl'>{details.first_name}</p>
                                <p className='text-zinc-400'>{details.username}</p>
                            </div>
                        </div>
                        <div className='w-full h-6 rounded-md bg-slate-200'></div>
                        <div className='w-full h-6 rounded-md bg-slate-200'></div>
                        <div className='flex gap-2' >
                            <Button className='w-full border-black border-[1px]' variant='outline'>Edit Profile</Button>
                            <Button className='w-max'  onClick={handleLogout}><span className="material-symbols-outlined">
                                logout
                            </span></Button>

                        </div>
                    </div>
                </nav>
            </aside>
        </section>
    )
}

export default SideMenu;