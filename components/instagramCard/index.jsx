import styles from './index.module.scss';
import Image from 'next/image';
import profileImg from '../../public/images/ins/dream.png';
import user from '../../public/images/avatarDetail/profile.png'
import likeImg from '../../public/images/ins/love.png';


const InsCard = () => {
    return (
        <div className={styles.insCard}>
            <div className={styles.head}>
                <Image className={styles.profile} width='40px' height='40px' src={user} alt="profile"></Image>
                <div className={styles.name}>song</div>
            </div>
            <div className={styles.content}>
                <Image className={styles.profile} src={profileImg} alt="profile"></Image>
            </div>
            <div className={styles.footer}>
                <div className={styles.likeNum}>102</div>
                <Image className={styles.profile} src={likeImg} alt="likeImg"></Image>
            </div>
        </div>
    )
}

export default InsCard;