import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <>
            <img></img>
            <p>CONTIFOLIO</p>
            <svg></svg>
            <div>
                <Link href='/signup'>
                    <button>회원 가입</button>
                </Link>
                <Link href='/signin'>
                    <button>로그인</button>
                </Link>
            </div>
        </>
    )
}

export default Home
