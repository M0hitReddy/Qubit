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


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await onLogin(username, password, setError, setShowError);
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await onLogin(username, password, setError, setShowError);
        } catch (error) {
          setError('Wrong credentials');
          setShowError(true);
        }
      };
    // const handleSubmit = async (e) => {
    //     e.preventDefault(); // Prevent default form submission behavior
    //     try {
    //         await onLogin(username, password, setError, setShowError);
    //         navigate('/'); // Navigate to home page after successful login
    //     } catch (error) {
    //         console.error('Error logging in:', error);
    //         // Handle error
    //     }
    // };

    
    return (
        <Card className="mx-auto max-w-sm mt-[10%]">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                {error === '' ? (
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                ) : (
                    <CardDescription className={`transition-opacity duration-100 ease-in-out ${showError ? 'animate-jiggle opacity-100' : 'opacity-0'} text-red-500`}>
                        {error}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="username"
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
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </form>
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
