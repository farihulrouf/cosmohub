import React from 'react'
import { dataEvent } from '../components/data/dataContent'
import CardEvent from '../components/CardEvent'
import BgPages from '../components/BgPages'
import Button from '../components/Button'
const Event = () => {
    const title = "Cool-off and relax"
    const desc = "Open 24/7, Cosmohub offers flexe necessary amenities for a"
   
    return (
        <React.Fragment>
        <BgPages
            title={title}
            desc={desc}
        />
        <div className="bg-black font-palo">
                <div className="max-w-screen-xl mx-auto relative lg:min-h-[550px] sm:min-h-[1000px] min-h-[1200px]">
                    <div className="w-full md:-top-44 sm:-top-56 -top-80 absolute p-4">
                        <div className="grid grid-cols-12 gap-x-4 sm:gap-y-16 gap-4">
                           {dataEvent.map((item, index) => ( 
                                <div key={index} className="lg:col-span-4 sm:col-span-6 col-span-12">
                                    <CardEvent  item={item} />
                                </div>
                            ))}
                         </div>
                         <div className="flex justify-center pt-12">
                            <Button>view all</Button>
                         </div>
                    </div>
                    
                </div>
    
                <div className="max-w-screen-xl mx-auto p-4">
                    
                    <div className="py-4 p-4 grid grid-cols-12 md:gap-y-20 gap-y-8 gap-x-4">
                        <div className="lg:col-span-7 md:col-span-6 col-span-12">
                             <h5 className="text-teal-300 text-xl py-2 py-1 uppercase">Impress</h5>
                             <h2 className="text-white md:max-w-[510px] w-full font-semibold text-4xl md:text-5xl py-2">Flexible and Creative Event Spaces</h2>  
                             <p className="text-white md:py-8 py-3">Ready to impress your guests with the perfect venue?</p>
                             <p className="text-white max-w-[450px]">Book one of our event spaces for your next seminar, conference, product launch, company dinner or networking event. With the flexibility of changing the set-up to your liking and having the expert advice from our preferred suppliers, either for catering, AV or entertainment, we can truly tailor our space to your needs.</p>
                             <p className="text-white md:py-8 py-3 max-w-[400px]">With a variety of spaces, formats and locations, you can rest assured we have the perfect space for your needs</p>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6 col-span-12">
                            <img className="w-full" src="/img/events/event_content1.png" />
                        </div>
                    
                        <div className="lg:col-span-7 md:col-span-6 col-span-12">
                            <div className="md:max-w-[524px] w-full">
                              <img className="w-full h-auto" src="/img/events/event_content2.png" />
                            </div>
                        </div>
                        <div className="lg:col-span-5 md:col-span-6 col-span-12">
                             <h5 className="text-teal-300 text-xl py-2 py-1 uppercase">Impress</h5>
                             <h2 className="text-white md:max-w-[510px] w-full font-semibold text-4xl md:text-5xl py-2">Breakout Spaces</h2>  
                             <p className="text-white max-w-[450px] py-8">
                                If you want to organize an event open to the CosmoHub community and to the public, our breakout areas are the ideal space. Open, informal and fun, they capture the energy of the entire community and naturally attract members throughout the day.
                            </p>
                             <p className="text-white py-2 max-w-[400px]">Breakout spaces are ideal for hosting presentations, networking sessions and in general events where you want your attendees to mingle and connect.</p>
                        </div>
                        <div className="lg:col-span-7 md:col-span-6 col-span-12">
                             <h5 className="text-teal-300 text-xl py-2 py-1 uppercase">Impress</h5>
                             <h2 className="text-white md:max-w-[510px] w-full font-semibold text-4xl md:text-5xl py-2">Meeting Rooms</h2>  
                             <p className="text-white py-8 max-w-[450px]">We design our meeting rooms to offer a variety of sizes, layouts, moods and vibes. Always featuring the latest AV equipment, you can easily book a meeting room using the CosmoHub App.</p>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6 col-span-12">
                             <img className="w-full" src="/img/events/event_content3.png" />
                        </div>

                        <div className="lg:col-span-7 md:col-span-6 col-span-12">
                            <div className="md:max-w-[524px] w-full">
                              <img className="w-full h-auto" src="/img/events/event_content4.png" />
                            </div>
                        </div>
                        <div className="lg:col-span-5 md:col-span-6 col-span-12">
                            <h5 className="text-teal-300 text-xl py-2 py-1 uppercase">Impress</h5>
                             <h2 className="text-white md:max-w-[510px] w-full font-semibold text-4xl md:text-5xl py-2">Multi-Functional Rooms</h2>  
                             <p className="text-white max-w-[450px] py-8">
                             By focusing on the efficient use of space, our multi-functional rooms feel larger, more versatile and highly functional.
                            </p>
                        </div>
                
                    </div>
                    
                </div>   
               
        </div>
        </React.Fragment>
    )
}

export default Event