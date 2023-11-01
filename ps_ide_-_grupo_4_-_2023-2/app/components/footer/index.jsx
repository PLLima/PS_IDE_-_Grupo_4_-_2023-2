import styles from './style.module.css'
export default function Footer(props){
    return(
        <>
        <div className={styles.container}>
            <span>株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.</span>
            <span>Termos de Uso | Politica de Privacidade | Política de Cookies</span>
        </div>
        </>
    )
}