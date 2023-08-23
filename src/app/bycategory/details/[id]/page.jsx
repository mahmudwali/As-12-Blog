import getBlogPost from '@/lib/getBlogPost';
import React from 'react';


const page = async (params) => {
    const id= params.id;
    const post = await getBlogPost(id);

    return (
        <div className='container mx-auto my-16 p-9'>
            <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                <div className="card w-100 glass">
                    {post.id}
                    <h1>Don't show any Data from API</h1>
                </div>
            </div>
            
        </div>
    );
};

export default page;