import React from 'react'
import NewsCard from '../Helper/NewsCard';
import SmallNewsCard from '../Helper/SmallNewsCard';

const Latest = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        {/* heading */}
        <h1 className="heading">Latest News</h1>
        <div className="w-[80%] mx-auto pt-[4rem] grid grid-cols-1 lg:grid-cols-5 gap-[2rem]">
            {/* big card */}
            <div className="col-span-3">
                <NewsCard 
                image="/images/football2.jpg" 
                date="August 7, 2024" 
                title="New transfers this season" 
                height="h-[400px]" />
            </div>
            {/* small card */}
            <div className="col-span-2">
                {/* small card */}
                <div>
                    <SmallNewsCard 
                    image="/images/blue.jpg" 
                    date="August 15, 2024" 
                    title="Fantasy Premier League is back!" 
                    />
                </div>
                <div className="mt-[1.4rem] mb-[1.4rem]">
                    <SmallNewsCard 
                    image="/images/fans.jpg" 
                    date="August 10, 2024" 
                    title="Paris Olympics half way" 
                    />
                </div>
                <div>
                    <SmallNewsCard 
                    image="/images/madrid.jpg" 
                    date="August 20, 2024" 
                    title="Hansi Flick in Spain. Thoughts?"  
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest;