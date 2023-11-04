import styles from './style.module.css';
import ParteEsquerda from './ParteDireita';
import ParteDireita from './ParteEsquerda';
import Titulo from './Titulo';

export default function StartersAgua(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Titulo/>
                </div>
                <div className={styles.textoImagem}>
                    <ParteDireita/>
                    <ParteEsquerda/>
                </div>
            </div>
           
        </>
    )
}