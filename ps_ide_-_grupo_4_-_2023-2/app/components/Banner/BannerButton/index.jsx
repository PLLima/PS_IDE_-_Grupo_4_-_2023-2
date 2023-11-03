import styles from './bannerbutton.module.css'
import Image from 'next/image'
export default function BannerButton(props){
    return(
        <>
            <div className={styles.bannerButton}>
                <span>{props.text}</span>
            </div>
        </>
    )
}