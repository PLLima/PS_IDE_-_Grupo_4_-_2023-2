import styles from './bannertitle.module.css'

export default function BannerTitle(){
    return(
        <>
            <div className={`${styles.bannerTitle} font-title`}>
                <span>POKE</span>
                <span>
                    <span className={styles.bannerTitleRed}>IDE</span>
                    <span>X</span>
                </span>
            </div>
        </>
    )
}