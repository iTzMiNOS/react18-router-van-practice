import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className="nav--container">
            <nav className="nav--main">
            <h1 className="bold">#VANLIFE</h1>
            <div className="nav--menu">
                <h4 className="nav--menu--item"><Link to="/">Home</Link></h4>
                <h4 className="nav--menu--item"><Link to="/about">About</Link></h4>
                <h4 className="nav--menu--item">Vans</h4>
            </div>
            </nav>
        </header>
    )
  }
