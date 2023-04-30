
import '../NavBar/NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {

    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">URBA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Descuentos
                        </li>
                        <li className="nav-item">
                            Hombre
                        </li>
                        <li className="nav-item">
                            Mujer
                        </li>
                        <li className="nav-item">
                            Niños
                        </li>
                        
                    </ul>
                    
                </nav>
                <CartWidget />
            </div>
            
        </header>
        
    )
}

export default NavBar
