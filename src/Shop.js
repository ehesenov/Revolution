import { faStar } from '@fortawesome/free-solid-svg-icons'
import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'


function Shop(props) {
  const selector=useSelector(state=>state.paltarReducer)
  const dispatch=useDispatch()
  const[state,setState]=useState([])
  console.log(selector)


  const addToCard = (index) => {
      console.log(index)
    dispatch({type:"CARD_DATA",payload:index})
  }

    return (
        <div className="clothes">
            <a name="shop-btn"></a>
            {selector.map((index,key)=>
            <div className="price "style={{display:"inline-block"}} key={key}>
                <Link to={`/${index.id}`}>
             <img src={index.url} />
             </Link>
             <div style={{overflow: "hidden"}}>
                 <p style={{display: "inline", fontSize:"20px"}}><b>{index.dressName}</b> </p>
                 <p style={{display: "inline"}}>{index.price}AZN  </p>
                 <FontAwesomeIcon style={{fontSize:"20px",color:"yellow"}} icon={faStar}/>
                 <FontAwesomeIcon style={{fontSize:"20px",color:"yellow"}} icon={faStar}/>
                 <FontAwesomeIcon style={{fontSize:"20px",color:"yellow"}} icon={faStar}/>
                 <FontAwesomeIcon style={{fontSize:"20px",color:"yellow"}} icon={faStar}/>
                 <FontAwesomeIcon style={{fontSize:"20px",color:"yellow"}} icon={faStar}/>
                 
            </div><br></br>
           <div className="add-card" >
               {/* <h3>Add to Card</h3> */}
               
               <button onClick={() => addToCard(index)}>Add to Card</button>
           </div>
            </div>)
            }
        </div>
    )
}

export default Shop
