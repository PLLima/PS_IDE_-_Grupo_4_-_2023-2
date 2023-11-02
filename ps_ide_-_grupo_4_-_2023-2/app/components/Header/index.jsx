import styles from './header.module.css'

export default function Header(){
    return(
        <>
            <div className={styles.container}>
                <span>HOME</span>
                <span>INICIAIS</span>
                <span>SOBRE</span>
                <span>FORMULARIO</span>
            </div>
        </>
    )
}
