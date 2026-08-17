import './Header.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        let timeout;

        const handleScroll = () => {
            const isTop = window.scrollY === 0;
            setAtTop(isTop);

            if (isTop) {
                // No topo → aparece na hora
                clearTimeout(timeout);
                setHidden(false);
            } else {
                // Fora do topo → delay antes de reaparecer
                setHidden(true);
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    setHidden(false);
                }, 250);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${hidden ? 'hidden' : ''} ${atTop ? 'at-top' : 'scrolled'}`}>
            <div className="logo">
                <span className="gradient"><a href='#inicio'>N.A.</a></span>
            </div>

            <button
                className={`hamburger ${menuOpen ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
                <a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a>
                <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
                <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>

                <div className='icons-header'>
                    <a href="https://github.com/nykolas25" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/nykolas-alves-9a3a47234/" id="linkedin" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
