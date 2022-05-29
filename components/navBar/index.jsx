import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';
import user from '../../public/images/homePage/user.png';
import card from '../../public/images/homePage/card.png';
import logoSmall from '../../public/images/homePage/logoSmall.png';
// import { useSession, signIn, signOut } from "next-auth/react";

const NavBar = () => (
    <div className={styles.container}>
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
            <Link href="/signin" passHref>
                {/* <a className={styles.item}>Digital Art Toy</a> */}
                <Image priority src={user} className="" height={42} width={42} alt="user" />
            </Link>


            <Image priority src={card} className="" height={42} width={42} alt="card" />
        </div>
    </div>
);

export default NavBar;
