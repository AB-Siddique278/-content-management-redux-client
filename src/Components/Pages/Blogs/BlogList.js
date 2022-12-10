import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => {
                setBlogs(data)
                setLoading(false)
            })


    }, [])
    return (
        <div>
                   <div>
            <>
                

                {
                    loading ? <Loading></Loading> : <div>
                        <div className='container text-lg ' >
                        <div className="overflow-x-auto">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Tag</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                        <th>Author</th>
                                        <th>Rating</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        blogs.map((b, index) => <tr>
                                            <th>{index+1}</th>
                                            <td><div className="avatar">
                                                <div className="w-16 rounded">
                                                    <img src={b.image} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div></td>
                                            <td>{b.title}</td>
                                            <td>{b.tag} </td>
                                            <td>{b.description.slice(0, 20)} </td>
                                            
                                            
                                           
                                            <ToastContainer />
                                            
                                        </tr>)
                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                }

            </>
        </div>
        </div>
    );
};

export default BlogList;