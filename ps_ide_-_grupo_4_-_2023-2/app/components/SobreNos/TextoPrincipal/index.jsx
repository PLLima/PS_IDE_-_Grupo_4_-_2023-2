import styles from './style.module.css'
export default function TextoPrincipal(props)
{
    return(
        <>
        <div className={styles.container}>
            <p> paragrafo </p>
        </div>
        <span>
            <img src='/imagens/logo-pixelado-branco.png'/>
        </span>
        </>
    )
}