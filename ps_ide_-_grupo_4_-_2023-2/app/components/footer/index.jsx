import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
        <>
            <div className={styles.container}>
                <imagens>
                    <a href="https://www.pokemon.com/br/">
                        <Image
                            src="/images/pokemon-logo.png"
                            height={56}
                            width={56}
                            alt=""
                        />
                    </a>
                    <a href="https://www.instagram.com/ide_jr/">
                        <Image
                            src="/images/instagram-logo.png"
                            height={56}
                            width={56}
                            alt=""
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/?originalSubdomain=br">
                        <Image
                            src="/images/linkedin-logo.png"
                            height={56}
                            width={56}
                            alt=""
                        />
                    </a>
                    <a href="https://www.idejr.com.br/">
                        <Image
                            src="/images/logo-pixelado-branco.png"
                            height={56}
                            width={100}
                            alt=""
                        />
                    </a>
                </imagens>
                <span>株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados. Termos de Uso | Politica de Privacidade | Política de Cookies</span>
                <ide>
                    <Image
                        src="/images/logo-pixelado-branco.png"
                        height={80}
                        width={150}
                        alt=""
                    />
                </ide>
            </div>
        </>
    )
}