import React from 'react';

const BlogsCard = ({ blog }) => {
    const { title, description, image, tag, author, rating } = blog
    return (
        <div className='mt-5'>
            
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.slice(0, 80)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>















        </div>
    );
};

export default BlogsCard;