import Container from "../../layout/container";
import ImagesBlock from "../imagesBlock";
import Minting from "../minting";
import styles from './styles/index.module.scss';

const SecondSection = () => {
    return (
        <div className={styles['second-section']}>
            <Container>
                <div className={styles['second-section__wrap']}>
                    <ImagesBlock />
                    <Minting />
                </div>
            </Container>
        </div>
    )
}

export default SecondSection;