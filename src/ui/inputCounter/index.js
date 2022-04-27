import styles from './styles/index.module.scss'

const InputCounter = ({ value, setValue }) => {
    return (
        <div className={styles['counter']}>
            <button
                className={styles['counter__btn']}
                onClick={() => setValue(prev => prev - 1)}
                disabled={value <= 0}
            >
                -
            </button>
            <input className={styles['counter__input']} value={value} />
            <button
                onClick={() => setValue(prev => prev + 1)}
                className={styles['counter__btn']}
            >
                +
            </button>
        </div>
    )
}

export default InputCounter;