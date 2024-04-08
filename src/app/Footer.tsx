


export default function () {
    return (
        <footer className="footer-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="footer-logo">
                        <img src="images/logo.png" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="footer-contact">
                        <h4>Contact us</h4>
                        <div className="contact-txt">
                            <p>Call Us: +346 - 306 - 9773 </p>
                            <p>Mail Us: clientrelations@neweralendingllc.com</p>
                            <ul>
                                <li><a href="#"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#"><i className='bx bxl-instagram-alt'></i></a></li>
                                <li><a href="#"><i className='bx bxl-pinterest-alt'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="footer-contact">
                        <h4>Contact us</h4>
                        <div className="contact-txt">
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <input type="email" name="" id="" placeholder="email address" />
                            <span><i className='bx bxs-paper-plane' ></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>COPYRIGHT 2023  ALL RIGHTS RESERVED.</p>
                <div className="terms-txt">
                    <a href={`#`}>terms and condition</a>
                    <span>|</span>
                    <a href={`#`}>privacy policy</a>
                </div>
            </div>
        </div>
    </footer>
    )
}