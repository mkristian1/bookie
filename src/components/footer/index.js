import { logo } from '../../images';
import styles from './styles/index.module.scss';
import SocialIcons from '../socialIcons'
import { menu } from '../../const';
import cn from 'classnames';
import InputText from '../../ui/InputText';
import Button from '../../ui/Button'
import Container from '../../layout/container';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <Container>
                <div className={styles['footer__wrap']}>
                    <div className={styles['footer__logo-wrap']}>
                        <img src={logo} />
                        <div className={styles['footer__social']}>
                            <SocialIcons />
                        </div>
                    </div>
                    <div>
                        <ul className={styles['menu']}>
                            {menu.map((item, idx) => {
                                return (
                                    <li
                                        className={cn(styles['menu__item'], { 'mb-0': idx === 2 || idx === 5 })}
                                        key={idx}
                                    >
                                        <a className={styles['menu__link']} href="#">{item}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles['subscribe']}>
                        <h3 className={styles['subscribe__text']}>subscribe to our newsletter</h3>
                        <div className={styles['subscribe__elements']}>
                            <InputText placeholder='Your Email Address' />
                            <Button className={styles['subscribe__btn']}>
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={styles['copyright']}>
                Copyright © 2022 Dabookie. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;