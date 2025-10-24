import React from 'react';
import { Login } from '@/scenes/login';

interface UserContextModel{
    handleLogin: (name: string, password: string) => void;
}

export const UserContex = React.createContext<UserContextModel>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children}) =>{
    const [isUserLoggedIn, setisUserLoggedIn] = React.useState(false);
    const handleLogin = (name: string, password: string) => {        
        if(name === "admin" && password === "1234"){
            setisUserLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    }
    return (
        <UserContex.Provider value={{handleLogin}}>
            {isUserLoggedIn ? children : <Login />}
        </UserContex.Provider>
    )
}