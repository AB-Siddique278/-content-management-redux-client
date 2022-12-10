import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsBlogs = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/blogs/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className='mt-5'>

            <div className="card bg-base-100 shadow-xl">
                <figure><img src={blogs.image} alt="Shoes"  /></figure>
                <div className="card-body text-lg">
                    <h2 className="card-title">Title: {blogs.title} </h2>
                    <p>Description: {blogs.description} </p>
                    <p>Tag: {blogs.tag} </p>
                    <p>Rating: {blogs.rating} </p>
                    <p>Author: {blogs.author} </p>
                   
                </div>
            </div>

        </div>
    );
};

export default DetailsBlogs;