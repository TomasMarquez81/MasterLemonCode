import React from "react";
import { UserContex } from "@/user.context";
import Textfield from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PasswordIcon from '@mui/icons-material/Password';
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/layouts";

interface User {
    name: string;
    password: string;
}

export const Login: React.FC = () => {
    const [user, setUser] = React.useState<User>({name: "", password: ""});
    const {handleLogin} = React.useContext(UserContex);
    const navigate = useNavigate();

    const handleChangeUser = (field: keyof User) => (e) =>setUser({...user, [field]: e.target.value});

    return <AuthLayout>
    
    <form className="form" onSubmit={(e) => { 
  e.preventDefault(); 
  handleLogin(user.name, user.password);
  navigate("/private/selectapi"); // <-- Redirige tras login
}}>
    <p id="heading">
        Login
    </p>
        <div className="field">
           <PermIdentityIcon style={{ color: '#1976d2' }} className="input-icon"/>
            <Textfield
                autoComplete="off"
                className="input-field"
                label="Username"
                variant="outlined"
                type="text"
                value={user.name}
                onChange={handleChangeUser('name')}
                slotProps={{
                    inputLabel: {
                        sx: {
                            color: '#1976d2',
                        },
                    }, input: {
                        sx: {
                            color: '#1976d2',
                        },
                    },
                }}/>
        </div>
        <div className="field">
            <PasswordIcon style={{ color: '#1976d2' }} className="input-icon"/>
            <Textfield
                className="input-field"
                label="Password"
                variant="outlined"
                type="password"
                value={user.password}
                onChange={handleChangeUser('password')}
                slotProps={{
                    inputLabel: {
                        sx: {
                            color: '#1976d2',
                        },
                    },
                    input: {
                        sx: {
                            color: '#1976d2',
                        },
                    },
                }}/>
        </div>
        <div className="btn">
        <Button variant="outlined" size="small" type="submit" className="button">Login</Button>
        </div>
    </form>
    </AuthLayout>
}