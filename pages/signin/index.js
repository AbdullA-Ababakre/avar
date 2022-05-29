import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Image from 'next/image';
import logo from '../../public/images/signin/logo.png';

export default function SignIn() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [type, setType] = useState({
        typeAction: 'signIn',
        typeText: '注册'
    });

    const signInUser = async () => {
        e.preventDefault();
        // return router.push('/');
    }


    const signUpUser = async (e) => {
        e.preventDefault();
    }

    const signUser = () => {
        if (type.typeAction === 'signIn') {
            signInUser();
        } else {
            signUpUser();
        }
    }

    const changeSignType = () => {
        if (type.typeAction === 'signIn') {
            setType({
                typeAction: 'signUp',
                typeText: '登陆'
            })
        } else {
            setType({
                typeAction: 'signIn',
                typeText: '注册'
            })
        }
    }

    return (
        <>
            <form action="" className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.logoImg}>
                        <Image
                            priority
                            src={logo}
                            alt="logo"
                            layout="responsive"
                        />
                    </div>
                    {
                        type.typeAction === 'signUp' && (
                            <input className={`${styles.input} ${styles.nameInput}`} type="name" id="name" name="userName" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                        )
                    }
                    <input style={{ marginTop: type.typeAction === 'signIn' ? '36px' : '24px' }} className={`${styles.input} ${styles.emailInput}`} type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input className={`${styles.input} ${styles.passwordInput}`} type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <p style={{ color: 'red' }}>{message}</p>
                    <button className={`${styles.btn} ${styles.signInBtn}`} onClick={(e) => signUser(e)}>{type.typeAction}</button>
                    <div className={styles.privacy}><span className={styles.privacyText}>隐私政策</span></div>
                    <div className={styles.more}><span className={styles.moreWarning}>还没有Avar账户?</span><span className={styles.moreText} onClick={changeSignType}>{type.typeText}</span></div>
                </div>
            </form>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const { req } = context;
//     const session = await getSession({ req })
//     if (session) {
//         // Signed in
//         return {
//             redirect: { destination: "/" }
//         }
//     }
//     const csrfToken = await getCsrfToken(context);
//     const providers = await getProviders();

//     return {
//         props: { csrfToken, providers }
//     }
// }