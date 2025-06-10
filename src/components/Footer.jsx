function Footer() {
    return (
        <footer style={style.footer}>
            <p>&copy; 2025 My TODO App</p>
        </footer>
    );
}

const style = {
    footer: {
        backgroundColor: '#eee',
        color: '#333',
        padding: '10px 20px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }
}

export default Footer;