import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return(
        <>
            <div className={styles.container}>
                <Image
                    className={styles.bannerImage}
                    src="/images/neko-anotando.png"
                    height={500}
                    width={500}
                    alt=""
                />
                <h3>Teste 2</h3>
            </div>
        </>
    )
}