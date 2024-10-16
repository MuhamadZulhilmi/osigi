import React from 'react';
function App() {
    return (
      <div>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
    
          <h1 className="logo"><a href="index.html"></a></h1>
    
          <nav id="navbar" className="navbar">
            <a className="navbar-brand" >OSOGI SERVICES</a>
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#pricing">Services</a></li>
              <li><a className="nav-link scrollto" href="#cta">Milestone</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
        <h1>Welcome to OSIGI SERVICES!</h1>
        <h2>Your premier destination for top-notch services tailored to meet your unique needs. With a commitment to excellence and
          customer satisfaction, we pride ourselves on delivering exceptional services that
          exceed expectations</h2>
        <a href="#about" className="btn-get-started scrollto">Learn More</a>
      </div>
    </section>
      <main id="main">
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>Welcome to Osigi Services</h3>
            <p style="text-align:justify;">
              Founded in 2016, OSOGI Services Sdn Bhd is a management,consulting, and outsourcing company. We offer expert assistance with work permit and visa renewal for foreign nationals and employees, as well as transport services and expert consultation
            </p>
            <p style="text-align:justify;">
              We offer a comprehensive range of services designed to cater to various
              industries and sectors.What sets us apart is our dedication to quality, innovation, and customer-centric
              approach. We understand the importance of delivering services that not only meet
              but exceed your requirements. With a focus on continuous improvement and
              staying ahead of industry trends, we are constantly evolving to ensure that our
              services align with your changing needs
            </p>
          </div>
        </div>
      </div>
    </section>
        <section id="why-us" className="why-us">
          <div className="container">
    
            <div className="row">
    
              <div className="col-lg-4" data-aos="fade-up">
                <div className="box">
                  <span>01</span>
                  <h4>Osigi's Vision</h4>
                    <p style="text-align:justify;">
                      To be the leading provider of innovative and reliable services that empower individuals and businesses to thrive. We aspire to set new
                      industry standards by delivering exceptional solutions that exceed expectations, foster growth, and create lasting value for our clients and partners. <br/>
                      Through a commitment to excellence, integrity, and continuous improvement, we aim to be recognized as a trusted and
                      preferred partner in driving success and making a positive impact in the communities we serve."
                      </p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="150">
                <div className="box">
                  <span>02</span>
                  <h4>Osigi's Mission</h4>
                  <p style="text-align:justify;"> To deliver exceptional services that consistently exceed our clients'
                    expectations. We are dedicated to providing innovative, reliable, and
                    customer-centric solutions that address the unique needs of
                    individuals and businesses. Through a commitment to professionalism,
                    integrity, and quality, we strive to build long-lasting relationships with
                    our clients based on trust, respect, and collaboration. Our mission is to
                    empower our clients to achieve their goals, drive success, and make a
                    positive impact in the communities we serve.</p>
                </div>
              </div>
    
              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="box">
                  <span>03</span>
                  <h4> Why Choose Osigi Services</h4>
                  <p>OSOGI Services Sdn Bhd welcomes you to get in touch with our office. if you'd need a quote, further details, or guidance</p>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
        <section id="clients" className="clients">
          <div className="section-title"><h2>Our Client</h2></div>
          <div className="container" data-aos="zoom-in">
    
            <div className="row d-flex align-items-center">
    
              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/>
              </div>
    
              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/>
              </div>
    
              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
              </div>
    
              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
              </div>
    
              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
              </div>
    
              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
              </div>
    
            </div>
    
          </div>
        </section>
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <span>Service</span>
              <h2>Osigi Services</h2>
              <p>What Do We Do?</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="150">
                <div className="box">
                  <h3>Plan 1</h3>
                  <p style="text-align:justify;"> Application for Expatriate Employment Pass (ESD Talent Corp) Application for Visas & Work Permit</p>
                  <div className="btn-wrap">
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="zoom-in">
                <div className="box">
                  <h3>Plan 2</h3>
                  <p style="text-align:justify;"> Manpower Outsourcing. Establishment of fixed term contract of employment for expatriates.</p>
                  <div className="btn-wrap">
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                <div className="box">
                  <h3>Plan 3</h3>
                  <p style="text-align:justify;"> Flight tickets purchase for crews. Manage the check-in at the airport. Manage hotel booking for crews</p>
                  <div className="btn-wrap">
                  </div>
                </div>
              </div>  
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                <div className="box">
                  <h3>Plan 4</h3>
                  <p style="text-align:justify;">Cargo Handling (Door to Door). Sea and Air Custom Clearance.</p>
                  <div className="btn-wrap">
                  </div>
                </div>
              </div>  
           
            </div>
          </div>
        </section>
        <section id="cta" className="cta">
          <div className="container"/>
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <span>Milestone</span>
                  <section className="design-section"></section>
                    <div className="timeline">
                              <div className="timeline-item">
                              </div>
                          <div className="timeline-middle">
                              <div className="timeline-circle"></div>
                          </div>
                          <div className="timeline-component timeline-content">
                            <h3>2016</h3>
                            <p style="text-align:justify;"> Company established. Handling visa  
                              for Oil & Gas Crew in Sabah &
                               Sarawak. Handling their
                               transportation and accommodation.
                               Open branches in Miri, Sarawak &
                               Kota Kinabalu, Sabah</p>
                      </div>
                            <div className="timeline-component timeline-content">
                                    <h3>2018</h3>
                                    <p style="text-align:justify;"> Expanding by handling visa for
                                      others company in various fields.
                                      Handling hotel booking, flight and
                                      transportation for Oil & Gas
                                      company.</p>
                            </div>
                            <div className="timeline-middle">
                                <div className="timeline-circle"></div>
                            </div>
                            <div className="timeline-empty">
                            </div>
            
                            <div className="timeline-empty">
                            </div>
            
                          <div className="timeline-middle">
                              <div className="timeline-circle"></div>
                          </div>
                          <div className=" timeline-component timeline-content">
                            <h3>2024</h3>
                            <p style="text-align:justify;"> Enter the world of Cargo. Handling Hajj Cargo for 1445H .</p>
                      </div>
                    <section/>
              </div>
            </div></div>
          </div>
        </section>
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <span>Our Team</span>
          <h2>OSIGI Team</h2>
          <p>Meet the dedicated individuals behind Osigi Services.</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="assets/img/team/team-1.jpg" alt=""/>
              <h4>MOHD NAZRI BIN ISHAK</h4>
              <span>MANAGING DIRECTOR</span>
              <p>
                " “Every moment is a fresh beginning.”"
              </p>
              <div className="social">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="assets/img/team/team-2.jpg" alt=""/>
              <h4>NORA BINTI AHMININ</h4>
              <span>GENERAL MANAGER</span>
              <p>
                " "Stay inspired.Never stop creating.""
              </p>
              <div className="social">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="assets/img/team/team-2.jpg" alt=""/>
              <h4>MARILYN</h4>
              <span>BRANCH MANAGER MIRI</span>
              <p>
                " "Stay inspired.Never stop creating.""
              </p>
              <div className="social">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="assets/img/team/team-2.jpg" alt=""/>
              <h4>ROZZIAH JR BINTI JEMAN</h4>
              <span>BRANCH MANAGER SABAH</span>
              <p>
                "“A big business start small.”""
              </p>
              <div className="social">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <span>Contact Us</span>
          <h2>OFFICE</h2>
          <p>Feel free to reach out to us for any inquiries or assistance.</p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>HQ</h3>
              <p>No 41A-1, Jalan Gemilang 1, Pusat Perniagaan Gemilang, Kota Warisan, Sepang</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>admin@osogiservices.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+6019 3674278</p>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Sarawak Branch</h3>
              <p> Unit 2.11, 2nd Floor Wisma Pelita Tunku Miri, Sarawak</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>admin@osogiservices.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+6085 - 426 417</p>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Sabah Branch</h3>
              <p>Lot 21, Likas Square Kota Kinabalu, Sabah</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>admin@osogiservices.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+6088 - 214 276</p>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6">
            <iframe
              className="mb-4 mb-lg-0"
              src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1992.5141681764715!2d101.69786729999998!3d2.8078348500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb8af841ea837%3A0x25f17a7bb1d6022!2sPusat%20Perniagaan%20Gemilang%2C%20Exit%20B20%2C%2043900%20Sepang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1712068097169!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              frameborder="0"
              style="border:0; width: 100%; height: 384px;"allowfullscreen
            </iframe>
          </div>
          <div className="col-lg-6">
            <form action="#" method="" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
      </main>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
    
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>Contact Details</h3>
                  <p>
                    No 41A-1, Jalan Gemilang 1, Pusat Perniagaan Gemilang, Kota Warisan, Sepang<br/><br/>
                    <strong>Phone:</strong> +60 19 3674278<br/>
                    <strong>Email:</strong> admin@osogiservices.com<br/>
                  </p>
    
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
    
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Our Plan</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Application for Expatriate Employment Pass</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Manpower Outsourcing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Flight tickets purchase for crews.</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Cargo Handling</a></li>
                </ul>
              </div>
    
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Stay up to date with our development and new features!</p>
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy; Copyright 2024 <strong><span>OSOGI Sdn Bhd</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
          </div>
        </div>
      </footer>
    
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      <div id="preloader"></div>
    </div>
    );
}
export default App;