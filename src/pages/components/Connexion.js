// LoginComponent.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/Slice/authSlice";
import dataJSON from './data.json'
import Modal from "react-modal";


const LoginComponent = () => {
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = dataJSON.users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            dispatch(login());
            setModalOpen(false);
            setWelcomeModalOpen(true);
        } else {
            setModalOpen(false);
            setErrorModalOpen(true);
        }
        
        
    };

    const showModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
        <p className="cursor-pointor w-[100%] border-2 flex justify-around hover:bg-gray-300" onClick={showModal}>Se connecter  </p>
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Identifiant </label>
                                <input className="ml-2 bg-gray-200 "
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Mot de passe </label>
                                <input className="ml-2 mt-2 bg-gray-200 "
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit">Connexion</button>
                        </form>
                    </div>
                </div>
            )}
            <Modal
    isOpen={errorModalOpen}
    onRequestClose={() => setErrorModalOpen(false)}
    contentLabel="Erreur de connexion"
    className="error-modal"
>
    <h2 className="text-red-700">Erreur de connexion</h2>
    <p className="text-red-700">Identifiant ou mot de passe incorrect.</p>
    <button className="font-bold" onClick={() => setErrorModalOpen(false)}>X</button>
</Modal>

<Modal
    isOpen={welcomeModalOpen}
    onRequestClose={() => setWelcomeModalOpen(false)}
    contentLabel="Bienvenue"
    className="welcome-modal"
>
    <h2 className="Green">Bienvenue {username}!</h2>
    <button onClick={() => setWelcomeModalOpen(false)}>Fermer</button>
</Modal>


        </>
        
    );
};

export default LoginComponent;
