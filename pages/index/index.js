import Image from 'next/image'
import NavBar from '../../components/NavBar/index';
// import Logo from '../components/Logo/index';
import getAvatar from '/public/images/homePage/getAvatar.png'
import Footer from '../../components/Footer/index';
import HomePageCardGroup from '../../components/HomePageCardGroup/index';
import Link from 'next/link';
import facebook from '../../public/images/homePage/share/Facebook.png';
// import Github from '../../public/images/homePage/share/Github.png';
import Instagram from '../../public/images/homePage/share/Instagram.png';
import LinkedIn from '../../public/images/homePage/share/Linkedin.png';
import Pinterest from '../../public/images/homePage/share/Pinterest.png';
import Twitter from '../../public/images/homePage/share/Twitter.png';
import styles from './index.module.scss'


export default function Home({ allMovies }) {
  const imageArr = [facebook, LinkedIn, Twitter, Pinterest, Instagram];
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
    <div style={{ width: '100vw' }}>
      {/* <NavBar /> */}
      <div className={styles.navbarcontainer}>
        <div>
          <Image priority src={logoSmall} className="" height={54} width={169} alt="user" />
        </div>
        <div>
          <Link href="/">
            <a className={styles.item}>Home</a>
          </Link>
          <Link href="/about">
            <a className={styles.item}>About US</a>
          </Link>
          {/* <Link href="/avatar" >
                <a className={styles.item}>Avatar</a>
            </Link>
            <Link href="/fashion">
                <a className={styles.item}>Digital Fashion</a>
            </Link>
            <Link href="/art">
                <a className={styles.item}>Digital Art Toy</a>
            </Link> */}
          <Image priority src={user} className="" height={42} width={42} alt="user" />
          <Image priority src={card} className="" height={42} width={42} alt="card" />
        </div>
      </div>
      {/* <Logo /> */}
      <Image
        priority
        src={getAvatar}
        className=""
        style={{ display: 'block', width: '100vw', height: '385px' }}
        alt="getAvatar"
        layout="responsive"
      />
      <HomePageCardGroup />
      {/* <Footer /> */}
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
    </div>
  );
}