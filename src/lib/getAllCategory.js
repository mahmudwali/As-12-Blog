import React from 'react';

const BaseURL = "https://basic-blog.teamrabbil.com/api"

const getAllCategory = async() => {
    const res = await fetch(BaseURL+"/post-categories");

    if (!res.status===200){
        throw new Error("Error Fetching posts")
    }

    return (
        res.json()
    );
};

export default getAllCategory;

