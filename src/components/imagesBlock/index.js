import { character1, character2, character3, character4, character5, character6, character7, character8, character9 } from "../../images";
import styles from './styles/index.module.scss';

const ImagesBlock = () => {
    return (
            <div className={styles['images-block']}>
                <img src={character1} alt="Character" />
                <img src={character2} alt="Character" />
                <img src={character3} alt="Character" />
                <img src={character4} alt="Character" />
                <img src={character5} alt="Character" />
                <img src={character6} alt="Character" />
                <img src={character7} alt="Character" />
                <img src={character8} alt="Character" />
                <img src={character9} alt="Character" />
            </div>
    )
}

export default ImagesBlock;