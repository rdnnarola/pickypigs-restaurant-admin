import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import "./LoginPageFooter.scss"
const LoginPageFooter = () => {
    return (
        <section className="LoginPageFooter-section">
            <footer className="footer-section mt-auto bg-pink">
                <div className="container">
                    <div className="row pl-lg-4">
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <div className="footer-block">
                                <p className="f-15 brandon-Medium text-white text-uppercase">About</p>
                                <ul className="pl-0">
                                    <li className="li-list f-15 mb-2 text-white"><a href="#">Team</a></li>
                                    <li className="li-list f-15 mb-2 text-white">Careers</li>
                                    <li className="li-list f-15 mb-2 text-white">Blog</li>
                                    <li className="li-list f-15 mb-2 text-white"><NavLink to="/faq">FAQ</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <div className="footer-block">
                                <p className="f-15 brandon-Medium text-white text-uppercase">Terms & Conditions</p>
                                <ul className="pl-0">
                                    <li className="li-list f-15 mb-2 text-white"><NavLink to="/terms">Privacy</NavLink></li>
                                    <li className="li-list f-15 mb-2 text-white"><NavLink to="/">Cookies</NavLink></li>
                                    <li className="li-list f-15 mb-2 text-white"><NavLink to="/terms">All Terms</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <div className="footer-block">
                                <p className="f-15 brandon-Medium text-white text-uppercase">Newsletter</p>
                                <ul className="pl-0">
                                    <li className="li-list f-15 mb-2 text-white"><Link to='/'><u>Signup for our newsletter</u></Link></li>
                                    <li className="li-list f-15 mb-2 text-white"><Link to='/'><u>Signup for our B2B newsletter</u></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <div className="footer-block">
                                <p className="f-15 brandon-Medium text-white text-uppercase">Connect with us</p>
                                <ul className="pl-0">
                                    <li className="li-list f-15 mb-2">
                                        <div className="socail-icon d-flex">
                                            <div className="socail-btn mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16">
                                                    <g id="Facebook" transform="translate(-1049 -5261)">
                                                        <g id="Facebook-2" data-name="Facebook" transform="translate(1015.939 5221.564)">
                                                            <path id="Path_26" data-name="Path 26" d="M34.824,47.5v7.735a.21.21,0,0,0,.217.2h3.092a.21.21,0,0,0,.217-.2V47.373H40.59a.211.211,0,0,0,.216-.185l.216-2.369a.208.208,0,0,0-.216-.218H38.349v-1.68a.742.742,0,0,1,.767-.713h1.728a.21.21,0,0,0,.217-.2V39.638a.21.21,0,0,0-.217-.2H37.925a3,3,0,0,0-3.1,2.882V44.6H33.278a.209.209,0,0,0-.217.2v2.369a.209.209,0,0,0,.217.2h1.546Z" fill="#fff" fillRule="evenodd"></path>
                                                        </g>
                                                        <path id="Color_Overlay" data-name="Color Overlay" d="M1050.98,5277a.209.209,0,0,1-.217-.2v-7.861h-1.546a.21.21,0,0,1-.217-.2v-2.368a.209.209,0,0,1,.217-.2h1.546v-2.285a3,3,0,0,1,3.1-2.881h2.919a.21.21,0,0,1,.217.2v2.369a.21.21,0,0,1-.217.2h-1.728a.741.741,0,0,0-.767.714v1.681h2.457a.207.207,0,0,1,.216.217l-.216,2.369a.211.211,0,0,1-.216.186h-2.241v7.861a.209.209,0,0,1-.217.2Z" fill="#333"></path>
                                                    </g>
                                                </svg>

                                            </div>
                                            <div className="socail-btn mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
                                                    <g id="Twitter" transform="translate(-1105 -5263)">
                                                        <g id="Twitter-2" data-name="Twitter" transform="translate(992.171 5221.455)">
                                                            <path id="Path_28" data-name="Path 28" d="M128.763,43.1a6.676,6.676,0,0,1-1.618.455c.26-.043.642-.508.8-.7a2.918,2.918,0,0,0,.537-.967c.014-.027.024-.062,0-.083a.093.093,0,0,0-.086.007,8.338,8.338,0,0,1-1.918.725.128.128,0,0,1-.132-.035,1.69,1.69,0,0,0-.168-.169,3.4,3.4,0,0,0-.929-.562,3.274,3.274,0,0,0-1.425-.227,3.442,3.442,0,0,0-1.352.377,3.479,3.479,0,0,0-1.091.88,3.288,3.288,0,0,0-.651,1.288,3.447,3.447,0,0,0-.035,1.36c.01.076,0,.086-.066.076a10.293,10.293,0,0,1-6.592-3.312c-.077-.086-.119-.086-.181.007a3.267,3.267,0,0,0,.569,3.9c.129.121.262.242.405.352a3.388,3.388,0,0,1-1.272-.352c-.077-.048-.116-.021-.123.066a1.952,1.952,0,0,0,.021.373,3.345,3.345,0,0,0,2.083,2.66,1.972,1.972,0,0,0,.423.127,3.815,3.815,0,0,1-1.248.038c-.091-.017-.126.028-.091.114a3.5,3.5,0,0,0,2.622,2.167c.119.021.238.021.357.048-.007.011-.014.011-.021.021a4.171,4.171,0,0,1-1.79.937,6.484,6.484,0,0,1-2.719.343c-.146-.021-.177-.019-.216,0s-.005.059.042.1c.185.12.374.228.566.331a9.036,9.036,0,0,0,1.818.717A9.772,9.772,0,0,0,124.67,52a9.661,9.661,0,0,0,2.6-7.1c0-.1.122-.158.195-.212a6.308,6.308,0,0,0,1.279-1.313.4.4,0,0,0,.085-.252V43.1C128.829,43.062,128.828,43.075,128.763,43.1Z" fill="#fff" />
                                                        </g>
                                                        <path id="Color_Overlay" data-name="Color Overlay" d="M1107.443,5275.619a9.007,9.007,0,0,1-1.817-.716c-.193-.1-.381-.212-.567-.331-.046-.038-.082-.073-.041-.1s.07-.021.216,0a6.5,6.5,0,0,0,2.719-.344,4.175,4.175,0,0,0,1.79-.936c.007-.011.013-.011.021-.021-.119-.028-.238-.028-.358-.047a3.5,3.5,0,0,1-2.621-2.167c-.034-.087,0-.131.091-.115a3.837,3.837,0,0,0,1.247-.037,2.042,2.042,0,0,1-.424-.127,3.351,3.351,0,0,1-2.083-2.661,2.016,2.016,0,0,1-.021-.374c.008-.086.046-.114.123-.066a3.382,3.382,0,0,0,1.273.352,4.972,4.972,0,0,1-.405-.352,3.267,3.267,0,0,1-.571-3.9c.063-.093.106-.093.181-.007a10.294,10.294,0,0,0,6.593,3.312c.069.01.076,0,.066-.076a3.434,3.434,0,0,1,.034-1.36,3.3,3.3,0,0,1,.651-1.289,3.507,3.507,0,0,1,1.091-.879,3.447,3.447,0,0,1,1.352-.376,3.254,3.254,0,0,1,1.425.227,3.41,3.41,0,0,1,.93.562,1.8,1.8,0,0,1,.168.169.126.126,0,0,0,.131.034,8.344,8.344,0,0,0,1.919-.724.1.1,0,0,1,.086-.008c.028.021.017.057,0,.083a2.922,2.922,0,0,1-.538.968c-.154.187-.535.653-.8.7a6.708,6.708,0,0,0,1.618-.456c.065-.029.066-.041.066,0v.013a.4.4,0,0,1-.085.253,6.358,6.358,0,0,1-1.279,1.313c-.073.054-.195.11-.195.212a9.66,9.66,0,0,1-2.6,7.1,9.3,9.3,0,0,1-6.563,2.55A10.781,10.781,0,0,1,1107.443,5275.619Z" fill="#333" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="socail-btn mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17.001" viewBox="0 0 18 17.001">
                                                    <g id="Instagram" transform="translate(-1164 -5261)">
                                                        <g id="Instagram-2" data-name="Instagram" transform="translate(1090.848 5221.397)">
                                                            <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="1.055" cy="0.997" rx="1.055" ry="0.997" transform="translate(85.862 42.638)" fill="#fff" />
                                                            <path id="Path_30" data-name="Path 30" d="M82.226,43.916A4.193,4.193,0,1,0,86.658,48.1,4.32,4.32,0,0,0,82.226,43.916Zm0,6.868a2.686,2.686,0,1,1,2.84-2.682A2.768,2.768,0,0,1,82.226,50.784Z" fill="#fff" />
                                                            <path id="Path_31" data-name="Path 31" d="M85.745,56.6H78.559A5.269,5.269,0,0,1,73.152,51.5V44.709A5.269,5.269,0,0,1,78.559,39.6h7.186a5.269,5.269,0,0,1,5.407,5.106V51.5A5.269,5.269,0,0,1,85.745,56.6ZM78.559,41.2a3.619,3.619,0,0,0-3.713,3.507V51.5A3.618,3.618,0,0,0,78.559,55h7.186A3.618,3.618,0,0,0,89.458,51.5V44.709A3.619,3.619,0,0,0,85.745,41.2Z" fill="#fff" />
                                                        </g>
                                                        <path id="Color_Overlay" data-name="Color Overlay" d="M1169.407,5278a5.27,5.27,0,0,1-5.407-5.107v-6.788a5.27,5.27,0,0,1,5.407-5.106h7.186a5.269,5.269,0,0,1,5.407,5.106v6.788a5.269,5.269,0,0,1-5.407,5.107Zm-3.714-11.9v6.788a3.619,3.619,0,0,0,3.714,3.507h7.186a3.618,3.618,0,0,0,3.714-3.507v-6.788a3.618,3.618,0,0,0-3.714-3.506h-7.186A3.619,3.619,0,0,0,1165.693,5266.105Zm2.948,3.394a4.44,4.44,0,1,1,4.433,4.187A4.32,4.32,0,0,1,1168.641,5269.5Zm1.594,0a2.844,2.844,0,1,0,2.84-2.681A2.767,2.767,0,0,0,1170.234,5269.5Zm6.476-4.467a1.057,1.057,0,1,1,1.056,1A1.027,1.027,0,0,1,1176.711,5265.033Z" fill="#333" />
                                                    </g>
                                                </svg>

                                            </div>
                                            <div className="socail-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.001" height="14" viewBox="0 0 14.001 14">
                                                    <g id="Linkedin" transform="translate(-1225.999 -5262)">
                                                        <g id="Linkedin-2" data-name="Linkedin" transform="translate(1065.298 5179.448)">
                                                            <path id="Path_34" data-name="Path 34" d="M160.934,87.2h2.9v9.353h-2.9Zm1.453-4.647a1.686,1.686,0,1,1-1.684,1.684,1.684,1.684,0,0,1,1.684-1.684" fill="#fff" />
                                                            <path id="Path_35" data-name="Path 35" d="M165.658,87.2h2.782v1.279h.038a3.047,3.047,0,0,1,2.746-1.51c2.936,0,3.478,1.936,3.478,4.455v5.129h-2.9V92.005c0-1.086-.021-2.48-1.507-2.48-1.51,0-1.74,1.181-1.74,2.4v4.626h-2.9Z" fill="#fff" />
                                                        </g>
                                                        <path id="Color_Overlay" data-name="Color Overlay" d="M1237.1,5276v-4.547c0-1.084-.021-2.48-1.507-2.48-1.511,0-1.741,1.181-1.741,2.4V5276h-2.9v-9.352h2.783v1.279h.037a3.049,3.049,0,0,1,2.748-1.511c2.936,0,3.477,1.936,3.477,4.454V5276Zm-10.871,0v-9.352h2.905V5276Zm-.232-12.315a1.684,1.684,0,1,1,1.684,1.687A1.686,1.686,0,0,1,1226,5263.685Z" fill="#333" />
                                                    </g>
                                                </svg>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="footer-block mb-3">
                                <p className="f-15 brandon-Medium text-white text-uppercase">Contact us</p>
                                <ul className="pl-0 d-flex flex-wrap">
                                    <li className="li-list f-15 mb-2 mr-5">
                                        <p className="mb-1 text-white">Partnership:</p>
                                        <p className="text-white">contact@nareshbingi.com</p>
                                    </li>
                                    <li className="li-list f-15 mb-2">
                                        <p className="mb-1 text-white">General inquiries:</p>
                                        <p className="text-white">hello@nareshbingi.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="row bg-pink align-items-center h-80">
                        <div className="container">
                            <div className="row pl-lg-4 pt-1 pb-1">
                                <div className="col-sm-12 pt-4 pb-4">
                                    <p className="text-white mb-0">Copyright © 2020 nareshbingi. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </section>
        // <div>
        //  <div>ABOUT</div>
        // <div>TERMS & CONDITIONS</div>
        // <div>NEWSLETTER</div>
        // <div>CONTACT WITH US</div>
        // <div>CONTACT US</div>
        // </div>
    )
}

export default LoginPageFooter;
