import React from 'react';
import Image from 'next/image'
import styles from './index.module.scss'
import Footer from '../../components/footer/index'
import NavBar from '../../components/navBar/index'
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

const item = {
    model: 'wing.glb',
    name: 'Mermaid Dream',
    author: 'AVAR',
    tags: ['Fashion', 'Dress', '3D', 'AR'],
    description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
    price: 50,
    sold: 66,
    total: 88,
    imgDetail: [Dream2, Dream3, Dream4],
    ownership: [{
        id: '111',
        profile: profile
    }, {
        id: '222',
        profile: profile
    }, {
        id: '111',
        profile: profile
    }, {
        id: '111',
        profile: profile
    }, {
        id: '111',
        profile: profile
    }, {
        id: '111',
        profile: profile
    }]
};

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
    return (
        <div className="">
            <NavBar></NavBar>
            <Logo></Logo>
            <div>
                <div className={styles.Detail}>
                    <div id={styles.modelBox}></div>
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
                                            {(item.sold + '/' + item.total)}
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
        </div >
    )
}
export default About;