import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
import HomePageCardGroup from '../components/HomePageCardGroup/index';
import styles from '../styles/index.module.scss';
// import getAvatar from '/public/images/homePage/getAvatar.png';
// import asc from '../public/images/homePage/asc.png';
// import desc from '../public/images/homePage/desc.png';
import { fetchGetConvert } from '../utils/index';

export default function Home({ data }) {
    const sortArr = ['Time', 'Count', 'Price'];
    const [sortCon, setSortCon] = useState({
        created_at: 'desc',
        count: 'desc',
        price: 'desc',
    });


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
            setAvars(data.data.data);
        }
        fetchData();
    }, [sortCon]);



    return (
        <div style={{ width: '100vw' }}>
            <div>
                {/* <NavBar /> */}
            </div>
            <Image
                priority
                src="https://avarlab.com/images/homePage/getAvatar.png"
                className=""
                style={{ display: 'block' }}
                width="100vw"
                height="385px"
                alt="getAvatar"
                layout="fill"
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
                                <div className={styles.sort} key={index}>
                                    <div className={styles.sortName}>{item}</div>
                                    <div className={styles.asc} onClick={() => handleSort(item, index, 'asc')}>
                                        <Image src="https://avarlab.com/images/homePage/asc.png" alt="asc" layout="fill" />
                                    </div>
                                    <div className={styles.desc} onClick={() => handleSort(item, index, 'desc')}>
                                        <Image src="https://avarlab.com/images/homePage/desc.png" alt="desc" layout="fill" />
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
            {/* <HomePageCardGroup avars={avars} /> */}
            {/* <Footer /> */}
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

    console.log("data111", data);

    return {
        props: {
            data: data
        },
        revalidate: 1     // reexecute the getStaticProps at every 1 second
    };
}
