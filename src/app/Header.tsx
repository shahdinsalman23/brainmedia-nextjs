import Link from "next/link";



export default function Header(){
    return (
        <>
        <div className="header-top wow bounceInLeft">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="header-detail">
                      <div className="header-location">
                          <Link href={``}><i className='bx bx-map'></i></Link>
                          <p>Jl. Raya Ubud No.88, Bali 80571</p>
                      </div>
                      <div className="header-location">
                          <Link href={``}><i className='bx bx-phone-call'></i></Link>
                          <p>(+62) 81 2345 1234</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="header-time">
                          <span></span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <header className="header-main wow bounceInDown center" >
          <div className="container">
              <div className="row">
                      <div className="col-lg-2" data-aos="fade-up">
                          <div className="header-logo">
                             <Link href={`/`}><img src="images/logo-noot.png" alt="" /></Link>
                          </div>
                      </div>
                      <div className="col-lg-7">
                          <div className="header-nav" data-aos="zoom-in">
                              <ul>
                                  <li><Link href={`/`}>Home</Link></li>
                                  <li><Link href={``}>About Us</Link></li>
                                  <li><Link href={``}>Adaptogens</Link></li>
                                  <li><Link href={``}>Anxiolytics (Anti-Anxiety)</Link></li>
                                  <li><Link href={``}>Antioxidants</Link></li>
                                  <li><Link href={``}>Neuroprotection</Link></li>
                                  <li><Link href={``}>Memory Enhancers</Link></li>
                                  <li><Link href={``}>Neuroprotection</Link></li>
                                  <li><Link href={``}>Mood Regulation</Link></li>
                                  <li><Link href={``}>Synthetic Nootropics</Link></li>
                                  <li><Link href={``}>Nootropics Guides</Link></li>
                                  <li><Link href={``}>Contact</Link></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="header-end">
                              <div className="header-icon">
                                  <Link href={``}><img src="images/3 - bag.png" alt="" /></Link>
                                  <Link href={``}><img src="images/user-login.png" alt="" /></Link>
                              </div>
                              <div className="header-btn">
                                  <Link href={``}>Sign Up</Link>
                              </div>
                          </div>
                      </div>
              </div>
          </div>
      </header>
  
       </>
    )
}