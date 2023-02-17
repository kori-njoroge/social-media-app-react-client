import React from 'react'
import '../styles/navbar.css'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import MakePost from './makePost'

export default function Dashbody() {
    return (
        <div className='dashbody'>
            <Navbar />
            <div className="DashboardMiddleContainer">
                <div className="containerLeft">
                    <MakePost />
                </div>
                <div className="containerRight">
                    <p>Members</p>
                    <p>Hashtags</p>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
