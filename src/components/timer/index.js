import styles from './scss/index.module.scss'

const Timer = () => {
    return (
        <div className={styles['timer']}>
            <h2 className={styles['timer__title']}>Time before launch</h2>
            <div className={styles['time-wrap']}>
                <div className={styles['timer__item']}>
                    <time className={styles['timer__value']}>00</time>
                    <p className={styles['timer__value_type']}>days</p>
                </div>
                <div className={styles['timer__item']}>
                    <time className={styles['timer__value']}>00</time>
                    <p className={styles['timer__value_type']}>hrs</p>
                </div>
                <div className={styles['timer__item']}>
                    <time className={styles['timer__value']}>00</time>
                    <p className={styles['timer__value_type']}>min</p>
                </div>
                <div className={styles['timer__item']}>
                    <time className={styles['timer__value']}>00</time>
                    <p className={styles['timer__value_type']}>sec</p>
                </div>
            </div>
        </div>
    )
}

export default Timer;