import Container from "../../layout/container";
import Header from "../header";
import Timer from "../timer";
import styles from './styles/index.module.scss'

const FirstSection = () => {
    return (
        <div className={styles['first-section']}>
            <Container>
                <Header />
                <h1 className={styles['first-section__title']}>Become a Bookie, get a piece of the action from the hottest Sportsbook & Casino!</h1>
                <Timer />
            </Container>
        </div>
    )
}

export default FirstSection;