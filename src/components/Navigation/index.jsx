import { Link } from "react-router-dom";
import "./styles.css"

export default function Navigation() {
    return (
        <header className="ContainerNav">
            <div className="NavBrand"><img src="/logo.svg" alt="Logo Mundo Filmes"/>Mundo<br/>Filmes</div>
            <nav>
                <Link to="/">Tudo</Link>
                <Link to="/filmes">Filmes</Link>
                <Link to="/tv">TV</Link>
            </nav>
        </header>
    )
}