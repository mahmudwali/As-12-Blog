import React from 'react';


const BaseURL = "https://basic-blog.teamrabbil.com/api"


const getAllPosts = async () => {
    const res = await fetch(BaseURL+"/post-newest");

    if (!res.status===200){
        throw new Error("Error Fetching posts")
    }

    return (
        res.json()
    );
};

export default getAllPosts;
