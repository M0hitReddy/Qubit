import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { dummyData } from "../DummyData";
import Chat from "./Chat";
import SideMenu from "./SideMenu";
import { ChatShadcn } from "./ChatShadcn";
export default function Chats({details,onLogout}) {
    const [selectedChat, setSelectedChat] = useState();
    const [search, setSearch] = useState('');
    const [chats, setChats] = useState(dummyData);
    const handleChatSelected = (id) => {
        // console.log(e.target.key);
        setSelectedChat(parseInt(id));
    }
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        const filteredData = dummyData.filter((data) => {
            return data.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setChats(filteredData);
    }
    return (
        <>
            <main className="flex">
                <SideMenu details={details} onLogout={onLogout}/>
                <Card className='rounded-none flex flex-col  border-black border-y-0 bg-gray-100 shadow-none border-r-1 w-[200px] sm:w-1/3 h-screen'>
                    <div className="p-2 z-10 w-full bg-gray-100">
                        <div className="relative m-2 rounded-lg shadow-xl ">
                            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 bg-zinc-200 border-b-slate-400 focus:border-b-zinc-700 focus-visible:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 border-b-4"
                                value={search}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    {/* <CardHeader> */}
                    {/* <CardTitle>Recent Sales</CardTitle> */}
                    {/* </CardHeader> */}
                    <ScrollArea>
                        <CardContent className="grid p-0 w-full  ">
                            {chats.map((contact) => (
                                <div key={contact.id} className={"flex items-center w-full gap-4 px-3 py-3 cursor-pointer" + (selectedChat === contact.id ? ' bg-gray-300' : ' hover:bg-gray-200')} onClick={() => handleChatSelected(contact.id)}>
                                    <Avatar className='shadow-md border border-1 bg-none '>
                                        <AvatarImage src={contact.image} className='break-all' alt={contact.name} />
                                        <AvatarFallback className='shadow-xl break-all border border-1 bg-none'>{contact.avatarFallback}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col items-start">
                                        <h2 className="text-lg break-all font-semibold">{contact.name}</h2>
                                        <p className="text-sm break-all text-neutral-500 hidden sm:block">{contact.email}</p>
                                    </div>
                                    {/* <span className="text-lg font-semibold">{   contact.amount}</span> */}
                                </div>
                            ))}

                        </CardContent>
                    </ScrollArea>
                </Card >
                {selectedChat && 
                // <ChatShadcn contact={dummyData.filter((data) => data.id === selectedChat)[0]} />
                <Chat contact={dummyData.filter((data) => data.id === selectedChat)[0]} />
                }
            </main>
        </>
    )
}
