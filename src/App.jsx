import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import Dashboard from './pages/dashboard';
import Error from './components/error';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';

function App() {
    return (
        <Router>
            <Header />
            <main className="main-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard/:idUser" element={<Dashboard />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;

