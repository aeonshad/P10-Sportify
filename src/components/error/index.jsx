import { Link } from 'react-router-dom';

/**
 * Composant Error
 * @description Un composant représentant une page d'erreur 404.
 */
function Error() {
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <h2 className="error-text">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="error-link" to={'/'}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
