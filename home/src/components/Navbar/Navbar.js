export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title" style={{paddingLeft: '30px'}}>Virtual <span>Library</span></a>
        <ul>
            <li>
                <a href="/pricing">pricing</a>
            </li>
            <li>
                <a href="/about">about</a>
            </li>
            <li className="button_border">
                <a href="/time">time</a>
            </li>
        </ul>
    </nav>
}