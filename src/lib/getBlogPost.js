import React from 'react';




const getBlogPost = async (id) => {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

    if (!res.ok){
        throw new Error("Error Fetching post")
    }

    return (
        res.json()
    );
};

export default getBlogPost;
