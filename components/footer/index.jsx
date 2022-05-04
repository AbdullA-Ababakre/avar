import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link';
import facebook from '../../public/images/homePage/share/Facebook.png';
import Github from '../../public/images/homePage/share/Github.png';
import Instagram from '../../public/images/homePage/share/Instagram.png';
import LinkedIn from '../../public/images/homePage/share/Linkedin.png';
import Pinterest from '../../public/images/homePage/share/Pinterest.png';
import Twitter from '../../public/images/homePage/share/Twitter.png';


const Footer = () => {

    const imageArr = [facebook, LinkedIn, Twitter, Pinterest, Instagram, Github];
    const linkArr = [
        {
            href: '/home',
            title: 'Home'
        },
        {
            href: '/avatar',
            title: 'Avatar'
        },
        {
            href: '/fashion',
            title: 'Digital Fashion'
        },
        {
            href: '/art',
            title: 'Digital Art Toy'
        },
        {
            href: '/about',
            title: 'About US'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.horizontal}></div>
            <div className={styles.navBar}>
                {
                    linkArr.map((item, index) => {
                        return (
                            <Link href={item.href} key={index}>
                                <a className={styles.item}>{item.title}</a>
                            </Link>
                        )
                    })
                }
            </div>
            <div className={styles.horizontal}></div>
            <div className={styles.share}>
                {
                    imageArr.map((item, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <Image className={styles.icon} src={item} alt={item}></Image>
                                {
                                    index !== imageArr.length - 1 && <div className={styles.vertical}></div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.horizontal}></div>
        </div>
    )
}

export default Footer;