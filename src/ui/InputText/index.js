import styles from './styles/index.module.scss'

const InputText = ({ placeholder }) => {
    return (
        <input className={styles['input']} placeholder={placeholder} />
    )
}

export default InputText;