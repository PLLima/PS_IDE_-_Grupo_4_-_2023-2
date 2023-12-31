import styles from './banner.module.css'
import BannerTitle from './BannerTitle'
import BannerButton from './BannerButton'
import Image from 'next/image'
import Link from 'next/link'

export default function Banner(){
    return(
        <>
            <div id="Home" className={styles.container}>
                <Image
                    className={styles.bannerImage}
                    src="/images/neko-anotando.png"
                    height={571}
                    width={500}
                    alt=""
                />
                <div className={styles.bannerTitleButton}>
                    <BannerTitle/>
                    <Link href="#Starters">
                        <BannerButton text="START"/>
                    </Link>
                </div>
            </div>
        </>
    )
}