import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='border-t mx-auto w-[80%]'>
                <footer className='flex p-5 justify-between'>
                    <div className='p-4'>
                        <h1 className='text-xl font-bold'>Services</h1>
                        <ul className='font-semibold'>
                            <li>Services</li>
                            <li>Services</li>
                            <li>Services</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className='p-4'>
                        <h1 className='text-xl font-bold'>Company</h1>
                        <ul className='font-semibold'>
                            <li>Services</li>
                            <li>Services</li>
                            <li>Services</li>
                            
                        </ul>
                    </div>
                    <div className='p-4'>
                        <h1 className='text-xl font-bold'>Blog</h1>
                        <ul className='font-semibold'>
                            <li>Services</li>
                            <li>Services</li>
                            
                            
                        </ul>
                    </div>
                    <div className='p-4 w-[45%]'>
                        <h1 className='text-xl font-bold uppercase'>NewsLetter</h1>
                        
                        <div className="py-4">
                            <label htmlFor="">Enter your Email address.</label> <br/>
                            <div className='relative'>
                            <input className='p-3 border rounded-lg pr-16 w-[100%]' type="text" placeholder='username@site.com' />
                            <button className='text-white absolute top-0 right-0 border rounded-l-none bg-indigo-500 p-3 font-semibold rounded-lg' type="button">Subscribe</button>
                            </div>
                        </div>
                        
                    </div>
                </footer>

                <p className='text-center'>#All rights reserved. @Mahmud-2023</p>




                {/* <h1>Mahmud.</h1>
                <ul className='flex p-3'>
                    <li className='py-1 px-4 border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'><Link href={"/"}>Home</Link></li>
                    <li className='py-1 px-4 border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'><Link href={"/contact"}>Contact</Link></li>
                    <li className='py-1 px-4 border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'><Link href={"/pages"}>Pages</Link></li>
                    <li className='py-1 px-4 border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'><Link href={"/about"}>About</Link></li>
                </ul> */}
            </div>
        </div>
    );
};

export default Footer;