
import styles from './style.module.css'
export default function Header(props){
    return(
        <>
        <div className={styles.container}>
                <span>Inicio</span>
                <span>Contato</span>
                <span>Quem Somos</span>
                <span>IDE</span>
                <span>SLA</span>
        </div>

            <img src='/pasta/inter.png' style={{width: '200px', height: '200px'}}/>
        </>
    )
}