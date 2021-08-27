import React from 'react'

function Offers() {
    return (
        <div>
            
                 
                  <div class="discount-label red"> <span>-10%</span> </div>
                  <img  style={{marginLeft:"200px",float:"left",width:"40%",height:"650px",zIndex:"-1"}}src={process.env.PUBLIC_URL + '/bg2.jpg'} />  
                  <div style={{textIndent:"-400px"}}>
                   <h1 style={{color:"black",fontFamily:'Calibri',fontSize:"60px",marginLeft:"-500px",textIndent:"-390px"}}>MODIST</h1>
                   <h1 style={{color:"black",fontFamily:'Calibri',fontSize:"60px",marginTop:"-60px",}}>ONLINE</h1>
                   <h1 style={{color:"black",fontFamily:'Calibri',fontSize:"60px",marginTop:"-60px",textIndent:"-210px"}}>FASHION SHOP</h1>
                   </div>
                   <p className="paragraph"><s>
                       There is no any stock
                       </s>
                   </p>
                   <p className="paragraph">
                       New models came
                   </p>
                   <p className="paragraph">
                       Choose which you want
                   </p>
                   
            </div>
   
    )
}

export default Offers
