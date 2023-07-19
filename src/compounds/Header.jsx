import React, { useState } from 'react'
import Home from './Home'
import {AiOutlineBars, AiOutlineFieldTime} from 'react-icons/ai';
import {Carousel}  from "react-responsive-carousel"
import { AiOutlineFileImage, AiOutlineDesktop, AiOutlineBank } from 'react-icons/ai'

// import{ HashLink }from "react-hash-link"




import "react-responsive-carousel/lib/styles/carousel.min.css"



import "../styles/Header.css"
import "../styles/App.css"
import { Link } from 'react-router-dom'
import banner from '../images/ese banner-1.png'
import banner1 from '../images/ese banner-2.png'
import banner2 from '../images/ese banner-3.png'
import banner3 from '../images/ese banner-4.png'
import banner4 from '../images/ese banner-5.png'
import about_us from '../images/aboub us.jpg'
import vision from '../images/vision.jpg'
import mission from '../images/our mission.jpg'
import Logo from '../images/logo.png'
// import onlinetests from '../images/onlinetests.jpg'
import Testseries from '../images/Testseries.png'
import Videoclasses from '../images/onlinevideos.png'
import questionbank from '../images/questionbank.jpg'






const Header = () => {
    const [click, setClick] = useState(false)

    const data = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30458.897020647626!2d78.50949885!3d17.3944006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1686889112527!5m2!1sen!2sin"
    return (
        <>
            <Home />
            <header>
                <nav className='flexSB'>
                    <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/exams">Exams</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/download">Downloads</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faqs">Faqs</Link></li>
                    </ul>

                    <div className='start'>
                        <div className='button'>LogIn/Registration</div>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <AiOutlineFieldTime /> : <AiOutlineBars />}
                    </button>
                </nav>
            </header><br /><br />


            <section className='banner'>
                <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false} showStatus={false}>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                    <div>
                        <img src={banner1} alt="" />
                    </div>
                    <div>
                        <img src={banner2} alt="" />
                    </div>
                    <div>
                        <img src={banner3} alt="" />
                    </div>
                    <div>
                        <img src={banner4} alt="" />
                    </div>
                    <div>
                        <img src={banner4} alt="" />
                    </div>
                    <div>
                        <img src={banner4} alt="" />
                    </div>
                </Carousel>
            </section><br /><br />


            {/* --------------------------About Us--------------------------------- */}

            <section className='aboutus container'>
                <h1>About Us</h1>
                <div className='f-c'>
                    <div className="about-big-img"><img src={about_us} alt="" /></div>
                    
                    <div className="abut-info">  <p>
                        eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IITs/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready.
                    </p></div>
                  
                </div>

                <div className='mis-vis'>
                    <article>
                        <div className='visionimg'>
                            <img src={vision} alt="" />
                        </div>

                        <div className='visioncontent'>
                            <h2>OUR VISION</h2>
                            <p>Our vision is to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. <br />
                                Values: <br />
                                1. We believe in constant innovation and development. <br />
                                2. We act with integrity and humility. <br />
                                3. We work with energy and curiosity. <br />
                                4. We seek growth and equal opportunity.</p>
                        </div>
                    </article>

                    <article>
                        <div className='visionimg'>
                            <img src={mission} alt="" />
                        </div>

                        <div className='visioncontent'>
                            <h2>OUR MISSION</h2>
                            <p>Our mission is to be the most accessible and affordable online education provider in the country. <br /> <br />

                                We intend to build a virtual knowledge pool that strengthens the students and thereby strengthens the country in the journey towards growth and innovation.</p>
                        </div>
                    </article>
                </div>
            </section>




            {/* ----------------------------------Exams----------------------------------------------- */}

            <section className='exams container'>
                <h1>Explore Exams</h1>
                <div className='exambtns'>
                <div className='examcontent'>
                    <div className='exam1'>
                        <div className='btn1'><AiOutlineFileImage /></div>
                        <div className='btn1'><AiOutlineDesktop /></div>
                        <div className='btn1'><AiOutlineBank /></div>
                    </div>

                    <div className='iitjee_btn'>
                        <button>IITJEE</button>
                    </div>
                </div>

                <div className='examcontent'>
                    <div className='exam1'>
                        <div className='btn1'><AiOutlineFileImage /></div>
                        <div className='btn1'><AiOutlineDesktop /></div>
                        <div className='btn1'><AiOutlineBank /></div>
                    </div>

                    <div className='iitjee_btn'>
                        <button>NEET</button>
                    </div>
                </div>

                <div className='examcontent'>
                    <div className='exam1'>
                        <div className='btn1'><AiOutlineFileImage /></div>
                        <div className='btn1'><AiOutlineDesktop /></div>
                        {/* <div className='btn1'><AiOutlineBank /></div> */}
                    </div>

                    <div className='iitjee_btn'>
                        <button>BITSAT</button>
                    </div>
                </div>

                <div className='examcontent'>
                        <div className='exam1 singlebtn'>
                        <div className='btn1'><AiOutlineFileImage /></div>
                        {/* <div className='btn1'><AiOutlineDesktop /></div>
                        <div className='btn1'><AiOutlineBank /></div> */}
                    </div>

                    <div className='iitjee_btn'>
                        <button>VITEEE</button>
                    </div>
                </div>

                <div className='examcontent'>
                        <div className='exam1 singlebtn'>
                        <div className='btn1'><AiOutlineFileImage /></div>
                        {/* <div className='btn1'><AiOutlineDesktop /></div>
                        <div className='btn1'><AiOutlineBank /></div> */}
                    </div>

                    <div className='iitjee_btn'>
                        <button>AP-EAPCET</button>
                    </div>
                </div>

                <div className='examcontent'>
                        <div className='exam1 singlebtn'>
                        <div className='btn1'><AiOutlineFileImage /></div>
                        {/* <div className='btn1'><AiOutlineDesktop /></div>
                        <div className='btn1'><AiOutlineBank /></div> */}
                    </div>

                    <div className='iitjee_btn'>
                        <button>TS-EAMCET</button>
                    </div>
                </div>

                <div className='examcontent'>
                        <div className='exam1 singlebtn'>
                        <div className='btn1'><AiOutlineFileImage /></div>
                        {/* <div className='btn1'><AiOutlineDesktop /></div>
                        <div className='btn1'><AiOutlineBank /></div> */}
                    </div>

                    <div className='iitjee_btn'>
                        <button>MHCET</button>
                    </div>
                </div>

                <div className='examcontent'>
                        <div className='exam1 singlebtn'>
                        <div className='btn1'><AiOutlineFileImage /></div>
                        {/* <div className='btn1'><AiOutlineDesktop /></div>
                        <div className='btn1'><AiOutlineBank /></div> */}
                    </div>

                    <div className='iitjee_btn'>
                        <button>KCET</button>
                    </div>
                </div>

                    <div className='examcontent'>
                        <div className='exam1 singlebtn'>
                            <div className='btn1'><AiOutlineFileImage /></div>
                            {/* <div className='btn1'><AiOutlineDesktop /></div>
                            <div className='btn1'><AiOutlineBank /></div> */}
                        </div>

                        <div className='iitjee_btn'>
                            <button>WBJEE</button>
                        </div>
                    </div>

                    <div className='examcontent'>
                        <div className='exam1 singlebtn'>
                            <div className='btn1'><AiOutlineFileImage /></div>
                            {/* <div className='btn1'><AiOutlineDesktop /></div>
                            <div className='btn1'><AiOutlineBank /></div> */}
                        </div>

                        <div className='iitjee_btn'>
                            <button>KERALACEE</button>
                        </div>
                    </div>

                    <div className='examcontent'>
                        <div className='exam1 singlebtn'>
                            <div className='btn1'><AiOutlineFileImage /></div>
                            {/* <div className='btn1'><AiOutlineDesktop /></div>
                            <div className='btn1'><AiOutlineBank /></div> */}
                        </div>

                        <div className='iitjee_btn'>
                            <button>SRMJEE</button>
                        </div>
                    </div>
                </div>
            </section>



            {/* ----------------------------courses page----------------------------- */}

            <section className='courses container'>
                <h1>Our Courses</h1>
                <div className='coursesdiv'>
                    <div className='innerdiv'>
                        <div className='heading'>
                        <h2>ONLINE TEST SERIES</h2>
                        </div>
                    <div className='testseries'>
                    <div className='course_content'>
                        <h3>Features</h3>
                        <p>1. Interface similar to that of the competitive exams <br />
                           2. Combination of subject/topic wise and full syllabus. <br />
                           3. Detailed solutions with explanation <br />
                           4. Performance analysis reports</p>
                    </div>
                    <div className='testseriesimg'>
                        <img src={Testseries} alt="" />
                    </div>
                    </div>
                    <div className='course_btn'>
                        <button>IITJEE(MAINS & ADVANCED)</button>
                        <button>NEET</button>
                        <button>BITSAT</button>
                        <button>VITEEE</button>
                        <button>AP-EAPCET</button>
                        <button>TS-EAMCET</button>
                        <button>MHCET</button>
                        <button>KCET</button>
                        <button>WBJEE</button>
                        <button>KERALACEE</button>
                        <button>SRMJEE</button>
                    </div>
                    </div>

                    <div className='innerdiv'>
                        <div className='heading'>
                            <h2>ONLINE LIVE VIDEO CLASSES</h2>
                        </div>
                        <div className='testseries'>
                            <div className='course_content'>
                                <h3>Features</h3>
                                <p>1. Content curated by industry experts <br />
                                   2. Best-in-class user interface <br />
                                   3. Frequent doubt clearing sessions <br />
                                   4. Accessible from anywhere and anytime </p>
                            </div>
                            <div className='testseriesimg'>
                                <img src={Videoclasses} alt="" />
                            </div>
                        </div>
                        <div className='course_btn'>
                            <button>IITJEE(MAINS & ADVANCED)</button>
                            <button>NEET</button>
                        </div>
                    </div>

                    <div className='innerdiv'>
                        <div className='heading'>
                            <h2>ONLINE QUESTION BANK</h2>
                        </div>
                        <div className='testseries'>
                            <div className='course_content'>
                                <h3>Features</h3>
                                <p>1. Practice questions in the examination interface <br />
                                   2. Volume of questions available across topics <br />
                                   3. Detailed analysis and explanations to the solutions <br />
                                   4. Practice any number of time</p>
                            </div>
                            <div className='testseriesimg'>
                                <img src={questionbank} alt="" />
                            </div>
                        </div>
                        <div className='course_btn'>
                            <button>IITJEE(MAINS & ADVANCED)</button>
                            <button>NEET</button>
                        </div>
                    </div>
                </div>
            </section>






{/* ----------------------------------------------Contact Us----------------------------------------------- */}

            <section className='contact container'>
                <h1>Contact Us</h1>
                <div className='right'>
                    <div className='iframe'>
                        <iframe src={data} width={650} height={650} frameborder="0" title='contact'></iframe>
                    </div>

                    <div className='address'>
                        <div className='inputcontent'>
                            <div className='inputs'>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <input type="email" placeholder='Email'/>
                            <textarea cols="30" rows="10" placeholder='Message'></textarea>
                        </div>

                        <button type='button' className='btn-primary'>Send Message</button>


                        <div className='content'>
                            <div>
                                <h2>ADDRESS</h2>
                                <p>H.NO-2-2-1132/10/C,R.K Nivas, 2nd Floor,Opposite Bakers Q, <br /> Shivam Road,New Nallakunta,
                                    Hyderabad-44.</p>
                            </div>

                            <div>
                                <h2>Email</h2>
                                <p>info@egradtutor.in</p>
                            </div>

                            <div>
                                <h2>CONTACT</h2>
                                <p>+91- 7993270532</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

















            <section className="faqq">
                <h2>Frequently Asked Questions </h2>
                <div className="main container">
                    <div className="faq-content">
                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>What is the mode of registration?</button>
                            <div className="contentfaq">
                                <p>Registration mode will be online.</p>
                            </div>
                        </div>


                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>What is the mode of payment?</button>
                            <div className="contentfaq">
                                <p>Payment can be done through debit card, credit card, UPI, Net banking.</p>
                            </div>
                        </div>


                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>What if the money debited and the test is not accessible?</button>
                            <div className="contentfaq">
                                <p>Please contact our web team -info@egradtutor.in they will try to resolve it in 24 hours.</p>
                            </div>
                        </div>


                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>
                                Do we need to make a payment to get registered?</button>
                            <div className="contentfaq">
                                <p>No. Registration is free of cost, and you need to make payment only when you subscribe to any of our products.</p>
                            </div>


                        </div>

                        <div className="wrapper">
                            <button class="toggle">
                                <i class="uil uil-plus icon"></i>

                                Who created the test series?</button>
                            <div className="contentfaq">
                                <p>These tests are created by top faculty across India who have 10+Years of experience and by the graduates from IIT/ IISC, IISER.

                                </p>
                            </div>


                        </div>
                    </div>



                    <div className="faq-content">
                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>What information do we need for registration?</button>
                            <div className="contentfaq">
                                <p>Name, contact number, email id, password, country, city. </p>
                            </div>
                        </div>


                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>Will the money be refunded?</button>
                            <div className="contentfaq">
                                <p>No refund will be given if a student wishes to opt out during the period of subscription. We will try to resolve any technical issues in the payment within 48 hours of credit to our account.</p>
                            </div>
                        </div>


                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>
                                Do we provide any demo tests?</button>
                            <div className="contentfaq">
                                <p> Yes, we provide the demo test for those who get registered.</p>
                            </div>
                        </div>


                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>Are there any discount/coupons available for OTS?</button>
                            <div className="contentfaq">
                                <p>Yes, if you are referred by any of our faculty. You can use the same while making the payment.</p>
                            </div>
                        </div>


                        <div className="wrapper">
                            <button className="toggle">
                                <i className="uil uil-plus icon"></i>
                                I did not get my answer from the above FAQs, whom should I contact?</button>
                            <div className="contentfaq">
                                <p>In case you didn’t get the information, you are looking for, you can contact the eGRADTutor Helpdesk number: +91-7993270532, Email: Info@egradtutor.in.</p>
                            </div>
                        </div>




                    </div>
                </div></section>




{/* --------------------------------------------Footer-------------------------------------------- */}
            <footer>
                <div className='footer container'>
                    <div className='fot1'>
                        <img src={Logo} alt="" />
                        <p>eGRADTutor (a brand of eGATETutor Academy) started with a team of graduates from IIT/IISc.We are experts in training students for UG, PG And MBA entrance examinations.</p>
                    </div>

                    <div className='fot2'>
                        <h1>Permalinks</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Career</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className='fot3'>
                        <h1>Privacy</h1>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and conditions</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>

                    <div className='fot4'>
                        <h1>Contact Us</h1>
                        <p> H.NO-2-2-1132/10/C,R.K Nivas,
                            2nd Floor,Opposite Bakers Q,
                            Shivam Road,New Nallakunta,
                            Hyderabad-44.</p>
                        <p>+91-7993270532</p>
                        <p>info@egradtutor.in</p>
                    </div>
                </div>
                <hr />
                <div className='copyright container'>
                    <p>Copyright © 2023 eGradTutor All rights reserved</p>
                </div>
            </footer>

        </>
    )
}

export default Header







let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("contentfaq");
let icons = document.getElementsByClassName("icon")
console.log(toggles, contentDiv, icons);


for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", () => {
        // console.log(contentDiv[i].style.height,contentDiv[i].scrollHeight + "px");
        if (parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "white";
            icons[i].classList.remove("uil-plus");
            icons[i].classList.add("uil-minus")

        }
        else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "white";
            icons[i].classList.remove("uil-minus");
            icons[i].classList.add("uil-plus");
        }
        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "white";
                icons[j].classList.remove("uil-minus");
                icons[j].classList.add("uil-plus");
            }
        }
    });
}