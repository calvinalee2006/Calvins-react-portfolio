import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000] w-full grid grid-cols-2 gap-8">
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello! My name is Calvin and I am excited that you have visited my page.
                            Please take a look around and get to know me. </p>
                    </div>
                    <div>
                        <p>
                            A self-educated web developer that also has a background as an automotive mechanic.
                            Being a mechanic and learning web development are very similar and
                            present the same challenges when it comes to keeping up with the industry. Learning a new language
                            or framework is the equivalent of learning about a vehicles mechanical or electrical system.
                            Diagnosis is the biggest similarity for both professions, when presented with a new problem a lot of research
                            and trial and error are performed to present the best possible output for that specific situation. <br />
                            As passionate developer, I would like to use my previous skills of research, troubleshooting, and diagnosis to
                            help build proper web applications and continue educating myself in an industry that is steadily growing. Being able
                            to help a development team with a project, would be a beneficial experience for myself since it would provide new information
                            to consume, sharpen my developer skills, and would assist a development team in a successful application build.





                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
