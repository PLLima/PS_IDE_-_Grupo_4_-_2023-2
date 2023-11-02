import styles from './style.module.css'
import Titulo from "./Titulo"
import TextoPrincipal from "./TextoPrincipal"
import ImagemNeko from "./ImagemNeko"
export default function SobreNos(){
    return(  
            <div className={styles.container}>
                <div className={styles.title}>
                <Titulo/>
                </div>
                <div className={styles.textoImagem}>
                <TextoPrincipal/>
                <ImagemNeko/>
                </div>
            </div>
    )
}
