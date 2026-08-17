import './Main.css';
import fotoMykoll from '../assets/foto-mykoll.webp';
import imgHtml from '../assets/html.svg';
import imgCss from '../assets/css.svg';
import imgJS from '../assets/js.svg';
import imgReact from '../assets/react.svg';
import imgVite from '../assets/vite.svg';
import imgBootstrap from '../assets/bootstrap.svg';
import imgNode from '../assets/node.svg';
import imgPhp from '../assets/php.svg';
import imgGit from '../assets/git.svg';
import imgMysql from '../assets/mysql.svg';
import imgVScode from '../assets/vscode.svg';
import imgGithub from '../assets/github.svg';
import Banner1 from '../assets/Lyra.png';
import Banner2 from '../assets/Champs.png';
import Banner3 from '../assets/Elojob.png';
import Banner4 from '../assets/Autenticacao.png';
import Banner5 from '../assets/Fotografia.png';
import Banner6 from '../assets/Mova-se.png';
import imgLink from '../assets/link.svg';
import { FaGithub } from 'react-icons/fa';

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { useState } from "react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


function Main() {

    //useEffect , useRef do H1
    const tituloRef = useRef(null);
    const medidaRef = useRef(null);

    useEffect(() => {
        // mede a altura final do texto
        if (medidaRef.current && tituloRef.current) {
            tituloRef.current.style.minHeight = medidaRef.current.offsetHeight + "px";
        }

        // anima o texto
        gsap.to(tituloRef.current, {
            duration: 4,
            text: "Olá 👋,<br/>Meu nome é <br/><span class='gradient'>Nykolas Alves</span><br/>e eu sou <br/><span class='gradient'>Desenvolvedor</span><br/><span class='gradient'>Iniciante</span>",
            ease: "power1.inOut"
        });
    }, []);

    //useEffect , useRef da foto
    const circleRef = useRef(null);

    useEffect(() => {
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                y: -12,                // sobe só um pouquinho
                duration: 1.8,         // velocidade suave
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,            // infinito
                scrollTrigger: {
                    trigger: "#circle",
                    start: "top 80%",
                    once: true
                }
            });
        }
    }, []);

    //useEffect , useRef dos Cards
    const cardsRef = useRef([]);
    cardsRef.current = []; // zera para evitar duplicação

    useEffect(() => {
        if (cardsRef.current.length > 0) {
            ScrollTrigger.batch(cardsRef.current, {
                start: "top 85%",
                once: true,         // só anima uma vez
                onEnter: batch => {
                    gsap.fromTo(
                        batch,
                        { y: 50, opacity: 0, scale: 0.9 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            ease: "power3.out",
                            stagger: 0.2
                        }
                    );
                }
            });
        }
    }, []);

    //useEffect, useRef dos Icones
    const iconsRef = useRef([]);

    useEffect(() => {
        if (iconsRef.current.length > 0) {
            // estado inicial explosão
            gsap.set(iconsRef.current, {
                opacity: 0,
                scale: 0,
                x: () => gsap.utils.random(-200, 200),
                y: () => gsap.utils.random(-200, 200)
            });

            gsap.to(iconsRef.current, {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                duration: 1,
                ease: "back.out(1.7)",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#align-icons",
                    start: "top 85%",
                    once: true
                }
            });

            // animação no hover
            iconsRef.current.forEach(icon => {
                icon.addEventListener("mouseenter", () => {
                    gsap.to(icon, {
                        scale: 1.3,
                        rotation: gsap.utils.random(-10, 10), // gira aleatoriamente
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                icon.addEventListener("mouseleave", () => {
                    gsap.to(icon, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                });
            });
        }
    }, []);


    //useEffect, useRef do Contato
    const contatoRef = useRef(null);

    useEffect(() => {
        if (contatoRef.current) {
            gsap.fromTo(
                contatoRef.current,
                { y: 100, opacity: 0 },   // estado inicial (já bate com CSS)
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contatoRef.current,
                        start: "top 85%",
                        once: true
                    }
                }
            );
        }
    }, []);


    //useState do Contato para mandar e-mail
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // inicia o loading

        try {
            // Caso queira usar local só colocar o http do seu localhost
            const response = await fetch("https://backend-ashy-psi-99.vercel.app/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, telefone, mensagem }),
            });

            if (response.ok) {
                setModalMessage("Mensagem enviada com sucesso! ✅");
                setEmail("");
                setTelefone("");
                setMensagem("");
            } else {
                setModalMessage("Erro ao enviar mensagem. ❌");
            }
        } catch {
            setModalMessage("Não foi possível enviar agora. ⚠️");
        } finally {
            setLoading(false); // para o loading
            setShowModal(true);
        }
    };


    return (
        <>
            <main id='inicio'>
                <div id='align'>

                    <h1 ref={tituloRef}>
                    </h1>

                    {/* título fantasma só para medir altura */}
                    <h1 ref={medidaRef} style={{
                        position: "absolute",
                        visibility: "hidden",
                        pointerEvents: "none",
                        whiteSpace: "pre-line"
                    }}>
                        Olá 👋,<br />Meu nome é <br /><span className='gradient'>Nykolas Alves</span><br />e eu sou <br /><span className='gradient'>Desenvolvedor</span><br /><span className='gradient' id='sobre'>FullStack</span>
                    </h1>

                    <div id='circle' ref={circleRef}>
                        <img src={fotoMykoll} alt="Nykolas Alves" width={300} loading="lazy" />
                    </div>
                </div>

                {/* Primeiro Tópico */}
                <h2 id='sobre-mim'>Sobre Mim</h2>

                <div className='align-text'>
                    <p id="habilidades">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
                </div>

                {/* Segundo Tópico */}
                <h2>Tecnologias Utilizadas</h2>

                <div className='align-text'>
                    <p>Tecnologias com as quais tenho trabalhado recentemente</p>
                </div>

                <div id='align-icons'>
                    <img ref={el => el && (iconsRef.current[0] = el)} src={imgHtml} alt="Icone Html" />
                    <img ref={el => el && (iconsRef.current[1] = el)} src={imgCss} alt="Icone Css" />
                    <img ref={el => el && (iconsRef.current[2] = el)} src={imgJS} alt="Icone Js" />
                    <img ref={el => el && (iconsRef.current[3] = el)} src={imgReact} alt="Icone React" />
                    <img ref={el => el && (iconsRef.current[4] = el)} src={imgVite} alt="Icone Vite" />
                    <img ref={el => el && (iconsRef.current[5] = el)} src={imgBootstrap} alt="Icone Bootstrap" />
                    <img ref={el => el && (iconsRef.current[6] = el)} src={imgNode} alt="Icone Node.js" />
                    <img ref={el => el && (iconsRef.current[7] = el)} src={imgPhp} alt="Icone PHP" />
                    <img ref={el => el && (iconsRef.current[8] = el)} src={imgGit} alt="Icone Git" />
                    <img ref={el => el && (iconsRef.current[9] = el)} src={imgMysql} alt="Icone Mysql" />
                    <img ref={el => el && (iconsRef.current[10] = el)} src={imgVScode} alt="Icone Vscode" />
                    <img ref={el => el && (iconsRef.current[11] = el)} src={imgGithub} alt="Icone Github" id='projetos' />
                </div>

                {/* Terceiro Tópico */}
                <h2>Projetos</h2>

                <div className='align-text' id='terceiro-tpc'>
                    <p>Alguns dos que já fiz até aqui</p>
                </div>

                <section className='cards'>
                    {/* Card 1 */}
                    <div className='card' ref={el => cardsRef.current[0] = el}>
                        <img src={Banner1} alt="" />
                        <p className='titulo-card'>Portfolio pessoal</p>
                        <p className='desc-card'>Este é meu portfolio pessoal, onde apresento meus projetos e habilidades como desenvolvedor.</p>
                        <p className='desc-tecno'><b className='tecnologias'>Tecnologias Utilizadas :</b><span className='tec-html'> HTML </span>,
                            <span className='tec-css'> CSS </span>,
                            <span className='tec-js'> Javascript </span>,
                            <span className='tec-node'> Node.js </span>
                        </p>

                        <div className='align-links'>
                            <div className='align-link'>
                                <img src={imgLink} alt="Icone do Link" />
                                <a href='https://github.com/nykolas25/Portifolio/' target="_blank" rel="noreferrer">Ver Site</a>
                            </div>
                            <div className='align-link'>
                                <FaGithub />
                                <a href='https://github.com/nykolas25/Portifolio' target="_blank" rel="noreferrer">
                                    Ver Código
                                </a>
                            </div>
                        </div>
                    </div>

                    
                    
                </section>

                                <h2 id="contato">Contato</h2>



        </main>
    </>
    );
}

export default Main;