import React from 'react'
import '../Home.css'
import Zoom from 'react-reveal/Zoom';

function Menu({menuItem}) {
    return (
        <div className="row grid">
            {
                menuItem.map((item) =>{
                    return (
                       <Zoom>
                            <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                        <div className="our-project">
                            <div className="img">
                                <a className="test-popup-link" href="">
                                <img src={item.image} alt="" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase name">{item.title}</h4>
                                <span className="text-secondary description">{item.description}</span><br/>
                                <span className="text-secondary tool">{item.tool}</span>
                            </div>
                        </div>
                        </div>
                        </Zoom>
                    )
                })
            }
        </div>
    )
}

export default Menu;