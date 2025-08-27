import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;