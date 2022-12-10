import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                <h2>Dashboard </h2>
                    <Outlet
                    ></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">



                        <li> <Link to="/dashboard"><span className=' text-xl'></span> <p className=' text-lg '>Add Blog</p></Link></li>
                        <li><Link to="/dashboard/bloglist"> <span className=' text-xl'></span> <p className=' text-lg '>Blog list</p></Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;