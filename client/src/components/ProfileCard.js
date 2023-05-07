import React from 'react'
import './ProfileCard.css';
import coverPhoto from '../images/cover.jpg';
import profilePhoto from '../images/profile.jpg';
function ProfileCard() {
  return (
    <div className='pc_container'>
      <div className="photo_area">
        <div className="cover_photo">
          <img src={coverPhoto} alt="" />
        </div>
        <div className="profile_photo">
          <img src={profilePhoto} alt="" />
        </div>
      </div>
      <div className="pc_contant">
        <h3>ROBIUL HOQUE <br /><span>web developer || freelancer</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quae. Lorem ipsum dolor sit amet.</p>

      </div>
      <div className="profile_info">
        <h4>256 <br /><span>Post</span></h4>
        <h4 className='followers'>2.6K <br /><span>Followers</span></h4>
        <h4>25 <br /><span>Following</span></h4>
      </div>
      <ul className='options'>
        <li>🏠 Feed</li>
        <li>👨‍🦰 Connection</li>
        <li>🌐 Letest News</li>
        <li>⏱️ Events</li>
        <li>🎗️ Groups</li>
        <li>🔔 Notification</li>
        <li>⚙️ Settings</li>
      </ul>
      <a className='view_porfile' href="#">View profile</a>
    </div>
  )
}

export default ProfileCard