import styles from './header.module.css'
import Link from 'next/link'

export default function Header(){
    return(
        <>
            <header className={styles.container}>
                <Link href="#Home">
                    <span>HOME</span>
                </Link>
                <Link href="#Starters">
                    <span>INICIAIS</span>
                </Link>
                <Link href="#SobreNos">
                    <span>SOBRE</span>
                </Link>
                <Link href="#Forms">
                    <span>FORMULARIO</span>
                </Link>
            </header>
        </>
    )
}
