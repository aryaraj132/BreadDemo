import React, { Component } from 'react'
import {Link} from'react-router-dom';
// import gsap from 'gsap';
export default class home extends Component {
    constructor(props){
        super(props);
        this.state={
            load:false,
        }
    }
    componentDidMount(){
        document.title = "Bread Demo";
        this.setState({load:true})
    }
    componentDidUpdate(){
        $(".owl-carousel").owlCarousel({
            center:true,
            items:2,
            autoplay: true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            dots: false,
            loop: true,
            nav:true,
            margin:30,
            smartSpeed:950,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              }
            }
          });

     }
    render() {
        return (<>
            <section className="head-section">
                <div className="section-title">
                    <h2 data-aos="zoom-in-up">Start your day with the<br />goodness of Yoga</h2>
                </div>
            </section>
            <section className="macbook">
                <div className="container overlay">
                    <div className="pannel">
                        <div className="pannel-header">
                            <div className="dp-grid mb-3">
                            <div className="dp">
                                <img src="assets/img/dp.png" alt="DP" />
                            </div>
                            <div className="skills">
                                <div className="skill-item">Yoga</div>
                                <div className="skill-item">Wellness</div>
                                <div className="skill-item">Fitness</div>
                            </div>
                            </div>
                            <div className="contact">
                                <button className="btn btn-primary btn-vals btn-width">Book Now</button>
                                <button className="btn btn-outline-secondary btn-vals btn-width">Contact Me</button>
                            </div>
                        </div>
                        <div className="profile-disp">
                            <div className="profile-about">
                                <h2 data-aos="flip-up"><b>Jane Doe</b></h2>
                                <p>Hi, I am Jane Doe, your next door fitness instructor with just one goal - Make people fit and healthy.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas molestias aliquid, omnis neque est rem id a repellendus debitis dicta corrupti, enim expedita, suscipit ducimus possimus magni doloribus dolorem.</p>
                                <div className="social-footer">
                                <i class="ri-instagram-line"></i>
                                <i class="ri-facebook-fill"></i>
                                <i class="ri-youtube-fill"></i>
                                <i class="ri-twitter-fill"></i>
                                <i class="ri-linkedin-fill"></i>
                                <i class="ri-spotify-fill"></i>
                                </div>
                            </div>
                        </div>
                                <hr />
                        <div className="pannel-body">
                        <p><i class="ri-map-pin-2-fill"></i>
                            &nbsp; <b>Lives in</b> <span className="tags ml-2">New Delhi</span></p>
                            <p><i class="ri-chat-4-fill"></i>
                            &nbsp; <b>Speaks</b> <span className="tags mx-2">English</span>&nbsp;<span className="tags">Hindi</span>&nbsp;<span className="tags mx-2">Punjabi</span></p>
                        <div className="row pt-4">
                            <div className="col-lg-5 d-flex flex-column justify-content-around">
                                <h1>Check out my video about 30 min yoga for beginners</h1>
                                <a href="#" data-aos="fade-right" className="none-992"><h4><b>Contact me</b> <img src="assets/img/arrow-right.png" alt="" /></h4></a>
                            </div>
                            <div className="col-lg-7">
                                <div className="youtube">
                                    <img src="assets/img/youtube.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="subscription">
                            <p className="mx-3"><b>Subscribe to my profile and never miss another update from me.</b></p>
                            <form class="form-inline">
                                <div class="form-group col-sm-8 col-md-9">
                                    <input type="email" class="form-control w-100" id="email" placeholder="Enter your Email" />
                                </div>
                                <div className="form-group col-sm-3 col-md-2 px-2">
                                <button type="submit" class="w-100 btn btn-primary btn-vals mb-2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offerings">
                <div className="section-title">
                    <h2 data-aos="zoom-in">BROWSE ALL MY OFFERINGS</h2>
                </div>
                <div class="owl-carousel carousel-container">
                    <div className="carousel-slide">
                        <div className="position-relative h-100">
                        <img src="assets/img/yoga1.png" alt="" />
                        <div className="carousel-caption">
                            <button className="btn btn-sm btn-outline-success btn-vals text-white">Live</button> <br />
                            <p>Friday-Online class</p>
                            <p>Aug 8, 9:00 AM to 11:00 AM IST</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <div className="position-relative h-100">
                        <img src="assets/img/yoga2.png" alt="" />
                        <div className="carousel-caption">
                            <button className="btn btn-sm btn-outline-success text-white">Live</button> <br />
                            <p>Friday-Online class</p>
                            <p>Aug 8, 9:00 AM to 11:00 AM IST</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <div className="position-relative h-100">
                        <img src="assets/img/yoga3.png" alt="" />
                        <div className="carousel-caption">
                            <button className="btn btn-sm btn-outline-success btn-vals text-white">Live</button><br />
                            <p>Online class</p>
                            <p>Mon-Fri, 9:00 AM to 11:00 AM IST</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-section">
                <div className="footer d-flex flex-wrap flex-row justify-content-between p-3">
                    <div className="footer-logo mb-2">
                        <span className="footer-logo align-bottom">Powered by </span><img src="assets/img/logo.png" alt="" />
                        <div className="social-footer w-100 text-white">
                            <i class="ri-instagram-line"></i>
                            <i class="ri-facebook-fill"></i>
                            <i class="ri-youtube-fill"></i>
                            <i class="ri-twitter-fill"></i>
                            <i class="ri-linkedin-fill"></i>
                        </div>
                    </div>
                    <div className="footer-info mb-2 text-white">
                        <p>&copy; Bread 2021 All rights reserved</p>
                        <p className="d-flex flex-row justify-content-between"><a href="#" className="mr-1 text-white">Terms</a> <a href="#" className="mx-1 text-white">Privacy</a> <a href="#" className="ml-1 text-white">About</a></p>
                    </div>

                </div>
            </section>
            </>
        )
    }
}
