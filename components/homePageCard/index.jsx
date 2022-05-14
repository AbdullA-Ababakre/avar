import Image from 'next/image';
import styles from './index.module.scss';

const HomePageCard = (props) => {
    const { item } = props;

    return (
        <div className={styles.card}>
            <Image
                priority
                src={item.img}
                width={244}
                height={250}
                alt="cardImg"
                layout="responsive"
            />
            <div className={styles.title}>
                <div>{item.name}</div>
                <div>{item.author}</div>
            </div>
            <div className={styles.price}>
                <div>${item.price}</div>
                <div className={styles.progress}>
                    <div className={styles.resbar} style={{ width: item.status.isSold ? '100%' : '50%' }}>
                        <div className={`${styles.res} ${item.status.isSold} === true ? ${styles.resSold} : ${styles.resSelling}`}>{item.status.progress}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageCard;