import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link';
import facebook from '../../public/images/homePage/share/Facebook.png';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.horizontal}></div>
            <div className={styles.navBar}>
                <Link href="/home">
                    <a className={styles.item}>Home</a>
                </Link>
                <Link href="/avatar" >
                    <a className={styles.item}>Avatar</a>
                </Link>
                <Link href="/fashion">
                    <a className={styles.item}>Digital Fashion</a>
                </Link>
                <Link href="/art">
                    <a className={styles.item}>Digital Art Toy</a>
                </Link>
                <Link href="/about">
                    <a className={styles.item}>About US</a>
                </Link>
            </div>
            <div className={styles.horizontal}></div>
            <div className={styles.share}>
                <div className={styles.item}>
                    <Image className={styles.icon} src={facebook} alt="facebook"></Image>
                    <div className={styles.vertical}></div>
                </div>
                <div className={styles.item}>
                    <Image className={styles.icon} src={facebook} alt="facebook"></Image>
                    <div className={styles.vertical}></div>
                </div>
                <div className={styles.item}>
                    <Image className={styles.icon} src={facebook} alt="facebook"></Image>
                    <div className={styles.vertical}></div>
                </div>
                <div className={styles.item}>
                    <Image className={styles.icon} src={facebook} alt="facebook"></Image>
                    <div className={styles.vertical}></div>
                </div>
                <div className={styles.item}>
                    <Image className={styles.icon} src={facebook} alt="facebook"></Image>
                    <div className={styles.vertical}></div>
                </div>
                <div className={styles.item}>
                    <Image className={styles.icon} src={facebook} alt="facebook"></Image>
                    <div className={styles.vertical}></div>
                </div>
            </div>
            <div className={styles.horizontal}></div>
        </div>
    )
}

export default Footer;