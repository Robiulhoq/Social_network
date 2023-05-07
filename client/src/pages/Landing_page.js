import React from 'react'
import './Landing_page.css';
import ProfileCard from '../components/ProfileCard';
import Follows from '../components/Follows';
import Story from '../components/Story';
import AddNewPost from '../components/AddNewPost';
import Allpost from '../components/Allpost';
import Users from '../components/Users';
function Landing_page() {
    return (
        <div class="grid-container">
            <div class="item1">
                <Story/>
                <AddNewPost/>
                <Allpost/>
                <Allpost/>
                <Allpost/>
            </div>
            <div class="item2"><ProfileCard /></div>
            <div class="item5"><Users/></div>
        </div>
    )
}

export default Landing_page