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
    const[fraqqueza1, setFraqueza1] = useState('Eletrico');
    const[fraqqueza2, setFraqueza2] = useState('Planta');
    const[fraqqueza3, setFraqueza3] = useState('Eletrico');
    const[fraqqueza4, setFraqueza4] = useState('Eletrico');
    const[fraqqueza5, setFraqueza5] = useState('Eletrico');
    
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
                        <Image src='/images/tipos/Eletrico.png' height={35} width={35} />
                        <Image src='/images/tipos/Planta.png' height={35} width={35} />
                   </div>
                   <div className={styles.atributosDireita}>
                          <Image src='/images/tipos/Fogo.png' height={35} width={35} />
                         <Image src='/images/tipos/Terrestre.png' height={35} width={35} />
                         <Image src='/images/tipos/Pedra.png' height={35} width={35} />
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