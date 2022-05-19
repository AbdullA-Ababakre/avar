import React from 'react';
import Image from 'next/image'
import styles from './index.module.scss'
import logoLeft from '/public/images/about/logoLeft.png';
import logoRight from '/public/images/about/logoRight.png';
import banner from '/public/images/about/banner.png';
import star from '/public/images/homePage/star.png';
import title1 from '/public/images/about/title1.png';
import title2 from '/public/images/about/title2.png';
import title3 from '/public/images/about/title3.png';
// import Footer from '../../components/Footer/index';
import NavBar from '../../components/navBar/index';

import Link from 'next/link';
import facebook from '../../public/images/homePage/share/Facebook.png';
// import Github from '../../public/images/homePage/share/Github.png';
import Instagram from '../../public/images/homePage/share/Instagram.png';
import LinkedIn from '../../public/images/homePage/share/Linkedin.png';
import Pinterest from '../../public/images/homePage/share/Pinterest.png';
import Twitter from '../../public/images/homePage/share/Twitter.png';

const About = () => {

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
    <div className={styles.footerContainer}>
      <NavBar></NavBar>
      <div className={styles.logoContainer}>
        <Image className={styles.logoLeft} src={logoLeft} alt="logoLeft"></Image>
        <Image className={styles.logoRight} src={logoRight} alt="logoRight"></Image>
      </div>

      <div className={styles.bannerContainer}>
        <Image className={styles.banner} src={banner} alt="banner"></Image>
      </div>

      <div className={styles.starContainer}>
        <Image className={styles.star} src={star} alt="star"></Image>
      </div>

      <div className={styles.content}>
        <div className={styles.title1}>
          <Image className={styles.titleOneImage} src={title1} alt="title1" />
        </div>
        <div className={`${styles.paragraph} ${styles.paragraph1}`}>
          AVAR is a virtual brand with applications including Avatar IP, virtual fashion brands, digital art toys, and digital art generators. Our core technologies are procedural generated 3D frameworks,  character fusion virtual human algorithms and AR digital content applications, and we have built an original digital asset Archive.
        </div>
        <div className={`${styles.paragraph} ${styles.paragraph2}`}>
          Vision:To become a platform  for digital asset production and creation in the metaverse;
          Values: Productivity drives creativity; Virtual technology revolutionizes real needs, Explore future-oriented digital art forms.
        </div>
        <div className={`${styles.paragraph} ${styles.paragraph3}`}>
          The team is composed of computer graphics researchers from Peking University and Tsinghua University,
          and experienced practitioners in the digital art industry.
        </div>

        <div className={styles.title2}>
          <Image className={styles.titleTwoImage} src={title2} alt="title2" />
        </div>

        <div className={`${styles.paragraph} ${styles.paragraph4}`}>
          We firmly believe that virtual digital fashion is the future. While we agree that the variety of fashion can enrich self-expression, we insist that fashion can be developed in an environmentally friendly, sustainable and future-oriented way.
          AVAR is committed to leading users into a metaverse that is closely connected to reality. The goal of the platform is not only to provide customers with a wide range of options to wear regardless of gender, size, or physical material, but also to change users  consumption behavior, thereby reducing the use and production of physical clothing. We want to empower the fashion industry with more possibilities and drive the digital and sustainable transformation of the fashion industry.
          Crises around the world and metaverse developments make the shift imperative, and we are increasingly convinced of the meaning of our work.
        </div>
        <div className={styles.title3}>
          <Image className={styles.title3} src={title3} alt="title3" />
        </div>
      </div>
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
    </div >
  )
}
export default About

// --f-a--fa