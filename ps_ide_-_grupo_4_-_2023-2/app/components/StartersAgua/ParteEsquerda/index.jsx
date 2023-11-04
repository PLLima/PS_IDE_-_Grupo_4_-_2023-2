'use client';
import { useState } from "react";
import styles from './style.module.css'
import Image from 'next/image'
import Titulo from '/app/components/StartersAgua/Titulo';

export default function ParteEsquerda(props)
{
    const[elemento, setElemento] = useState('agua');
    const[titulo, setTitulo] = useState('AGUA');
    const[bordaAgua, setBordaAgua] = useState(true);
    const[bordaPlanta, setBordaPlanta] = useState(false);
    const[bordaFogo, setBordaFogo] = useState(false);
    const[descrição1, setDescrição1] = useState('Água é um tipo calmo e versátil, com vantagem sobre'); 
    const[descrição2, setDescrição2] = useState('Fogo e Terrestre. Pokémons aquáticos são'); 
    const[descrição3, setDescrição3] = useState('frequentemente encontrados em ambientes úmidos.');
    const[mostrarFraqueza1, setMostrarFraqueza1] = useState(true);
    const[mostrarFraqueza2, setMostrarFraqueza2] = useState(true);
    const[mostrarFraqueza3, setMostrarFraqueza3] = useState(false);
    const[mostrarFraqueza4, setMostrarFraqueza4] = useState(false);
    const[mostrarFraqueza5, setMostrarFraqueza5] = useState(false);
    const[fraqueza1, setFraqueza1] = useState('Eletrico');
    const[fraqueza2, setFraqueza2] = useState('Planta');
    const[fraqueza3, setFraqueza3] = useState('Eletrico');
    const[fraqueza4, setFraqueza4] = useState('Eletrico');
    const[fraqueza5, setFraqueza5] = useState('Eletrico');
    const[se1, setSe1] = useState('Fogo');
    const[se2, setSe2] = useState('Terrestre');
    const[se3, setSe3] = useState('Pedra');
    const[se4, setSe4] = useState('Pedra');
    const[se5, setSe5] = useState('Pedra');
    const[mostrarSe1, setMostrarSe1] = useState(true);
    const[mostrarSe2, setMostrarSe2] = useState(true);
    const[mostrarSe3, setMostrarSe3] = useState(true);
    const[mostrarSe4, setMostrarSe4] = useState(false);

    function mudaElementoAgua()
    {
        setElemento('agua');
        setTitulo('AGUA');
        setBordaAgua(true);
        setBordaPlanta(false);
        setBordaFogo(false);
        setDescrição1('Água é um tipo calmo e versátil, com vantagem sobre');
        setDescrição2('Fogo e Terrestre. Pokémons aquáticos são');
        setDescrição3('frequentemente encontrados em ambientes úmidos.');
        setFraqueza1('Eletrico');
        setMostrarFraqueza1(true);
        setFraqueza2('Planta');
        setMostrarFraqueza2(true);
        setMostrarFraqueza3(false);
        setMostrarFraqueza4(false);
        setMostrarFraqueza5(false);
        setSe1('Fogo');
        setMostrarSe1(true);
        setSe2('Terrestre');
        setMostrarSe2(true);
        setSe3('Pedra');
        setMostrarSe3(true);
        setMostrarSe4(false);
    }
    function mudaElementoPlanta()
    {
        setElemento('planta');
        setTitulo('PLANTA');
        setBordaAgua(false);
        setBordaPlanta(true);
        setBordaFogo(false);
        setDescrição1('Planta é um tipo ligado à natureza, resistente à Água');
        setDescrição2('e terra. Pokémons do tipo Planta frequentemente');
        setDescrição3('possuem habilidades de cura e controle de status.');
        setFraqueza1('Fogo');
        setMostrarFraqueza1(true);
        setFraqueza2('Gelo');
        setMostrarFraqueza2(true);
        setFraqueza3('Poison');
        setMostrarFraqueza3(true);
        setFraqueza4('Voador');
        setMostrarFraqueza4(true);
        setFraqueza5('Inseto');
        setMostrarFraqueza5(true);
        setSe1('Agua');
        setMostrarSe1(true);
        setSe2('Terrestre');
        setMostrarSe2(true);
        setSe3('Pedra');
        setMostrarSe3(true);
        setMostrarSe4(false);
    }
    function mudaElementoFogo() {
        setElemento('fogo');
        setTitulo('FOGO');
        setBordaAgua(false);
        setBordaPlanta(false);
        setBordaFogo(true);
        setDescrição1('O tipo Fogo é conhecido por sua chama ardente e');
        setDescrição2('poder de queimar. Pokémons do tipo Fogo são');
        setDescrição3('ofensivos, apaixonados e resistem a Planta e Inseto.');
        setFraqueza1('Agua');
        setMostrarFraqueza1(true);
        setFraqueza2('Terrestre');
        setMostrarFraqueza2(true);
        setFraqueza3('Pedra');
        setMostrarFraqueza3(true);
        setMostrarFraqueza4(false);
        setMostrarFraqueza5(false);
        setSe1('Planta');
        setMostrarSe1(true);
        setSe2('Gelo');
        setMostrarSe2(true);
        setSe3('Inseto');
        setMostrarSe3(true);
        setSe4('Aço');
        setMostrarSe4(true);
    }

    return(
        <>
        <div className={styles.container}>
                <h1 className={`${styles.title} ${bordaAgua ? styles.bordaAgua : bordaPlanta ? styles.bordaPlanta : bordaFogo ? styles.bordaFogo : ''}`}>{titulo}</h1>
                <div className={`${styles.grid} ${bordaAgua ? styles.bordaAgua : bordaPlanta ? styles.bordaPlanta : bordaFogo ? styles.bordaFogo : ''}`}>
                        <Image src={'/images/pokemons/' + elemento + '/1.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/2.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/3.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/4.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/5.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/6.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/7.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/8.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/9.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/10.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/11.png'} height={200} width={100} />
                        <Image src={'/images/pokemons/' + elemento + '/12.png'} height={200} width={100} />
                    </div>
                    
                    <div className={styles.logos}>
                        <button onClick={mudaElementoAgua} className={styles.botaoAgua}> <Image src='/images/tipos/Agua_longo.png' height={400} width={300} /> </button>
                        <button onClick={mudaElementoPlanta}> <Image src='/images/tipos/Planta_longo.png' height={400} width={300} /> </button>
                        <button onClick={mudaElementoFogo}> <Image src='/images/tipos/Fogo_longo.png' height={400} width={300} /> </button>
                    </div>
        </div>
        <div className={styles.container_dir}>
                <div className={styles.neko}>
                    <Image src='/images/neko-piscando.png' width={300} height={175}/>
                </div>
                <div className={styles.atributos}>
                    <span>FRA:</span>
                    <span>SE:</span>
                </div>
                <div className={styles.atributos}>
                    <div className={styles.atributosEsquerda}>
                        {mostrarFraqueza1 && <Image src={'/images/tipos/' + fraqueza1 + '.png'} height={35} width={35} />}
                        {mostrarFraqueza2 && <Image src={'/images/tipos/' + fraqueza2 + '.png'} height={35} width={35} />}
                        {mostrarFraqueza3 && <Image src={'/images/tipos/' + fraqueza3 + '.png'} height={35} width={35} />}
                        {mostrarFraqueza4 && <Image src={'/images/tipos/' + fraqueza4 + '.png'} height={35} width={35} />}
                        {mostrarFraqueza5 && <Image src={'/images/tipos/' + fraqueza5 + '.png'} height={35} width={35} />}
                   </div>
                   <div className={styles.atributosDireita}>
                        {mostrarSe1 && <Image src={'/images/tipos/' + se1 + '.png'} height={35} width={35} />}
                        {mostrarSe2 && <Image src={'/images/tipos/' + se2 + '.png'} height={35} width={35} />}
                        {mostrarSe3 && <Image src={'/images/tipos/' + se3 + '.png'} height={35} width={35} />}
                        {mostrarSe4 && <Image src={'/images/tipos/' + se4 + '.png'} height={35} width={35} />}
                    </div>
                </div>
                    <span>
                            {descrição1}
                            {descrição2}
                            {descrição3}
                    </span>
            </div>
        
        </>
    )
}