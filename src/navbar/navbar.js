/**
 * Created by hackerex on 2/4/18.
 */

import React,{Component} from 'react';
import './navbar.css'
import $ from 'jquery'


class CustomNavbar extends Component{

    componentDidMount(){

        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else {
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });



        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });
    }

    scrollHandler(hrefValue){
        var anchor=$("#"+hrefValue);
        //$('body').animate({scrollTop:anchor.offsetTop},5000);

        var positions=(anchor.offset());
        if(positions!=undefined) {
            console.log(positions);
            window.scrollTo(positions.left,positions.top);
            //$('body').animate({scrollTop:anchor.offsetTop},5000);
        }

    }


    render(){
        return (
            <div>
                    <nav id="navbar" >
                        <div className="nav-wrapper">

                            <div className="logo">

                                <i className="fas fa-eye-slash"></i> Appstray
                            </div>


                            <ul id="menu">
                                <li><a href="#home">Home</a></li>
                                   <li><a href="#services" onClick={this.scrollHandler('services')}>Services</a></li>
                                   <li><a href="#abouts" onClick={this.scrollHandler('about')}>About</a></li>
                                   <li><a href="#contacts">Contact</a></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="menuIcon">
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                    </div>


                    <div className="overlay-menu">
                    <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>

            </div>

        )
    }
}


export default CustomNavbar;