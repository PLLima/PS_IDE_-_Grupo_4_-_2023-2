import styles from './style.module.css'
export default function ImagemNeko(props)
{ return(
    <>
        <div className={styles.container}>
            <img src='/images/neko-comemorando.png' alt = "container" className={styles.container}/>
        </div>
    </>
    )
}