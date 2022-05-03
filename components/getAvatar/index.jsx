import Image from 'next/image'
import getAvatar from '/public/images/homePage/getAvatar.png'

const GetAvatar = () => {
    return (
        <div style={{ width: '100%' }}>
            <Image
                priority
                src={getAvatar}
                className=""
                style={{ display: 'block', width: '1700px', height: '385px' }}
                alt="getAvatar"
                layout="responsive"
            />


        </div>
    )
}

export default GetAvatar;