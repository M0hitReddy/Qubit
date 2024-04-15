import { BrowserRouter as Router, Route, useNavigate, Routes } from 'react-router-dom';
// import Redirect from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import { useState, useMemo, useEffect } from 'react';
// import DialogMine from './components/DialogMine.jsx';
// import Input from "./components/InputMine.jsx";
import { io } from 'socket.io-client';
import Chats from "./components/Chats.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
// import SideMenu from "./components/SideMenu.jsx";
function App() {
  const socket = useMemo(() => io('http://localhost:8080'), []);
  useEffect(() => {
    socket.on('connect', () => { console.log('connected', socket.id); });
  }, [socket]);
  // const username = 'mmm';
  // const password = 'mmm';
  // const [valid, setValid] = useState(false);
  // useEffect(() => {
  const isUserAuthenticated = async () => {
    // Check if JWT token exists in cookies
    const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));

    if (!cookie) {
      return false;
    }

    // Extract the actual token value from the cookie string
    const token = cookie.split('=')[1].trim();
    // Send token to server for verification
    try {
      const response = await axios.post('/api/verifyToken', { token: token });
      return response.data.isAuthenticated;
    } catch (error) {
      console.error('Error verifying token:', error);
      return false;
    }
  }
  // }, [])
  // const navigate = useNavigate();

  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/signup" Component={Signup} />
            <Route path="/login" Component={Login} />
            {/* <Route path="/" Component={Chats} /> */}
            {/* <PrivateRoute path="/" component={Chats} /> */}
            <Route path="/" element={<ProtectedRoute isUserAuthenticated={isUserAuthenticated} socket={socket} />} />

            {
              // valid ? <Chats socket={socket} /> : <Login setValid={setValid} username={username} password={password} />
            }
            {/* <Chats socket={socket} /> */}
            {/* <DialogMine />
        <Input /> */}
          </Routes >
        </ThemeProvider>
      </Router>
    </>
  )
}
function ProtectedRoute({ isUserAuthenticated, socket }) {
  const navigate = useNavigate();
  const isAuthenticated = isUserAuthenticated(); // Adjust this as per your requirements

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Chats socket={socket} />;
}
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const navigate = useNavigate();
//   return (

//     <Route {...rest} render={(props) => (

//       // isUserAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
//       isUserAuthenticated() ? <Component {...props} /> : navigate('/login')
//     )} />
//   )
// };

export default App;
