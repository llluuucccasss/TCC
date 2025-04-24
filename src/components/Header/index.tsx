import { Link } from 'react-router-dom'
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <span>IronTrak</span>

            <nav>
                <Link to="/chat_treinador">treinador </Link>
                <Link to="/conta">Conta</Link>
                <Link to="/dieta">Dieta</Link>
                <Link to="/treino">treino</Link>
            </nav>
        </header>

    )
}
export default Header