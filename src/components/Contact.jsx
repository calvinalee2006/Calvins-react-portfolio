import React from 'react';

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/a2d0b408-8159-47da-a170-465940d51673" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or email me at Calvinalee2006@hotmail.com</p>
                    <p className='text-greay-300 py-4'></p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name="name" />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="email" />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder="Message"></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's talk!</button>
            </form>
        </div>
    )
}

export default Contact
