import styles from './style.module.css'
import Image from 'next/image'
export default function ParteDireita(props)
{
    return(
        <>
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
                            Água é um tipo calmo e versátil, com vantagem sobre 
                            Fogo e Terrestre. Pokémons aquáticos são 
                            frequentemente encontrados em ambientes úmidos.
                    </span>
            </div>
            
        </>
    )
}