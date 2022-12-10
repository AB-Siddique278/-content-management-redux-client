import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://backend-ab-siddique278.vercel.app/blogs')
            .then(response => response.json())
            .then(data => {
                setBlogs(data)
                setLoading(false)
            })


    }, [])
    return (
        <div>
            <>
                

                {
                    loading ? <Loading></Loading> : <div>
                        <div className='container ' >
                            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 '>
                                {
                                    blogs.map(blog => (<BlogsCard
                                        blog={blog}
                                        key={blog._id}




                                    ></BlogsCard>))
                                }
                            </div>
                        </div>
                    </div>
                }

            </>
        </div>
    );
};

export default Blogs;