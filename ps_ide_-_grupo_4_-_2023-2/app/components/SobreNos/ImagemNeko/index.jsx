import styles from './style.module.css'
import Image from 'next/image'
export default function ImagemNeko(props)
{ return(
    <>
        <div className={styles.container}>
            <Image 
                src = '/images/neko-comemorando.png' alt = "" className={styles.container}
                height={920}
                width={870}
            />
        </div>
    </>
    )
}