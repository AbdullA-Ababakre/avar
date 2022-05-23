import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './index.module.scss'
import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar/index';
import Logo from '../../components/logo/index';
import user1 from '../../public/images/homePage/homePageCard/1.png';
import Dream2 from '../../public/images/avatarDetail/Dream2.png';
import Dream3 from '../../public/images/avatarDetail/Dream3.png';
import Dream4 from '../../public/images/avatarDetail/Dream4.png';
import profile from '../../public/images/avatarDetail/profile.png';
import arrowDown from '../../public/images/avatarDetail/arrowDown.png';
import InsCard from '../../components/instagramCard/index';
import HomePageCard from '../../components/homePageCard/index';
import Battle1 from '../../public/images/homePage/homePageCard/Battle1.png';
import ThreeRender from "../../utils/three-render";
import { useRouter } from 'next/router';
import { avars } from '../../content/index';
import Link from 'next/link';
import facebook from '../../public/images/homePage/share/Facebook.png';
import Instagram from '../../public/images/homePage/share/Instagram.png';
import LinkedIn from '../../public/images/homePage/share/Linkedin.png';
import Pinterest from '../../public/images/homePage/share/Pinterest.png';
import Twitter from '../../public/images/homePage/share/Twitter.png';


const insItem = [{
    profile: '',
    name: '',
    insImg: '',
    likeNum: 102,
},
{
    profile: '',
    name: '',
    insImg: '',
    likeNum: 102,
},
{
    profile: '',
    name: '',
    insImg: '',
    likeNum: 102,
}];

const cardInfo = [
    {
        img: Battle1,
        name: 'New Wave',
        author: 'AVAR',
        price: 50,
        status: {
            isSold: false,
            sold: 66,
            total: 88
        }
    },
    {
        img: Battle1,
        name: 'Battle Angle',
        author: 'AVAR',
        price: 50,
        status: {
            isSold: true,
            progress: 'Sold Out'
        }
    },
    {
        img: Battle1,
        name: 'Mermaid Dream',
        author: 'AVAR',
        price: 50,
        status: {
            isSold: false,
            sold: 66,
            total: 88
        }
    },
    {
        img: Battle1,
        name: 'Mermaid Dream',
        author: 'AVAR',
        price: 50,
        status: {
            isSold: false,
            sold: 66,
            total: 88
        }
    }
]

const About = () => {
    const router = useRouter()
    const { id } = router.query;
    const [item, setItem] = useState(null);

    useEffect(() => {
        const threeRender = new ThreeRender();
        threeRender.load("/models/cubes.gltf");
    }, []);

    useEffect(() => {
        if (id) {
            const item = avars.find(item => item.id === Number(id));
            setItem(item);
        }
    }, [id]);


    return (
        <div className="">
            <NavBar></NavBar>
            {
                item &&
                (
                    <div>
                        <div className={styles.Detail}>
                            <div id="modelBox" className={styles.modelBox}>
                                <Image
                                    priority
                                    src={item.img}
                                    className=""
                                    style={{ display: 'block', width: '570px', height: '570px' }}
                                    alt="getAvatar"
                                    layout="responsive"
                                />
                            </div>
                            <div className={styles.modelTextBox}>
                                <div className={styles.title}>
                                    <div className={styles.modelName}>{item.name}</div>
                                    <div className={styles.author}>{item.author}</div>
                                </div>
                                <div className={styles.tagWrapper}>
                                    {item.tags.map((item, index) => <div key={index} className={styles.tag}># {item}</div>)}
                                </div>
                                <div className={styles.horizonLine}></div>
                                <div className={styles.description}>{item.description}</div>
                                <div className={styles.horizonLine}></div>
                                <div className={styles.buyBox}>
                                    <div className={styles.buy}>
                                        <div className={styles.price}>${item.price}</div>
                                        <div className={styles.progress}>
                                            <div className={styles.resbar} style={{ width: '50%' }}>
                                                <div className={`${styles.res}  ${styles.resSelling}`}>
                                                    {(item.status.sold + '/' + item.status.total)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.buyBtn}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.horizonLine}></div>
                        <div className={styles.imgDetail}>
                            {item.imgDetail.map((item, index) => {
                                return (
                                    <Image key={index} src={item} alt="img" />
                                )
                            })}
                        </div>
                        <div className={styles.ownership}>
                            <div className={styles.title}>Ownership</div>
                            <div className={styles.profiles}>
                                {
                                    item.ownership.map((item, index) => <Image className={styles.profile} key={index} src={item.profile} alt="img" />)
                                }
                            </div>
                            <div className={styles.more}><Image width="24px" height="17px" src={arrowDown} alt="arrowDown" /></div>
                        </div>
                        <div className={styles.horizonLine}></div>
                        <div className={styles.instagramCardGroup}>
                            {
                                insItem.map((item, index) => <InsCard key={index} />)
                            }
                        </div>
                        <div className={styles.horizonLine}></div>
                        <div className={styles.homePageCards}>
                            {
                                cardInfo.map((item, index) => <HomePageCard style={{ width: '25%' }} key={index} item={item} />)
                            }
                        </div>
                        <Footer></Footer>
                    </div>
                )
            }
        </div >
    )
}
export default About;