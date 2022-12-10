import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const BlogList = () => {
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


    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure want to delete')
        if (proceed) {
            console.log('delete item', id)

            toast.success('Deleted product Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });


            const url = `https://backend-ab-siddique278.vercel.app/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log("deleted");
                        const remaining = blogs.filter(blog => blog._id !== id)
                        setBlogs(remaining)
                    }
                })
        }


    }

















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
                                                <th>Author</th>
                                                <th>Rating</th>
                                                <th>Delete</th>
                                                <th>Updated</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                blogs.map((b, index) => <tr>
                                                    <th>{index + 1}</th>
                                                    <td><div className="avatar">
                                                        <div className="w-16 rounded">
                                                            <img src={b.image} alt="Tailwind-CSS-Avatar-component" />
                                                        </div>
                                                    </div></td>
                                                    <td>{b.title}</td>
                                                    <td>{b.tag} </td>
                                                    <td>{b.description.slice(0, 20)} </td>
                                                    <td>{b.author} </td>
                                                    <td>{b.rating} </td>
                                                    <td><button onClick={() => handleItemDelete(b._id)} className=""> <span className='text-xl text-error'><button className='btn btn-error'>X</button></span></button></td>
                                                    <td><Link to={`/update/${b._id}`}> <button className=' btn btn-success '> update  </button> </Link></td>

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