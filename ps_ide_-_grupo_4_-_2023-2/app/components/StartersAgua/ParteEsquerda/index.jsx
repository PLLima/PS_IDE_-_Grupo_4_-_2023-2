'use client';
import { useState } from "react";
import styles from './style.module.css'
import Image from 'next/image'
export default function ParteEsquerda(props)
{
    const[elemento, setElemento] = useState('agua');
    
    function mudaElementoAgua()
    {
        setElemento('agua');
    }
    function mudaElementoPlanta()
    {
        setElemento('planta');
    }
    function mudaElementoFogo() {
        setElemento('fogo');
    }
    return(
        <>
        <div className={styles.container}>
                    <div className={styles.grid}>
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
                        <button onClick={mudaElementoAgua}> <Image src='/images/tipos/Agua_longo.png' height={400} width={300} /> </button>
                        <button onClick={mudaElementoPlanta}> <Image src='/images/tipos/Planta_longo.png' height={400} width={300} /> </button>
                        <button onClick={mudaElementoFogo}> <Image src='/images/tipos/Fogo_longo.png' height={400} width={300} /> </button>
                    </div>
        </div>
        
        </>
    )
}