import React from 'react';
import Fitness from '../assets/fitnessapp.png';
import Play from '../assets/playPlace.png';
import Clock from '../assets/digitalClock.png';
import List from '../assets/todo.png';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div classname='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>//Hey check out my work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div
                        style={{ backgroundImage: `url(${Fitness})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >


                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white text-center'>
                                React Fitness Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://my-exercise-app.vercel.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/calvinalee2006/my-exercise-app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Play})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >


                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white text-center'>
                                Mias theme park
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://calvinalee2006.github.io/Mia-s-Play-palace/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/calvinalee2006/Mia-s-Play-palace">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Clock})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white text-center'>
                                Digital Clock
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://calvinalee2006.github.io/digital-clock/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/calvinalee2006/digital-clock">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${List})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white text-center'>
                                To-do List
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://calvinalee2006.github.io/to-do/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/calvinalee2006/to-do">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work
