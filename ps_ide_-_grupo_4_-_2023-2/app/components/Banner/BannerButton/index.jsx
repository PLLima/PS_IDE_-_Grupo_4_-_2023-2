import styles from './bannerbutton.module.css'
import pixelBorders from '../../../borders.module.css'

export default function BannerButton(props){
    return(
        <>
            <div className={pixelBorders.pixelCorners}>
                <span>{props.text}</span>
            </div>
        </>
    )
}