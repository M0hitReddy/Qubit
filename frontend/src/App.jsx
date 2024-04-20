import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import axios from 'axios';
import { useState, useEffect } from 'react';
import Chats from "./components/Chats.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Loading from './components/Loading.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Initially, set loading to true
  const [details, setDetails] = useState({});

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      const loggedIn = await isUserLoggedIn();
      setTimeout(() => setIsLoading(false), 1000); // Simulate loading time
      setIsLoggedIn(loggedIn);
      // setIsLoading(false); // Set loading to false once status is determined
    };
    checkLoggedInStatus();
  }, []);

  const isUserLoggedIn = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const isValid = await fetchData(token);
    return isValid;
  };

  const fetchData = async (token) => {
    try {
      const response = await axios.post('http://localhost:8080/details', { token: token });
      setDetails(response.data);
      return true;
    } catch (error) {
      console.error('Error verifying token:', error);
      setIsLoggedIn(false);
      return false;
    }
  };

  const handleSignup = async (formData, setError, setShowError) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/signup', formData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);
        const isValid = await fetchData(response.data.token); // Fetch and set user details
        if (!isValid) {
          setIsLoggedIn(false); // Set isLoggedIn to false if fetching details fails
        }
      } else {
        console.error('No token received');
      }
    } catch (error) {
      handleAuthError(error, setError, setShowError);
    }
  }

  const handleLogin = async (username, password, setError, setShowError) => {
    // setIsLoading(true); // Set loading to true during login attempt
    try {
      const response = await axios.post('http://localhost:8080/api/user/login', { username, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);
        const isValid = await fetchData(response.data.token); // Fetch and set user details
        if (!isValid) {
          setIsLoggedIn(false); // Set isLoggedIn to false if fetching details fails
        }
      } else {
        console.error('No token received');
      }
    } catch (error) {
      handleAuthError(error, setError, setShowError);
    } finally {
      // setIsLoading(false); // Set loading to false after login attempt
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleAuthError = (error, setError, setShowError) => {
    setError(error.response.data.message);
    setShowError(false);
    setTimeout(() => setShowError(true), 100); // Show error message after a short delay
    console.log(error.response.data.message);
    console.error('Error logging in:', error);
  };

  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {isLoading ? <Loading /> : (
          <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
            <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup onSignup={handleSignup} />} />
            <Route path="/" element={isLoggedIn ? <Chats details={details} onLogout={handleLogout} /> : <Navigate to="/login" />} />
          </Routes>
        )}
      </ThemeProvider>
    </Router>
  );
}

export default App;
