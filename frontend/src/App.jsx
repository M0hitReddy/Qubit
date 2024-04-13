import { ThemeProvider } from "@/components/theme-provider"
import { useState } from 'react';
// import DialogMine from './components/DialogMine.jsx';
// import Input from "./components/InputMine.jsx";
import Chats from "./components/Chats.jsx";
// import SideMenu from "./components/SideMenu.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

        
        <Chats />
        {/* <DialogMine />
        <Input /> */}
      </ThemeProvider>
    </>
  )
}

export default App;
