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
    
    function mudaElementoAgua()
    {
        setElemento('agua');
        setTitulo('AGUA');
        setBordaAgua(true);
        setBordaPlanta(false);
        setBordaFogo(false);
    }
    function mudaElementoPlanta()
    {
        setElemento('planta');
        setTitulo('PLANTA');
        setBordaAgua(false);
        setBordaPlanta(true);
        setBordaFogo(false);
    }
    function mudaElementoFogo() {
        setElemento('fogo');
        setTitulo('FOGO');
        setBordaAgua(false);
        setBordaPlanta(false);
        setBordaFogo(true);
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
        
        </>
    )
}