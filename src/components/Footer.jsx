import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            {/* Parte superior */}
            <div className="footer-top">
                <div className="footer-logo">
                    <span className="gradient">N.A</span>
                </div>
                <div className="footer-contact">
                    <span>+55 11 94930-9385</span>
                    <span>nykolasalmeida9@gmail.com</span>
                    <div className="footer-icons">
                        <a href="https://github.com/nykolas25" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/nykolas-alves-9a3a47234/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Linha separadora */}
            <hr />

            {/* Parte inferior */}
            <div className="footer-bottom">
                <nav className="footer-nav">
                    <a href="#inicio">Inicio</a>
                    <a href="#sobre">Sobre Mim</a>
                    <a href="#habilidades">Habilidades</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contato">Contato</a>
                </nav>
                <p className="footer-rights">
                    Direitos Reservados por <span id='autor'>Nykolas Alves</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
