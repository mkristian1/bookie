import cn from "classnames";
import styles from "./styles/index.module.scss";

const Button = ({ children, className, variant, onClick }) => {
    return (
        <button onClick={onClick} className={cn(className, styles[variant])}>
            {children}
        </button>
    )
}

export default Button;