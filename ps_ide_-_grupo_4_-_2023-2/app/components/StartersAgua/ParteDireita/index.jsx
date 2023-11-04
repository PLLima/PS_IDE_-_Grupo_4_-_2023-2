import styles from './style.module.css'
import Image from 'next/image'
export default function ParteDireita(props)
{
    return(
        <>
            <div className={styles.container}>
                <Image src='/images/neko-piscando.png' width={275} height={150}/>
                <div className={styles.atributos}>
                    <div className={styles.fracoSE}>
                        <Image src ='/images/tipos/Eletrico.png' height={35} width={35}/>
                        <Image src ='/images/tipos/Planta.png' height={35} width={35}/>
                    </div>
                    <div className={styles.fracoSE}> 
                        <Image src ='/images/tipos/Fogo.png' height={35} width={35}/>
                        <Image src ='/images/tipos/Terrestre.png' height={35} width={35}/>
                        <Image src ='/images/tipos/Pedra.png' height={35} width={35}/>
                    </div>
                </div>
                    <div className={styles.textoTipo}>
                            Água é um tipo calmo e versátil, com vantagem sobre Fogo e Terrestre. <br></br>
                            Pokémons aquáticos são frequentemente encontrados em ambientes úmidos.<br></br>
                    </div>
            </div>
        
        </>
    )
}