import React from 'react'
import './Story.css';
import coverPhoto from '../images/cover.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Story() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <Carousel className='story_section' responsive={responsive}>
            <div class="story add_story">
                <i class="fa-solid fa-plus story_icon"></i>
                <span class="story-caption">add post</span>
            </div>
            <div class="story">
                <img src={coverPhoto} alt="Story 2" class="story-image" />
                <span class="story-caption">Story 2</span>
            </div>
            <div class="story">
                <img src={coverPhoto} alt="Story 3" class="story-image" />
                <span class="story-caption">Story 3</span>
            </div>
            <div class="story">
                <img src={coverPhoto} alt="Story 3" class="story-image" />
                <span class="story-caption">Story 3</span>
            </div>
            <div class="story">
                <img src={coverPhoto} alt="Story 3" class="story-image" />
                <span class="story-caption">Story 3</span>
            </div>
        </Carousel>
    )
}

export default Story