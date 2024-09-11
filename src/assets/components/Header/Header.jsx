import React from 'react'
import "./header.css"
import netflix from "../../images/logo.png"
 import SearchIcon from '@mui/icons-material/Search';
 import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
 import AccountBoxIcon from '@mui/icons-material/AccountBox';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>
    <div className='header_container'>
      <div className='header_left'>
      <ul>
        {<li><img src={netflix} alt="netflix logo"width="100"/></li>}
      
      <li>Home</li>
      <li>Movies</li>
      <li>Latest</li>
      <li>MyList</li>
      <li>Browse by Languages</li>
      
        </ul>
      </div>
     
      </div>
      <div className='header_right'>
        <ul>
          <li><SearchIcon/></li>
          <li><CircleNotificationsIcon/></li>
          <li><AccountBoxIcon/></li>
          <li><ArrowDropDownIcon/></li>
          

        </ul>
        
      </div>

</div>
  )
}

export default Header
