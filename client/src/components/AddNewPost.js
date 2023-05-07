import React from 'react'
import './AddNewPost.css';
import profile from '../images/profile.jpg'
function AddNewPost() {
  return (
    <div className='post_container'>
        <div className="profile_input">
            <img className='post_profile' src={profile} alt="" />
            <textarea className='post_text' placeholder='Share your thoughts' name="" id="" cols="50" rows="4"></textarea>
        </div>
        <div className="post_item">
        <i class="fa-solid fa-image photo"> <span>Photo</span></i>
        <i class="fa-solid fa-video video"> <span>Video</span></i>
        <i class="fa-solid fa-calendar event"> <span>Event</span></i>
        <i class="fa-solid fa-face-smile felling"> <span>Felling</span></i>
        </div>
        {/* <button className='post_btn'>Post</button> */}
    </div>
  )
}

export default AddNewPost