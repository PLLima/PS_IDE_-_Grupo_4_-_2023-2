import styles from './style.module.css'
import Image from 'next/image'
export default function ParteEsquerda(props)
{
    return(
        <>
        <div className={styles.container}>
                    <div className={styles.grid}>
                        <Image src='/images/pokemons/agua/1.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/2.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/3.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/4.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/5.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/6.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/7.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/8.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/9.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/10.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/11.png' height={200} width={100} />
                        <Image src='/images/pokemons/agua/12.png' height={200} width={100} />
                    </div>
                    
                    <div className={styles.logos}>
                        <button> <Image src='/images/tipos/Agua_longo.png' height={400} width={300} /> </button>
                        <button> <Image src='/images/tipos/Planta_longo.png' height={400} width={300} /> </button>
                        <button> <Image src='/images/tipos/Fogo_longo.png' height={400} width={300} /> </button>
                    </div>
        </div>
        
        </>
    )
}