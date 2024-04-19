import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from 'react';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    
    const fetchData = async (token) => {
        try {
            // const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/details', { token: token });
            console.log(response);
            return true;
            // setDetails(response.data);
        } catch (error) {
            // console.error('Error verifying token:', error);
            // setIsAuthenticated(false);
            // handleLogout();
            // isAuthenticated(false);
            // setIsLoggedIn(false);
            console.log('Token not found');
            return false;
        }
        // finally {
        // setIsLoading(false);
        // }
    };
    // useEffect(() => {

    // if (isAuthenticated) {
    // }
    // }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     console.log(username)
        //     const response = await axios.post('http://localhost:8080/api/user/login', { username, password });
        //     console.log(response.data.token); // Login successful
        //     localStorage.setItem('token', response.data.token);
        //     navigate('/');
        //     // Redirect or show success message
        // } catch (error) {
        //     console.error(error);
        //     setError('Invalid username or password');
        // }
        onLogin(username, password, setError, setShowError);
    };
    return (
        <Card className="mx-auto max-w-sm mt-[10%]">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                {/* <CardDescription>
                    {error === '' ? 'Enter your email below to login to your account' : <div className="text-red-500">{error}</div>}
                </CardDescription> */}
                {/* {error === '' ? <CardDescription>Enter your email below to login to your account</CardDescription> : <CardDescription className={`transition-opacity duration-500 ease-in-out ${showError ? 'opacity-100' : 'opacity-0'} text-red-500`}>
                    {error}
                </CardDescription>} */}
                {error === '' ? (
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                ) : (
                    <CardDescription className={`transition-opacity duration-100 ease-in-out ${showError ? 'animate-jiggle opacity-100' : 'opacity-0'} text-red-500`}>
                        {error}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full" onClick={handleSubmit}>
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to={'/signup'} className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
