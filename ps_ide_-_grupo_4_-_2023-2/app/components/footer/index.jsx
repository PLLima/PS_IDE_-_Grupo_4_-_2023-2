import styles from './footer.module.css'
import FooterMedia from './FooterMedia'
import Image from 'next/image'

export default function Footer(){
    return(
        <>
            <footer className={styles.container}>
                <FooterMedia/>
                <span>株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.</span>
                <span>Termos de Uso | Politica de Privacidade | Política de Cookies</span>
                <Image
                        className={styles.ide}
                        src="/images/logo-pixelado-branco.png"
                        height={360}
                        width={660}
                        alt=""
                />
            </footer>
        </>
    )
}