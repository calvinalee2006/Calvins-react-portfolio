import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f] '>
            {/*Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className="text-pink-600 sm:text-7xl font-bold text-[#ccd6f6]">Hello, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Calvin Lee</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> I am a software developer </h2>
                <p className="text-[#8892b0] py-4 max-w-[700]">
                    A self-taught developer that has used coding languages such as HTML, CSS, JavaScript with React,
                    Bootstrap, and Node frameworks to build projects and applications. Quick to adapt to changes in the
                    technological community and will work well as an individual or with teams to produce
                    working applications. A detailed-oriented developer with a background as a mechanical
                    technician, that is accustomed to working excessively to achieve the optimal result application
                    for the customer.</p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                        <Link to="work" smooth={true} duration={500}>
                            View Work
                        </Link>
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home
