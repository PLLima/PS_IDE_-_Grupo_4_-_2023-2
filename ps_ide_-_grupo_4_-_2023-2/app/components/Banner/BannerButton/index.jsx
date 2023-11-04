import styles from './bannerbutton.module.css'
import Image from 'next/image'
export default function BannerButton(props){
    return(
        <>
            <button className={styles.bannerButton}>
                <span className={styles.bannerButtonText}>{props.text}</span>
                <Image
                    src="/images/borders/start-button-border.svg"
                    height={124}
                    width={562}
                    alt=""
                />
            </button>
        </>
    )
}