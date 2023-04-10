// LoginComponent.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/Slice/authSlice";
import dataJSON from './data.json'

const LoginComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = dataJSON.users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            dispatch(login());
            alert("Vous êtes connecté !");
        } else {
            alert("Identifiant ou mot de passe incorrect.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Identifiant :</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Mot de passe :</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Connexion</button>
        </form>
    );
};

export default LoginComponent;
