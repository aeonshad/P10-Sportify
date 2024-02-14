import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-card-container">
            <Link to={`/dashboard/18`}>
                <div className="home-card">
                    <h2 className="home-card-title">Cecilia</h2>
                </div>
            </Link>

            <Link to={`/dashboard/12`}>
                <div className="home-card">
                    <h2 className="home-card-title">Karl</h2>
                </div>
            </Link>
        </div>
    );
}

export default Home;
