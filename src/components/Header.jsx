import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={styles.header}>
            <h1>My TODO App</h1>
            <nav>
                <Link to="/" style={styles.link}>Home</Link>
                {' | '}
                <Link to="/about" style={styles.link}>About</Link>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        textAlign: 'center',
    },
    link: {
        color: '#fff',
        margin: '0 8px',
        textDecoration: 'none',
    }
};

export default Header