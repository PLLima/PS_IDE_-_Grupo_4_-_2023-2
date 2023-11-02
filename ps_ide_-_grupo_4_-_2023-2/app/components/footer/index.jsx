import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
        <>
            <div className={styles.container}>
                <a href="https://www.pokemon.com/br/">
                    <Image
                        className={styles.imagens}
                        src="/images/pokemon-logo.png"
                        height={100}
                        width={100}
                        alt=""
                    />
                </a>
                <a href="https://www.instagram.com/ide_jr/">
                    <Image
                        className={styles.imagens}
                        src="/images/instagram-logo.png"
                        height={100}
                        width={100}
                        alt=""
                    />
                </a>
                <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/?originalSubdomain=br">
                    <Image
                    className={styles.imagens}
                    src="/images/linkedin-logo.png"
                    height={100}
                    width={100}
                    alt=""
                    />
                </a>
                <a href="https://www.idejr.com.br/">
                    <Image
                        className={styles.imagens}
                        src="/images/logo-pixelado-branco.png"
                        height={400}
                        width={750}
                        alt=""
                    />
                </a>
                <span>株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.</span>
                <span>Termos de Uso | Politica de Privacidade | Política de Cookies</span>
                <Image
                        className={styles.ide}
                        src="/images/logo-pixelado-branco.png"
                        height={400}
                        width={750}
                        alt=""
                />
            </div>
        </>
    )
}