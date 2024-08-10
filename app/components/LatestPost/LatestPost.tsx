import React from 'react'
import PostCard from './PostCard';

const LatestPost = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        {/* heading */}
        <h1 className="heading">Latest Post</h1>
        <div className="w-[80%] mx-auto mt-[3rem]">
            {/* postcard */}
            <div>
                <PostCard 
                title=" THE PREMIER LEAGUE: WHAT TO EXPECT?"
                image="/images/ball.jpg"
                date=" 1 September, 2024" 
                />
            </div>
            <div>
                <PostCard 
                title=" THE PREMIER LEAGUE: WHAT TO EXPECT?"
                image="/images/ball.jpg"
                date=" 1 September, 2024" 
                />
            </div>
            <div>
                <PostCard 
                title=" THE PREMIER LEAGUE: WHAT TO EXPECT?"
                image="/images/ball.jpg"
                date=" 1 September, 2024" 
                />
            </div>
            <div>
                <PostCard 
                title=" THE PREMIER LEAGUE: WHAT TO EXPECT?"
                image="/images/ball.jpg"
                date=" 1 September, 2024" 
                />
            </div>
        </div>
    </div>
  )
}

export default LatestPost;