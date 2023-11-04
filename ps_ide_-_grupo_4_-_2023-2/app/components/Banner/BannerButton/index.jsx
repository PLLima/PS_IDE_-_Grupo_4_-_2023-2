import styles from './bannerbutton.module.css'
import Image from 'next/image'
export default function BannerButton(props){
    return(
        <>
            <div className={styles.bannerButton}>
                <Image
                    src="/images/borders/start-button-border.svg"
                    height={124}
                    width={562}
                    alt=""
                />
                <span className={styles.bannerButtonText}>{props.text}</span>
            </div>
        </>
    )
}