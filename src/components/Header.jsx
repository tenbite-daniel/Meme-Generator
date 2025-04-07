import logo from "../assets/troll-face.png"

function Header() {
    return (
        <header>
            <img src={logo} className="logo" alt="Troll Face Logo" />
            <h1>Meme Generator</h1>
        </header>
    )

}

export default Header