import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="container mx-auto bg-white rounded-lg shadow flex h-[600px]">
                <div className="left border-r p-10 my-auto bg-white">
                    <div className='text-center mb-14 border-b'>
                        <h1 className='text-4xl uppercase font-semibold p-1'>Contact us</h1>
                        <p className='pb-2 text-slate-500'>Get in touch and let us know how we can help</p>
                    </div>
                    <div className='p-2'>
                        <input type="text" name="Name" placeholder='Name' id="" className='p-2 border-b mb-4 mr-4 ' />
                        <input type="email" name="E-mail" placeholder='E-mail' className='p-2 border-b ' id="" />  <br />
                        <textarea name="message" placeholder='Your message' className='p-2 border-b mb-2 w-full' id="" cols="" rows=""></textarea><br/>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="hhh"> Accept our <Link className='text-indigo-500' href="/terms-condition">terms and conditions</Link> </label>
                         <br/>
                        <button className='my-4 border py-3 px-6 border-gray-600 text-sm font-bold rounded-full hover:bg-gray-800 hover:text-white ' type="submit">Submit</button>
                    </div>

                </div>
                <div className="right mx-auto p-10 my-auto bg-white">
                    <img className='w-96' src="https://img.freepik.com/premium-vector/flat-design-concept-setting_108061-583.jpg?w=360" alt="" />
                </div>
            </div>
        </div>
    );
};

export default page;