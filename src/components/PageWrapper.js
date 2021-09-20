import React, { Component } from 'react';
import {Link, withRouter} from'react-router-dom';

class PageWrapper extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    mobileNavIcon = () =>{
        $("body").toggleClass("mobile-nav-active");
        $('#mobile-nav-icon').toggleClass("ri-menu-line ri-close-fill")
        $('.mobile-nav-overly').toggle();
    }
    render() {
        return (
            <div>
                <button type="button" className="mobile-nav-toggle d-lg-none" onClick={this.mobileNavIcon}><i id="mobile-nav-icon" className="ri-menu-line"></i></button>
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">

                    <h1 className="logo mr-auto"><Link to="/">bre.ad/jane</Link></h1>

                    
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                        <li><Link to="/">Offerings</Link></li>
                        <li><Link to="/">Other Links</Link></li>
                        <li><Link to="/">Testimonials</Link></li>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/">Contact me</Link></li>
                        </ul>
                    </nav>
                    <button className="btn btn-outline-light btn-vals btn-sm mx-2 btn-nav">Book Trial</button>


                    </div>
                </header>
                <nav className="mobile-nav d-lg-none">
                    <ul>
                        <li><Link onClick={this.mobileNavIcon} to="/">Offerings</Link></li>
                        <li><Link onClick={this.mobileNavIcon} to="/">Other Links</Link></li>
                        <li><Link onClick={this.mobileNavIcon} to="/">Testimonials</Link></li>
                        <li><Link onClick={this.mobileNavIcon} to="/">Portfolio</Link></li>
                        <li><Link onClick={this.mobileNavIcon} to="/">Contact me</Link></li>
                    </ul>
                        <button className="btn btn-outline-secondary btn-vals my-2 max-width">Book Trial</button>
                </nav>
                {this.props.children}
            </div>

        )
    }
}

export default withRouter(PageWrapper)