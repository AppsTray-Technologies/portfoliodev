import React, { Component } from 'react';
import './App.css';
import Paticles from 'react-particles-js'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap';



class App extends Component {


  render() {
    return (
        <div>
            <div class="mainCanvasBack">
                <section class="section ">
                    <Paticles params={particleParams}/>
                </section>
            </div>
            <div class="section">
            </div>
            <div class="section">
            </div>
            <div class="section">
            </div>
        </div>
    );
  }
}

export default App;


let particleParams={
    particles:{
        number:{
            value:110,
            density:{
                enable:true,
                value_area:800
            }
        },color:{
            value:"#0083ca"
        },shape:{
            type:"circle",
            stroke:{
                width:0,
                color:"#fff"
            },
            polygon:{
                nb_sides:2
            },image:{
                width:100,
                height:100
            }
        },
        opacity:{
            value:0.5,
            random:false,
            anim:{
                enable:false,
                speed:1,
                opacity_min:0.1,
                sync:false
            }
        },
        size:{
            value:3,
            random:true,
            anim:{
                enable:false,
                speed:40,
                size_min:0.1,
                sync:false
            }
        },
        line_linked:{
            enable:true,
            distance:100,
            color:"#fff",
            opacity:0.8,
            width:1
        },
        move:{
            enable:true,
            speed:6,
            direction:"none",
            random:false,
            straight:false,
            out_mode:"out",
            bounce:false,
            attract:{
                enable:false,
                rotateX:600,
                rotateY:1200
            }
        }
    },
    interactivity:{
        detect_on:"canvas",
        events:{
            onhover:{
                enable:true,
                mode:"grab",
                color:"#f29999"
            },
            onclick:{
                enable:true,
                mode:"bubble"
            },
            resize:true
        },
        modes:{
            grab:{
                distance:300,
                line_linked:{
                    opacity:1
                }
            },
            bubble:{
                distance:400,
                size:4,
                duration:2,
                opacity:8,
                speed:4
            },
            repulse:{
                distance:200,
                duration:0.8,
                speed:5
            },
            push:{
                particles_nb:4
            },
            remove:{
                particles_nb:2
            }
        }
    },
    retina_detect:true

}