import styles from './style.module.css'
export default function Header(props){
    return(
        <>
        <div className={styles.container}>
            <span>HOME</span>
            <span>INICIAIS</span>
            <span>SOBRE</span>
            <span>FORMULÁRIO</span>
        </div>
        </>
    )
}