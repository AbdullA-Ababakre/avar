import Link from 'next/link';
import Image from 'next/image'
import NavBar from '../components/NavBar/index';
import Logo from '../components/Logo/index';
import getAvatar from '/public/images/homePage/getAvatar.png'
import group1 from '/public/images/homePage/group1.png'
import group2 from '/public/images/homePage/group2.png'
import group3 from '/public/images/homePage/group3.png'
import virtualInvading from '/public/images/homePage/virtualInvading.png'
import mirror from '/public/images/homePage/mirror.png'
import Footer from '../components/Footer/index';

export async function getServerSideProps() {
  return {
    props: {
    },
  };
}

export default function Home({ allMovies }) {
  return (
    <div style={{ width: '100vw'}}>
      <NavBar />
      <Logo />
      <Image
        priority
        src={getAvatar}
        className=""
        style={{ display: 'block', width: '100vw', height: '385px' }}
        alt="getAvatar"
        layout="responsive"
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '116px',marginBottom: '151px'}}>
        <Image
          priority
          src={group1}
          className=""
          style={{ margin: '0 auto', width: '954px', height: '520px' }}
          layout="intrinsic"
          alt="group1"
        />
      </div>

      <Image
        priority
        src={virtualInvading}
        className=""
        style={{ display: 'block', width: '100vw', height: '385px' }}
        alt="virtualInvading"
        layout="responsive"
      />

      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '116px',marginBottom: '151px' }}>
        <Image
          priority
          src={group2}
          className=""
          style={{ margin: '0 auto', width: '954px', height: '520px' }}
          alt="group2"
          layout="intrinsic"
        />
      </div>

      <Image
        priority
        src={mirror}
        className=""
        style={{ display: 'block', width: '100vw', height: '385px' }}
        alt="getAvatar"
        layout="responsive"
      />


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '116px',marginBottom: '151px' }}>
        <Image
          priority
          src={group3}
          className=""
          style={{ margin: '0 auto', width: '954px', height: '520px' }}
          alt="group3"
          layout="intrinsic"
        />
      </div>

      <Footer />


    </div>
  );
}