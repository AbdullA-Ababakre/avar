import styles from './index.module.scss';
import HomePageCard from '../homePageCard';
import cardImage from '/public/images/homePage/homePageCard/1.png'


const HomePageCardGroup = () => {

    const cardInfo = [
        {
            img: cardImage,
            name: 'New Wave',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                progress: '66/88'
            }
        },
        {
            img: cardImage,
            name: 'Battle Angle',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: true,
                progress: 'Sold Out'
            }
        },
        {
            img: cardImage,
            name: 'Mermaid Dream',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                progress: '66/88'
            }
        },
        {
            img: cardImage,
            name: 'New Wave',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                progress: '66/88'
            }
        },
        {
            img: cardImage,
            name: 'Battle Angle',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: true,
                progress: 'Sold Out'
            }
        },
        {
            img: cardImage,
            name: 'Mermaid Dream',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                progress: '66/88'
            }
        },
        {
            img: cardImage,
            name: 'New Wave',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                progress: '66/88'
            }
        },
        {
            img: cardImage,
            name: 'Battle Angle',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: true,
                progress: 'Sold Out'
            }
        },
        {
            img: cardImage,
            name: 'Mermaid Dream',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                progress: '66/88'
            }
        },
        {
            img: cardImage,
            name: 'New Wave',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                progress: '66/88'
            }
        },
        {
            img: cardImage,
            name: 'Battle Angle',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: true,
                progress: 'Sold Out'
            }
        },
        {
            img: cardImage,
            name: 'Mermaid Dream',
            author: 'AVAR',
            price: 50,
            status: {
                isSold: false,
                progress: '66/88'
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