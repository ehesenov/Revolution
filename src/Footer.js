import React from 'react'
import {SocialIcon} from 'react-social-icons'

function Footer(props) {
    return (
        <div className="footer">
            <div className="left">
                <p style={{display:"inline"}}>Created by</p>
             <b><p style={{display:"inline"}}> Elshan Hasanov</p></b>
             <p>Tel:(+994)55 9180706</p>
            </div>
            <div className="right">
            <SocialIcon network="twitter" bgColor="transparent" fgColor="white" style={{ width:"40px",height:"40px"}}/>
            <SocialIcon network="facebook" bgColor="transparent" fgColor="white" style={{ width:"40px",height:"40px"}}/>
            <SocialIcon network="pinterest" bgColor="transparent" fgColor="white" style={{ width:"40px",height:"40px"}}/>
            <SocialIcon network="instagram" bgColor="transparent" fgColor="white" style={{ width:"40px",height:"40px"}}/>
            </div>
        </div>
    )
}

export default Footer
