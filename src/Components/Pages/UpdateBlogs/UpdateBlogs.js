import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateBlogs = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});
    useEffect(() => {
        const url = `https://backend-ab-siddique278.vercel.app/blogs/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const handleAddBlogs = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const tag = event.target.tag.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const author = event.target.author.value;
        const rating = event.target.rating.value;


        const addItems = { title, tag, description, image, author, rating };
        fetch(`https://backend-ab-siddique278.vercel.app/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                //alert('New items add successfully')
                toast.success('Added product Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                const remaining = blogs.filter(blog => blog._id !== id)
                setBlogs(remaining)
                event.target.reset()
            })
    }

    return (
        <div>
            <form onSubmit={handleAddBlogs} class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Title
                        </label>
                        <input
                            name='title'
                            defaultValue={blogs.title}
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Title" />
                        
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Tag
                        </label>
                        <input
                            name='tag'
                            defaultValue={blogs.tag}
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Tag" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Description
                        </label>
                        <textarea
                            name='description'
                            defaultValue={blogs.description}
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Description" />
                       
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Image
                        </label>
                        <input
                            name='image'
                            defaultValue={blogs.image}
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Image" />
                        
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Author
                        </label>
                        <input
                            name='author'
                            defaultValue={blogs.author}
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Author" />
                        
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Rating
                        </label>
                        <input
                            name='rating'
                            defaultValue={blogs.rating}
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Rating" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-lg text-neutral"> </span>

                    </label>
                    <input type="submit"
                        value="add Item"
                        placeholder="Type here" className="btn  w-full" />

                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateBlogs;