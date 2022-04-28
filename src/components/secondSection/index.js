import Container from "../../layout/container";
import Footer from "../footer";
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
            <Footer />
        </div>
    )
}

export default SecondSection;