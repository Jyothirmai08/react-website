import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'
import Logo from '../images/logo.png'

const Home = () => {
    return (
        <>
            <section className='head'>
                <div className='container flexSB'>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='social'>
                        <div><AiFillFacebook className='icon' /></div>
                        <div><AiFillInstagram className='icon' /></div>
                        <div><AiOutlineTwitter className='icon' /></div>
                        <div><AiFillYoutube className='icon' /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home