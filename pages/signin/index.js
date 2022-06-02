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
        if (email === '' || password === '') {
            setMessage('请填写所有信息');
            return;
        }

        const rawResponse = await fetch('http://edit.atip.top/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const content = await rawResponse.json();
        if (content.status === 200) {
            setMessage('登陆成功');
            const token = content.data.token;
            localStorage.setItem('token', token);
            setTimeout(() => {
                router.push('/');
            }, 1000);
        } else {
            setMessage(content.message);
        }
    }


    const signUpUser = async () => {
        if (name === '' || email === '' || password === '') {
            setMessage('请填写所有信息');
            return;
        }

        const rawResponse = await fetch('http://edit.atip.top/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const content = await rawResponse.json();
        if (content.status === 200) {
            setMessage('注册成功');
            const token = content.data.token;
            localStorage.setItem('token', token);
            setTimeout(() => {
                router.push('/');
            }, 1000);
        } else {
            setMessage(content.message);
        }

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
            <div className={styles.container}>
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
                            <input className={`${styles.input} ${styles.nameInput}`} type="name" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                        )
                    }
                    <input style={{ marginTop: type.typeAction === 'signIn' ? '36px' : '24px' }} className={`${styles.input} ${styles.emailInput}`} type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input className={`${styles.input} ${styles.passwordInput}`} type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <p style={{ color: 'red' }}>{message}</p>
                    <button className={`${styles.btn} ${styles.signInBtn}`} onClick={signUser}>{type.typeAction}</button>
                    <div className={styles.privacy}><span className={styles.privacyText}>隐私政策</span></div>
                    <div className={styles.more}><span className={styles.moreWarning}>还没有Avar账户?</span><span className={styles.moreText} onClick={changeSignType}>{type.typeText}</span></div>
                </div>
            </div>
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