import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/index';
import getAvatar from '/public/images/homePage/getAvatar.png';
import Footer from '../components/Footer/index';
import HomePageCardGroup from '../components/HomePageCardGroup/index';
import styles from '../styles/index.module.scss';
import asc from '../public/images/homePage/asc.png';
import desc from '../public/images/homePage/desc.png';
import { fetchGetConvert } from '../utils/index';

// --------------------------------
import battle from '../public/images/avatars/battle/battle.png';
import battle1 from '../public/images/avatars/battle/Battle1.png';
import battle2 from '../public/images/avatars/battle/Battle2.png';
import battle3 from '../public/images/avatars/battle/Battle3.png';
import boot from '../public/images/avatars/boots/1.png';
import boot1 from '../public/images/avatars/boots/2.png';
import boot2 from '../public/images/avatars/boots/3.png';
import boot3 from '../public/images/avatars/boots/4.png';
import covid from '../public/images/avatars/covid/Covid1.png';
import covid1 from '../public/images/avatars/covid/Covid2.png';
import covid2 from '../public/images/avatars/covid/Covid3.png';
import crown from '../public/images/avatars/crown/crown1.png';
import Crown1 from '../public/images/avatars/crown/crown2.png';
import Crown2 from '../public/images/avatars/crown/crown3.png';
import dream from '../public/images/avatars/dream/dream.png';
import dream1 from '../public/images/avatars/dream/Dream1.png';
import dream2 from '../public/images/avatars/dream/Dream2.png';
import dream3 from '../public/images/avatars/dream/Dream3.png';
import dream4 from '../public/images/avatars/dream/Dream4.png';

import heart from '../public/images/avatars/heart/heart.png';
import heart1 from '../public/images/avatars/heart/2.png';
import heart2 from '../public/images/avatars/heart/3.png';
import heart3 from '../public/images/avatars/heart/4.png';

import loop from '../public/images/avatars/loop/1-1.png';
import loop1 from '../public/images/avatars/loop/1-1.png';
import loop2 from '../public/images/avatars/loop/1-2.png';
import loop3 from '../public/images/avatars/loop/1-3.png';

import lover from '../public/images/avatars/lover/lover.png';
import lover1 from '../public/images/avatars/lover/Lover1.png';
import lover2 from '../public/images/avatars/lover/Lover2.png';
import lover3 from '../public/images/avatars/lover/Lover3.png';

import qipaoOne1 from '../public/images/avatars/qipao1/1.png';
import qipaoOne2 from '../public/images/avatars/qipao1/1.png';
import qipaoOne3 from '../public/images/avatars/qipao1/2.png';
import qipaoOne4 from '../public/images/avatars/qipao1/3.png';

import qipaoTwo1 from '../public/images/avatars/qipao2/1.png';
import qipaoTwo2 from '../public/images/avatars/qipao2/1.png';
import qipaoTwo3 from '../public/images/avatars/qipao2/2.png';
import qipaoTwo4 from '../public/images/avatars/qipao2/3.png';

import qipaoThree1 from '../public/images/avatars/qipao3/1.png';
import qipaoThree2 from '../public/images/avatars/qipao3/1.png';
import qipaoThree3 from '../public/images/avatars/qipao3/2.png';
import qipaoThree4 from '../public/images/avatars/qipao3/3.png';

import wave from '../public/images/avatars/wave/wave.png';
import wave1 from '../public/images/avatars/wave/Wave1.png';
import wave2 from '../public/images/avatars/wave/Wave2.png';
import wave3 from '../public/images/avatars/wave/Wave3.png';

import wing from '../public/images/avatars/wing/wing1.png';
import wing1 from '../public/images/avatars/wing/wing1.png';
import wing2 from '../public/images/avatars/wing/wing2.png';
import wing3 from '../public/images/avatars/wing/wing3.png';

import profile from '../public/images/avatarDetail/profile.png';



export default function Home({ data }) {
    console.log("data---", data.data.data);
    const sortArr = ['Time', 'Count', 'Price'];
    const [sortCon, setSortCon] = useState({
        created_at: 'desc',
        count: 'desc',
        price: 'desc',
    });

    const avarsSource = [
        {
            id: 1,
            img: battle,
            name: 'New Wave',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/battle/battle.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [battle1, battle2, battle3],
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
        },
        {
            id: 2,
            img: boot,
            name: 'Battle Angle',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: true,
                progress: 'Sold Out'
            },
            model: '/images/avatars/boots/boots.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [boot1, boot2, boot3],
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
        },
        {
            id: 3,
            img: covid,
            name: 'Mermaid Dream',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/covid/covid.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [covid1, covid2],
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
        },
        {
            id: 4,
            img: crown,
            name: 'Star Wings',
            author: 'AVAR',
            price: 20,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/crown/crown.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [Crown1, Crown2],
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
        },
        {
            id: 5,
            img: dream,
            name: 'White Lover',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: true,
                progress: 'Sold Out'
            },
            model: '/images/avatars/dream/dream.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [dream1, dream2, dream3, dream4],
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
        },
        {
            id: 6,
            img: heart,
            name: 'Ice Crown',
            author: 'AVAR',
            price: 25,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/heart/heart.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [heart1, heart2, heart3],
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
        },
        {
            id: 7,
            img: loop,
            name: 'Covid Bye',
            author: 'AVAR',
            price: 15,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/loop/Loop.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [loop1, loop2, loop3],
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
        },
        {
            id: 8,
            img: lover,
            name: 'Metal Qipao',
            author: 'AVAR',
            price: 60,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/lover/lover.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [lover1, lover2, lover3],
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
        },
        {
            id: 9,
            img: qipaoOne1,
            name: 'Meta Boots',
            author: 'AVAR',
            price: 30,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/qipao1/qipao1.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [qipaoOne2, qipaoOne3, qipaoOne4],
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
        }, {
            id: 10,
            img: qipaoTwo1,
            name: 'Meta Boots',
            author: 'AVAR',
            price: 30,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/qipao1/qipao1.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [qipaoTwo2, qipaoTwo3, qipaoTwo4],
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
        },
        {
            id: 9,
            img: qipaoThree1,
            name: 'Meta Boots',
            author: 'AVAR',
            price: 30,
            status: {
                isSold: false,
                sold: 66,
                total: 88
            },
            model: '/images/avatars/qipao3/qipao3.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [qipaoThree2, qipaoThree3, qipaoThree4],
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
        },
        {
            id: 10,
            img: wing,
            name: 'Line Qipao',
            author: 'AVAR',
            price: 20,
            status: {
                isSold: false,
                sold: 48,
                total: 88
            },
            model: '/images/avatars/wing/wing.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [wing1, wing2, wing3],
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
        },
        {
            id: 11,
            img: wave,
            name: 'Line Qipao',
            author: 'AVAR',
            price: 20,
            status: {
                isSold: false,
                sold: 48,
                total: 88
            },
            model: '/images/avatars/wave/wave.glb',
            tags: ['Fashion', 'Dress', '3D', 'AR'],
            description: 'Just think there are other possibilities in the world. In the metaverse, war, pollution, plague, and warming will no longer exist, and starry space can be as soft as marshmallows, with interesting adventures taking turns, surprises and troubles on the way, each experience can be an exclusive experience, and each creative inspiration can be realized as an out-of-print collection. Time flies, and we have no reason to be trapped in the old reality. The dream-dealing beast sends a pass to AVAR metaverse, saying that in virtual time and space, metal can grow with petals, sea waves can be skirts, crystals can reverse anti-gravity, and you, you can dress in any look you like. ',
            price: 50,
            imgDetail: [wave1, wave2, wave3],
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
        }
    ];

    const [avars, setAvars] = useState(data.data.data);

    const handleSort = (item, index, con) => {
        item = item.toLowerCase();
        if (item === 'time') item = 'created_at';
        setSortCon({ ...sortCon, [item]: con });
    }

    useEffect(() => {
        async function fetchData() {
            const url = 'http://edit.atip.top/api/v1/product/list';
            const data = await fetch(fetchGetConvert(url, sortCon)).then(data => data.json()).catch(function (error) { console.log('request failed', error) });
            console.log("data",data);
            // setAvars(data.data.data);
        }
        fetchData();
    }, [sortCon]);



    return (
        <div style={{ width: '100vw' }}>
            <div>
                <NavBar />
            </div>
            <Image
                priority
                src={getAvatar}
                className=""
                style={{ display: 'block', width: '100vw', height: '385px' }}
                alt="getAvatar"
                layout="responsive"
            />
            <div className={styles.sortContainer}>
                <div className={styles.tags}>
                    <div className={styles.tag}>#Fashion</div>
                    <div className={styles.tag}>#Avatar</div>
                    <div className={styles.tag}>#ArtToy</div>
                    <div className={styles.tag}>#3D</div>
                </div>
                <div className={styles.verticalLine}></div>
                {
                    sortArr.map((item, index) => {
                        return (
                            <>
                                <div className={styles.sort}>
                                    <div className={styles.sortName}>{item}</div>
                                    <div className={styles.asc} onClick={() => handleSort(item, index, 'asc')}>
                                        <Image src={asc} alt="asc" />
                                    </div>
                                    <div className={styles.desc} onClick={() => handleSort(item, index, 'desc')}>
                                        <Image src={desc} alt="desc" />
                                    </div>
                                </div>
                                {
                                    index !== sortArr.length - 1 && <div className={styles.verticalLine} style={{ marginLeft: '24px' }}></div>
                                }
                            </>
                        )
                    })
                }
            </div>
            <HomePageCardGroup avars={avars} />
            <Footer />
        </div>
    );
}


export async function getStaticProps() {
    // fetch data from an API
    let params = {
        created_at: 'desc',
        count: 'desc',
        price: 'desc'
    }

    const url = 'http://edit.atip.top/api/v1/product/list';

    const data = await fetch(fetchGetConvert(url, params)).then(data => data.json()).catch(function (error) { console.log('request failed', error) });

    return {
        props: {
            data: data
        },
        revalidate: 1     // reexecute the getStaticProps at every 1 second
    };
}
