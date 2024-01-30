import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>
                <h2>Cecilia</h2>
                <Link to={`/dashboard/18`}>Voir</Link>
            </div>
            <div>
                <h2>Karl</h2>
                <Link to={`/dashboard/12`}>Voir</Link>
            </div>
        </div>
    );
}

export default Home;
