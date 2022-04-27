import { useState } from 'react';
import Container from '../../layout/container';
import Button from '../../ui/Button';
import styles from './styles/index.module.scss'

const WarningMsg = () => {
    const [isShow, setIsShow] = useState(true)

    return (
        isShow &&
        <div className={styles['warning-msg']}>
            <Container>
                Please make sure you are visiting &nbsp;
                <a target='_blank' href="https://www.dabookienft.com">https://www.dabookienft.com</a>&nbsp;
                check the URL carefully.
                <Button
                    className={styles['warning-msg__close-btn']}
                    variant='transparent'
                    onClick={() => setIsShow(false)}
                >
                    &#10006;
                </Button>
            </Container>
        </div>
    )
}

export default WarningMsg;