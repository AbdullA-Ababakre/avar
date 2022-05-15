import Link from 'next/link';
import styles from './index.module.scss'
import { Input, Space } from 'antd';
const { Search } = Input;
import Image from 'next/image'
import user from '../../public/images/homePage/user.png'
import card from '../../public/images/homePage/card.png'

const NavBar = () => {

    const onSearch = value => console.log(value);

    return (
        <div className={styles.container}>
            <Link href="/home">
                <a className={styles.item}>Home</a>
            </Link>
            <Link href="/avatar" >
                <a className={styles.item}>Avatar</a>
            </Link>
            <Link href="/fashion">
                <a className={styles.item}>Digital Fashion</a>
            </Link>
            <Link href="/art">
                <a className={styles.item}>Digital Art Toy</a>
            </Link>
            <Link href="/about">
                <a className={styles.item}>About US</a>
            </Link>
            <Image
                priority
                src={user}
                className=""
                height={42}
                width={42}
                alt="user"
            />
            <Image
                priority
                src={card}
                className=""
                height={42}
                width={42}
                alt="card"
            />
        </div>
    )
}

export default NavBar;