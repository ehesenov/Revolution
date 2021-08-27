import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Font, { Text } from 'react-font'
import { SocialIcon } from 'react-social-icons'
import {ExternalLink} from 'react-external-link'



function Header(props) {
    return (
        <div >
            <a name="home-btn"></a>
        <div className="banner">
            <div className="left">
            <div class="typewriter">
            <Text family='Parisienne' style={{ fontSize: 50, margin: 0 }} onLoad={() => console.log('loaded Monoton')}>
        Revolution Design
      </Text>
                </div>
            </div>
            <div className="right">
               <ExternalLink style={{}} href="https://twitter.com">
                   <SocialIcon  network="twitter" bgColor="transparent" fgColor="black" style={{ marginTop:"0px",width:"40px",height:"40px"}}/>
                    </ExternalLink>
            <SocialIcon network="facebook" bgColor="transparent" fgColor="black" style={{ marginTop:"0px",width:"40px",height:"40px"}}/>
            <SocialIcon network="pinterest" bgColor="transparent" fgColor="black" style={{ marginTop:"0px",width:"40px",height:"40px"}}/>
            <SocialIcon network="instagram" bgColor="transparent" fgColor="black" style={{ marginTop:"0px",width:"40px",height:"40px"}}/>
              </div>         
        </div>
        <img className="background-img" src={process.env.PUBLIC_URL + '/bg.jpg'} />
        </div>
    )
}

export default Header
