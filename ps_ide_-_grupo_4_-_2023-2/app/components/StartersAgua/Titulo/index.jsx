import styles from './style.module.css'
export default function Titulo(props)
{
    return(
        <>
        <div className={styles.container}>
            <span>{props.elemento}</span>
        </div>
        </>
    )
}