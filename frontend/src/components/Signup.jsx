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
import { useState } from 'react';
// import { on } from 'events';

export default function Signup({onSignup}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    });
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSignup(formData,setError,setShowError);
        // try {
        //     const response = await axios.post(
        //         'http://localhost:8080/api/user/signup',
        //         formData,
        //         { withCredentials: true }
        //     );
        //     const authHeader = response.headers['authorization'];

        //     console.log(response.data);
        //     localStorage.setItem('token', response.data.token);
        //     console.log(authHeader) // User created successfully
        //     // Redirect or show success message
        //     // Redirect
        //     navigate('/');
        // } catch (error) {
        //     console.error(error);
        //     setError(error.response.data.message);
        //     // setError('jj')
        // }
    };
    return (
        <Card className="mx-auto max-w-sm mt-[10%]">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                {/* <CardDescription>
                    Enter your information to create an account
                </CardDescription> */}
                {error === '' ? (
                    <CardDescription>Enter your information to create an account</CardDescription>
                ) : (
                    <CardDescription className={`transition-opacity duration-100 ease-in-out ${showError ? 'animate-jiggle opacity-100' : 'opacity-0'} text-red-500`}>
                        {error}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input
                                    id="first-name"
                                    name='firstname'
                                    placeholder="Max"
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input
                                    id="last-name"
                                    name='lastname'
                                    placeholder="Robinson"
                                    value={formData.lastname}
                                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="username"
                                name='username'
                                type="email"
                                placeholder="m@example.com"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                required
                            />
                            {/* {error && <p className='text-red-700'>{error}</p>} */}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name='password'
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <Button type="submit" className="w-full" >
                            Create an account
                        </Button>
                        <Button variant="outline" className="w-full">
                            Sign up with GitHub
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link to={'/login'} className="underline">
                            Sign in
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
