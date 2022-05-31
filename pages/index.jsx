import Image from 'next/image';
import NavBar from '../components/NavBar/index';
import getAvatar from '/public/images/homePage/getAvatar.png';
import Footer from '../components/Footer/index';
import HomePageCardGroup from '../components/HomePageCardGroup/index';
// import styles from '../styles/index.module.scss';

export default function Home({ }) {

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
            <HomePageCardGroup />
            <Footer />
        </div>
    );
}