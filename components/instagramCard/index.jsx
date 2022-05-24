import styles from './index.module.scss';
import Image from 'next/image';
import likeImg from '../../public/images/ins/love.png';


const InsCard = ({
    profile, name, insImg, likeNum
}) => {
    return (
        <div className={styles.insCard}>
            <div className={styles.head}>
                <Image className={styles.profile} width='40px' height='40px' src={profile} alt="profile"></Image>
                <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.content}>
                <Image className={styles.profile} src={insImg} alt="profile"></Image>
            </div>
            <div className={styles.footer}>
                <div className={styles.likeNum}>{likeNum}</div>
                <Image className={styles.profile} src={likeImg} alt="likeImg"></Image>
            </div>
        </div>
    )
}

export default InsCard;