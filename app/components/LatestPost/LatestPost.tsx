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
                image="/images/balls.jpg"
                date=" 1 September, 2024" 
                />
            </div>
            <div>
                <PostCard 
                title=" PARIS OLYMPICS LAST DAY"
                image="/images/athletes.jpg"
                date=" 1 September, 2024" 
                />
            </div>
            <div>
                <PostCard 
                title=" MANCITY VS MAN UNITED"
                image="/images/stadium.jpg"
                date=" 1 September, 2024" 
                />
            </div>
            <div>
                <PostCard 
                title=" NETO TO CHELSEA !"
                image="/images/chelsea.jpg"
                date=" 1 September, 2024" 
                />
            </div>
        </div>
    </div>
  )
}

export default LatestPost;