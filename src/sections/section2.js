/**
 * Created by hackerex on 2/4/18.
 */

import React,{Component} from 'react';
import './section2.css'
import '../../node_modules/font-awesome/css/font-awesome.css';

import {Container,Row,Col} from 'react-grid-system'




class Section2 extends Component{

    render(){
        return (
            <section id="about" className="parallax">
                <div style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
                    <div className="row section-header">
                        <div className="col text-center"><h2 className="underline">About Us</h2></div>
                    </div>
                    <Row>

                        <Col md={4} style={{marginLeft:'20px'}} className="text-center">
                            <img src={require('../img/pres.jpg')} style={{width:'500px'}}/>
                        </Col>
                        <Col md={8} style={{marginLeft:'20px'}} className="text-center">
                            <p className="section-body-head">
                                We believe in connecting the dots.
                            </p>
                            <p className="section-body-body">
                                We are here to accelarate your work, leave the developement of your apps to us and secure your precious time and focus to other important things.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} style={{marginLeft:'20px'}} className="text-center">
                            <p className="section-body-head">
                                Your Potential,Our Passion
                            </p>
                            <p className="section-body-body">
                                Fueling the development part of your business
                            </p>
                        </Col>
                        <Col md={4} style={{marginLeft:'20px'}} className="text-center image-box">
                            <img src={require('../img/ottawa.jpg')} style={{width:'500px'}}/>
                        </Col>

                    </Row>
                </div>
            </section>
            )
    }
}

export default Section2;