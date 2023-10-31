import React from 'react'
import buyplan from '../images/buyplan.png'
import gift from '../images/gift.png'
import proimg from '../images/proimg.png'
import notification from '../images/notification.png'
import langimg from "../images/langimg.png"

function Header() {
  return (
    <div className='d-flex justify-content-end topbar'>

     
      <div style={{fontSize:"12px",marginTop:"10px",marginRight:"5px"}}>Your plan expires in 3 days</div>
      <div ><img  style={{marginLeft:"10px"}}src={buyplan} alt="img"/></div>
      <div ><img src={gift} style={{marginLeft:"10px",marginRight:"10px"}}alt="img"/></div>
      <div ><img src={notification}  style={{marginLeft:"10px",marginRight:"10px"}} alt="img"/></div>
      <div ><img src={proimg}  style={{marginLeft:"10px",marginRight:"10px",height:"40px",width:"40px",borderRadius:"35px"}} alt="img"/></div>
      <div style={{fontSize:"12px",marginTop:"10px",marginRight:"5px"}}>Mukund cake shop</div>
      <div ><img src={langimg}  style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} alt="img"/></div>
      
    </div>
  )
}

export default Header