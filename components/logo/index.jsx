import styles from './index.module.scss'
import Image from 'next/image'
import star from '../../public/images/homePage/star.png'
import slogan from '../../public/images/homePage/slogan.png'

const Logo = () => {
    return (
        <div className={styles.container}>
            <Image
                priority
                src={slogan}
                className={styles.star}
                height={123}
                width={223}
                alt="slogan"
            />
            <Image
                priority
                src={star}
                className={styles.slogan}
                height={99}
                width={414.5}
                alt="star"
            />
        </div>
    )
}

export default Logo;