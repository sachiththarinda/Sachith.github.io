import React from 'react'
import '../Home.css'

function Button({button, filter}) {
    return (
        <div className="site-main">
        <div className="button-group">
            {
                button.map((me, i)=>{
                    return( 
                    <button type="button" onClick={()=> filter(me)} className="active">{me}</button>
                    )
                })
            }
        </div></div>
    )
}

export default Button;