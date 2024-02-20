import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

/**
 * Composant Header
 * @description Un composant représentant l'en-tête de l'application avec la barre de navigation.
 */
function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-container-logo">
                    <img className="navbar-logo" src={logo} alt="logo" />
                </div>
                <div className="navbar-container-link">
                    <Link className="navbar-link" to={'/'}>
                        Accueil
                    </Link>
                    <Link className="navbar-link" to={'/profil'}>
                        Profil
                    </Link>
                    <Link className="navbar-link" to={'/settings'}>
                        Réglages
                    </Link>
                    <Link className="navbar-link" to={'/community'}>
                        Communauté
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
