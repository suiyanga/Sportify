import React from 'react'
import NewsCard from '../components/Helper/NewsCard';

const Trending = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        {/* heading */}
        <h1 className="heading">Trending News</h1>
        {/* card div */}
        <div className="pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
            {/* card 1 */}
            <div>
                <NewsCard 
                image="/images/field.jpg" 
                date=" August 1, 2024" 
                title="Premier League Season Starting Soon" 
                height="h-[300px]"  
                />
            </div>
             {/* card 2 */}
             <div>
                <NewsCard 
                image="/images/madrid.jpg" 
                date=" July 29, 2024" 
                title="Will Mbappe Have an Impact in Real Madrid" 
                height="h-[300px]"  
                />
            </div>
             {/* card 3 */}
             <div>
                <NewsCard 
                image="/images/blue.jpg" 
                date=" August 18, 2024" 
                title="Bleeding Blue: Manchester City vs Chelsea" 
                height="h-[300px]"  
                />
            </div>
             {/* card 4 */}
             <div>
                <NewsCard 
                image="/images/fans.jpg" 
                date=" August 5, 2024" 
                title="Paris Olympics(Football): France onto the Semi-Finals" 
                height="h-[300px]"  
                />
            </div>
        </div>
    </div>
  )
}

export default Trending;