import yoga from '../../assets/yoga.png';
import swim from '../../assets/swim.png';
import bike from '../../assets/bike.png';
import dumbell from '../../assets/dumbell.png';

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-icon-list">
                <li className="footer-icon-item">
                    <img className="footer-icon" src={swim} alt="" />
                </li>
                <li className="footer-icon-item">
                    <img className="footer-icon" src={yoga} alt="" />
                </li>
                <li className="footer-icon-item">
                    <img className="footer-icon" src={bike} alt="" />
                </li>
                <li className="footer-icon-item">
                    <img className="footer-icon" src={dumbell} alt="" />
                </li>
            </ul>
            <div className="footer-text-container">
                <h2 className="footer-text">Copyright, SportSee 2024</h2>
            </div>
        </footer>
    );
}

export default Footer;
