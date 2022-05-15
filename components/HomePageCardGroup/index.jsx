import styles from './index.module.scss';
import HomePageCard from '../homePageCard';
import Battle1 from '/public/images/homePage/homePageCard/Battle1.png';


const HomePageCardGroup = () => {

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
        }
    ]

    return (
        <div className={styles.cardGroup}>
            {
                cardInfo.map((item, index) => <HomePageCard style={{ width: '25%' }} key={index} item={item} />)
            }
        </div>
    )
}

export default HomePageCardGroup;