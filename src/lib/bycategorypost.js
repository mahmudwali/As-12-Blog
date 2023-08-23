import React from 'react';

const BaseURL = "https://basic-blog.teamrabbil.com/api"

const bycategorypost = async(id) => {
    const res = await fetch(BaseURL+`/post-list/${id}`);

    if (!res.status===200){
        throw new Error("Error Fetching posts")
    }

    return (
        res.json()
    );
};

export default bycategorypost;

