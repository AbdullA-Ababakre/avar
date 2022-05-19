import Image from 'next/image'
import NavBar from '../components/NavBar/index';
import Logo from '../components/Logo/index';
import getAvatar from '/public/images/homePage/getAvatar.png'
import Footer from '../components/Footer/index';
import HomePageCardGroup from '../components/HomePageCardGroup/index';


export default function Home({ allMovies }) {
  return (
    <div style={{ width: '100vw' }}>
      <NavBar />
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
      <Footer />
    </div>
  );
}