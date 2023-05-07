import React from 'react'
import './Allpost.css';
import profile from '../images/profile.jpg';
import profile2 from '../images/profile2.jpg';
import photo from '../images/post1.jpg';
function Allpost() {
  return (
    <div className='all_post_container'>
      <div className="user_info">
        <img src={profile} alt="" />
        <h4>ROBIUL HOQUE <br /> <span>Web developer at house</span> </h4>

      </div>
      <p className='caption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nihil!</p>
      <img className='post_img' src={photo} alt="" />
      <div className="interact_icon">
        <div>
          <i class="fa-solid fa-thumbs-up like"> <span>Liked(10)</span></i>
          <i className="fa fa-comment"><span>Comment(5)</span></i>
        </div>
        <i className="fa fa-share"><span>Share(2)</span></i>
      </div>
      <div className="new_comment">
        <img src={profile} alt="" />
        <input type="text" placeholder='Add new comment....'/>
      </div>
      <div className="comment user_info">
        <img src={profile2} alt="" />
        <h4>ROBIUL HOQUE <br /> <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor maiores quasi ratione, dignissimos odio eaque obcaecati fuga quisquam voluptate provident, enim repellendus eligendi doloribus inventore?</span> </h4>
      </div>
      <p className='more_comment'>...Load more comment</p>
    </div>
  )
}

export default Allpost