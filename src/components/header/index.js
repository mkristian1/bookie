import { menu } from "../../const";
import { logo } from "../../images";
import SocialIcons from "../socialIcons";
import styles from "./styles/index.module.scss"

const Header = () => {
    
    return (
        <header className={styles['header']}>
            <img className={styles['header__logo']} src={logo} alt="Dabookie" />
            <ul className={styles['menu']}>
                {menu.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <a className={styles['menu__link']} href="#">{item}</a>
                        </li>
                    )
                })}
            </ul>
            <div>
                <SocialIcons />
            </div>
        </header>
    )
}

export default Header;