import styles from './footermedia.module.css'
import Image from 'next/image'

export default function FooterMedia(){
    return(
        <>
            <div className={styles.container}>
                <a href="https://www.pokemon.com/br/">
                    <Image
                        className={styles.pokemonLogo}
                        src="/images/pokemon-logo.png"
                        height={400}
                        width={400}
                        alt=""
                    />
                </a>
                <a href="https://www.instagram.com/ide_jr/">
                    <Image
                        className={styles.instagramLogo}
                        src="/images/instagram-logo.png"
                        height={400}
                        width={400}
                        alt=""
                    />
                </a>
                <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/?originalSubdomain=br">
                    <Image
                    className={styles.linkedinLogo}
                    src="/images/linkedin-logo.png"
                    height={400}
                    width={400}
                    alt=""
                    />
                </a>
                <a href="https://www.idejr.com.br/">
                    <Image
                        className={styles.ideLogo}
                        src="/images/logo-pixelado-branco.png"
                        height={360}
                        width={660}
                        alt=""
                    />
                </a>
            </div>
        </>
    )
}