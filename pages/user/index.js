import Image from 'next/image';
import NavBar from '../../components/NavBar/index';
// import getAvatar from '/public/images/homePage/getAvatar.png';
import profile from '../../public/images/avatarDetail/profile.png';
import Footer from '../../components/Footer/index';
import HomePageCardGroup from '../../components/HomePageCardGroup/index';
import styles from './index.module.scss';

export default function Home({ }) {

    return (
        <div style={{ width: '100vw' }}>
            <NavBar />
            <div className={styles.userBox}>
                <Image src={profile} alt="profile"></Image>
                <div className={styles.userDesc}>
                    <div className={styles.name}>April</div>
                    <div className={styles.desc}>personal profile</div>
                </div>
                <div className={styles.itemBox}>
                    <div className={styles.item}>
                        <div className={styles.num}>3</div>
                        <div className={styles.type}>created</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.num}>6</div>
                        <div className={styles.type}>collected</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.num}>256</div>
                        <div className={styles.type}>whish list</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}