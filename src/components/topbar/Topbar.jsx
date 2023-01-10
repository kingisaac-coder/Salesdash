import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
  return (
      <div className='topBar'>
          <div className="topBarWrapper">
              <div className="topBarLeft">
                  <span className='logo'>DIGIAPP</span>
              </div>
              <div className="topBarRight">
                  <div className="topBarIconContainer">
                      <NotificationsIcon />
                      <span className='topIconBadge'>2</span>
                  </div>
                  <div className="topBarIconContainer">
                      <LanguageIcon />
                      <span className='topIconBadge'>2</span>
                  </div>
                  <div className="topBarIconContainer">
                      <SettingsIcon />
                      <span className='topIconBadge'>2</span>
                  </div>
                  <img src="https://i.pinimg.com/236x/33/73/12/337312f92316295ed5ecbef7ee387e28.jpg" alt="woman" className="topAvatar"/>
              </div>
          </div>
        </div>
  )
}

export default Topbar