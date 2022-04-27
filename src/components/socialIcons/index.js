import { iconDiscord, iconInstagram, iconTwitter } from '../../images';
import styles from './styles/index.module.scss'

const SocialIcons = () => {
    return (
        <div className={styles['icons']}>
            <a href="#"><img src={iconDiscord} alt="Discord" /></a>
            <a href="#"><img src={iconTwitter} alt="Twitter" /></a>
            <a href="#"><img src={iconInstagram} alt="Instagram" /></a>
        </div>
    )
}

export default SocialIcons;