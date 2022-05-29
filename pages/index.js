import Image from 'next/image';
import NavBar from '../components/NavBar/index';
import getAvatar from '/public/images/homePage/getAvatar.png';
import Footer from '../components/Footer/index';
import HomePageCardGroup from '../components/HomePageCardGroup/index';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ }) {
  const { data: session } = useSession();

  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <div style={{ width: '100vw' }}>
      {/* <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </> */}
      <NavBar />
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