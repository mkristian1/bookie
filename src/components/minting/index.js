import { useState } from 'react';
import { PRICE } from '../../const';
import Button from '../../ui/Button';
import InputCounter from '../../ui/inputCounter';
import styles from './styles/index.module.scss';

const Minting = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={styles['minting']}>
            <h2 className={styles['minting__title']}>Minting</h2>
            <p className='font-18'>Price Per Ape</p>
            <p className='text-green-gradient mb-2'>{PRICE} ETH Each</p>
            <p className='text-gray font-18 mb-2'>Public sale available</p>
            <div className={styles['minting__counter']}>
                <InputCounter value={count} setValue={setCount} />
                <div className={styles['minting__total']}>
                    <span className='text-gray font-18'>Total </span>
                    <span className='text-green-gradient'>{(count * PRICE).toFixed(3)} ETH</span>
                </div>
            </div>
            <Button>
                sold out
            </Button>
        </div>
    )
}

export default Minting;