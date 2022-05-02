import Countdown from 'react-countdown';
import styles from './scss/index.module.scss'

const Timer = () => {
    const renderer = ({ formatted }) => {
        return (
            <>
                <div className={styles['timer__item']}>
                    <time className={styles['timer__value']}>{formatted.days}</time>
                    <p className={styles['timer__value_type']}>days</p>
                </div>
                <div className={styles['timer__item']}>
                    <time className={styles['timer__value']}>{formatted.hours}</time>
                    <p className={styles['timer__value_type']}>hrs</p>
                </div>
                <div className={styles['timer__item']}>
                    <time className={styles['timer__value']}>{formatted.minutes}</time>
                    <p className={styles['timer__value_type']}>min</p>
                </div>
                <div className={styles['timer__item']}>
                    <time className={styles['timer__value']}>{formatted.seconds}</time>
                    <p className={styles['timer__value_type']}>sec</p>
                </div>
            </>
        )
    }
    return (
        <div className={styles['timer']}>
            <h2 className={styles['timer__title']}>Time before launch</h2>
            <div className={styles['time-wrap']}>
                <Countdown renderer={renderer} date={Date.now() + 800000000} />
            </div>
        </div>
    )
}

export default Timer;