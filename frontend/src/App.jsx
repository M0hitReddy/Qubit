import { BrowserRouter as Router, Route, useNavigate, Routes, Link } from 'react-router-dom';
// import Redirect from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import { buttonVariants } from "@/components/ui/button"

import axios from 'axios';
import { useState, useMemo, useEffect } from 'react';
// import DialogMine from './components/DialogMine.jsx';
// import Input from "./components/InputMine.jsx";
import { io } from 'socket.io-client';
import Chats from "./components/Chats.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { ShowerHead } from 'lucide-react';
import Loading from './components/Loading.jsx';
// import SideMenu from "./components/SideMenu.jsx";
function App() {
  // const socket = useMemo(() => io('http://localhost:8080'), []);
  // useEffect(() => {
  //   socket.on('connect', () => { console.log('connected', socket.id); });
  // }, [socket]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [details, setDetails] = useState({});


  useEffect(() => {
    const fun = async () => {
      const loggedInStatus = await isUserLoggedIn();
      console.log(loggedInStatus);
      setIsLoggedIn(loggedInStatus);
      // setIsLoading(!isLoggedIn);
    }
    fun()
  }, []);

  const fetchData = async (token) => {
    try {
      const response = await axios.post('http://localhost:8080/details', { token: token });
      console.log(response);
      setDetails(response.data);
      return true;
    } catch (error) {
      console.error('Error verifying token:', error);
      setIsLoggedIn(false);
      console.log('Token not found');
      return false;
    }
  };
  const isUserLoggedIn = async () => {
    // Check if JWT token exists in local storage
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
      console.log('No token found');
      return false;
    }
    // Check if token is valid
    const isValid = await fetchData(token);
    if (isValid) {
      console.log('Token found');
      return true;
    };
    return false;
  }

  const handleSignup = async (formData, setError, setShowError) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/signup', formData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);
        setIsLoading(!isLoggedIn);
        fetchData(response.data.token);
        // setDetails(response.data);
      } else {
        console.error('No token received');
      }
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      setShowError(false);
      setTimeout(() => {
        setShowError(true);
      }, 100);
      console.error('Error logging in:', error);
    }
  }

  const handleLogin = async (username, password, setError, setShowError) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/user/login', { username, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);
        setIsLoading(!isLoggedIn);
        setError('');
        fetchData(response.data.token);
        // setDetails(response.data);
      } else {
        console.error('No token received');
      }
    } catch (error) {
      setError(error.response.data.message);
      setShowError(false);
      setTimeout(() => {
        setShowError(true);
      }, 100);
      console.error('Error logging in:', error);
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    // console.log('logged out');
    setIsLoading(true);
    setIsLoggedIn(false);
  };

  //  return <Loading />;

  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Routes>
            {/* <Route path="/signup" Component={Signup} />
            <Route path="/login" Component={Login} />
            <Route path="/" element={<ProtectedRoute isUserLoggedIn={isUserLoggedIn} socket={socket} />} /> */}
            <Route path="/login" element={<LoginRoute isLoggedIn={isLoggedIn} isLoading={isLoading} onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupRoute isLoggedIn={isLoggedIn} isLoading={isLoading} onSignup={handleSignup} />} />
            <Route path="/" element={<HomeRoute isLoggedIn={isLoggedIn} isLoading={isLoading} details={details} onLogout={handleLogout} />} />
          </Routes >
        </ThemeProvider>
      </Router>
    </>
  )
}

const LoginRoute = ({ isLoggedIn, isLoading, onLogin }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn && !isLoading) {
      console.log('logged in');
      navigate("/");
    }
  }, [isLoggedIn, isLoading, navigate]);
  if (isLoading) {
    return <Loading />;
  }
  return isLoggedIn ? null : <Login onLogin={onLogin} />;
};

const SignupRoute = ({ isLoggedIn, isLoading, onSignup }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn && !isLoading) {
      navigate("/");
    }
  }, [isLoggedIn, isLoading, navigate]);
  if (isLoading) {
    return <Loading />;
  }
  return isLoggedIn ? null : <Signup onSignup={onSignup} />;
};

const HomeRoute = ({ isLoggedIn, isLoading, details, onLogout }) => {
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(!isLoggedIn);

  useEffect(() => {
    console.log(isLoggedIn, "home route");
    if (!isLoggedIn && isLoading) {
      console.log('not logged in');
      navigate("/login");
    }


  }, [isLoggedIn, isLoading, navigate]);
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    isLoggedIn ? <Chats details={details} onLogout={onLogout} /> : (navigate('/login'))
  )
  // <div className='flex gap-4 m-10 items-center text-xl'>
  {/* <p className='text-gray-500'>you must be logged in to view this content</p> */ }
  // <Loading />
  {/* <Link to={'/login'} className={buttonVariants({ variant: 'link' })}>login</Link> */ }
  // </div>;
};



export default App;
