import React, { useEffect, useRef, useState } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { dummyMessages } from '../DummyData';
function Chat(props) {
  const [messages, setMessages] = useState(dummyMessages);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(scrollToBottom, [messages]);
  const handleSendMessage = () => {
    setMessages([...messages, {
      id: messages.length + 1,
      sender: 'me',
      message: message,
      time: '10:35 AM'
    }]);
  }

  return (
    <section className='flex-grow flex flex-col h-screen'>
      <div key={props.contact?.id} className="flex items-center bg-zinc-800 text-white w-full gap-4 px-3 py-3 ">
        <Avatar className='shadow-md border border-1 bg-none '>
          <AvatarImage src={props.contact?.image} className='break-all' alt={props.contact?.name} />
          <AvatarFallback className='shadow-xl bg-white text-black break-all border border-1 bg-none'>{props.contact?.avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h2 className="text-lg break-all font-semibold">{props.contact?.name}</h2>

        </div>
        {/* <span className="text-lg font-semibold">{   props.contact.amount}</span> */}
      </div>
      {/* <div className='flex-grow overflow-y-auto'> */}
      <ScrollArea >
        <div className='flex flex-grow overflow-y-auto flex-col '>

          {messages.map((message) => (
            <div key={message.id} className={"gap-1 px-4 py-2 w-max " + (message.sender === 'me' ? ' self-end' : ' self-start')}>
              <div className={`flex items-center gap-2 shadow-lg w-max max-w-[500px] p-2 break-all rounded-lg ${message.sender === 'me' ? 'bg-black' : ''}`}>
                <p className={`text-sm  ${message.sender === 'me' ? 'text-white' : 'text-black'}` }>{message.message}</p>
                <span className='text-xs text-zinc-400'>{message.time}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />                        
        </div>
        <ScrollBar orientation='vertical' className='bg-zinc-800'/>
      </ScrollArea>
      {/* </div> */}
      <hr />
      <div className='flex items-end bg-gray-10 gap-4 px-4 py-6 '>
        <Textarea placeholder="Type your message here." className='min-h-10 flex items-center px-4 text-md pt-1 max-h-10 resize-none focus-visible:-ring-1 focus:border-black ' value={message} onChange={e => setMessage(e.target.value)} />
        <Button className='bg-zinc-800' onClick={handleSendMessage}>Send</Button>
      </div>
    </section>
  )
}

export default Chat