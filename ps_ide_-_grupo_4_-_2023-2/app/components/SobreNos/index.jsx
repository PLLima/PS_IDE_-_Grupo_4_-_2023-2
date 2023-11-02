import styles from './style.module.css'
import Titulo from "./Titulo"
import TextoPrincipal from "./TextoPrincipal"
export default function SobreNos(){
    return(  
            <div className={styles.container}>
                <Titulo/>
                <TextoPrincipal/>
            </div>
    )
}
