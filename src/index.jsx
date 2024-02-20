import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Création d'une racine React pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans la racine créée
root.render(
    // Utilisation de React.StrictMode pour des vérifications supplémentaires en mode de développement
    <React.StrictMode>
        {/* Composant principal de l'application */}
        <App />
    </React.StrictMode>
);

