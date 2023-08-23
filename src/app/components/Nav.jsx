
import getAllCategory from "@/lib/getAllCategory";

import Link from 'next/link';


const Nav = async () => {
    const category= await getAllCategory();
    
   
    return (
        <div className=''>
            <div className='px-10  border-b flex items-center justify-between '>
               <Link href={"/"}> <h1>Mahmud.</h1>  </Link>
                <ul className='flex p-3'>
                    
                    
                    <li className='py-1 px-4 border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'><Link href={"/dashboard"}>Dashboard</Link></li>
                    <li className='py-1 px-4 border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'><Link href={"/blog"}>Blog</Link></li>
                    <li className='py-1 px-4 border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'><Link href={"/about"}>About</Link></li>
                    <li className='py-1 px-4 border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            <div className='flex py-2 justify-center' >
             
            {
                    category.map((item,index)=>{
                        return (
                            <Link href={`/bycategory/${item.id}`}>
                            <li key={index.id} className='py-1 px-4 list-none border hover:bg-gray-600 hover:text-white border-gray-300 text-gray-400 transition-all rounded-lg mx-2'>
                                
                            {item.name}
                            </li>
                        </Link>
                            
                        )
                    })
                }
                
            </div>
        </div>
    );
};

export default Nav;

