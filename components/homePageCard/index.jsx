import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link'

const HomePageCard = (props) => {
    const { item } = props;
    const isSold = item.sales >= item.count;

    return (
        <div className={styles.card}>
            {
                !isSold &&
                <Link href={`/avatardetail/${item.id}`} passHref>
                    <div className={styles.imgWrapper}>
                        <Image
                            className={styles.img}
                            priority
                            src={item.cover}
                            width={244}
                            height={250}
                            alt="cardImg"
                            layout="responsive"
                        />
                    </div>
                </Link>
            }
            {
                isSold &&
                <div className={styles.imgWrapper}>
                    <Image
                        className={styles.img}
                        priority
                        src={item.cover}
                        width={244}
                        height={250}
                        alt="cardImg"
                        layout="responsive"
                    />
                </div>
            }
            <div className={styles.title}>
                <div>{item.name}</div>
                <div>Avar</div>
            </div>
            <div className={styles.price}>
                <div>${item.price}</div>
                <div className={styles.progress}>
                    <div className={styles.resbar} style={{ width: isSold ? '100%' : '50%' }}>
                        <div className={`${styles.res} ${isSold} === true ? ${styles.resSold} : ${styles.resSelling}`}>
                            {isSold === true ? 'Sold Out' : (item.sales + '/' + item.count)}
                        </div>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default HomePageCard;