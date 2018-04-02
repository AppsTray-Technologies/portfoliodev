/**
 * Created by hackerex on 2/4/18.
 */

import React,{Component} from 'react'
import {Container,Row,Col} from 'react-grid-system'


class Section1 extends Component{
    render()
    {
        return(
            <section className="section-padding pdb-70 bg-overlay" id="counter">
                <Container>
                    <Row>

                        <Col lg={3} md={6} className="text-center">
                            <div className="single-fun-fact">
                                <h2><span className="counter-value" data-count="02">2</span>+</h2>
                                <p>Years Experience</p>
                            </div>
                        </Col>

                        <Col lg={3} md={6} className="text-center">
                            <div className="single-fun-fact">
                                <h2><span className="counter-value" data-count="900">900</span>+</h2>
                                <p>Happy Clients</p>
                            </div>
                        </Col>

                        <Col lg={3} md={6} className="text-center">
                            <div className="single-fun-fact">
                                <h2><span className="counter-value" data-count="09">9</span>+</h2>
                                <p>Awards Win</p>
                            </div>
                        </Col>

                        <Col lg={3} md={6} className="text-center">
                            <div className="single-fun-fact">
                                <h2><span className="counter-value" data-count="620">620</span>+</h2>
                                <p>Cups of Coffee</p>
                            </div>
                        </Col>


                    </Row>
                </Container>

            </section>
        )
    }
}


export  default Section1;


