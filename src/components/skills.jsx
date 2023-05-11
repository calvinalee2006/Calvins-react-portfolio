import React from 'react'
import Bootstrap from "../assets/Bootstrap.png";
import CSS from "../assets/CSS.png";
import Github from "../assets/Github.png";
import HTML from "../assets/HTML.png";
import JavaScript from "../assets/JavaScript.png";
import Node from "../assets/Node.png";
import ReactImage from "../assets/React.png";
import Tailwind from "../assets/tailwind.png";


const skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>These are the technologies I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML logo" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="CSS logo" />
                            <p className='my-4'>CSS</p>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript logo" />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={ReactImage} alt="React logo" />
                            <p className='my-4'>REACT</p>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap logo" />
                            <p className='my-4'>BOOTSTRAP</p>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind logo" />
                            <p className='my-4'>TAILWIND</p>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Node} alt="Node logo" />
                            <p className='my-4'>NODE</p>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Github} alt="Github logo" />
                            <p className='my-4'>GITHUB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skills