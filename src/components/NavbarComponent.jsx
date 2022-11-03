import logo from '../logo.svg';

export default function NavBar(props){
    return (
        <nav className="navBar">
            <img src={logo} alt="logo" className='logo'></img>
        <ul className="nav-list">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Se connecter</a></li>
            <li className="nav-item"><a href="#" className="nav-link">S'inscrire</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contactez-nous</a></li>
        </ul>
    </nav>
    )
}