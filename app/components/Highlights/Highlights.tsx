import React from 'react'
import HighlightsCard from './HighlightsCard';

const Highlights = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        {/* heading */}
        <h1 className="heading"> Match Highlights</h1>
        <div className="mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]">
            {/* cards */}
            <div>
                <HighlightsCard 
                image="/images/emirates.jpg" 
                title="ARSENAL BOTTLE LEAD !!" 
                date="August 30 2024" 
                />
            </div>
            <div>
                <HighlightsCard 
                image="/images/cup.jpg" 
                title="MANCITY GET 5TH EPL" 
                date="August 3 2024" 
                />
            </div>
            <div>
                <HighlightsCard 
                image="/images/rugby1.jpg" 
                title="WORLD HSBC SERIES 2024" 
                date="August 20 2024" 
                />
            </div>
            <div>
                <HighlightsCard 
                image="/images/chelsea.jpg" 
                title="ENZO TEST ON FIRST GAME" 
                date="August 17 2024" 
                />
            </div>
        </div>
    </div>
  )
}

export default Highlights;