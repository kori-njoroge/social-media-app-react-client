import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/userSidebar.css'
import smallLogo from '../images/logo-icon.svg'

export default function UserSideBar() {
    // Gem
    const shrinked = 'reduced-container'
    const sidebartopSmall = 'sidebar-top-small'
    const imageclass = 'logoSmall'
    const sidebarBottomsmall = 'small-sidebar-bottom'
    const smallAcitvity = 'smallActivity'
    
    
    return (
        <div className={shrinked}>
            <div className={sidebartopSmall}>
                <img className={imageclass} src={smallLogo} alt="vertical logo" />
            </div>
            <div className={sidebarBottomsmall}>
                <div className ={'smallActivity'}>
                    <Link to ={'/dashboard/activity'}>
                    <i className="fa-solid fa-list-check"></i>
                    </Link>
                </div>
                <div className ={'smallActivity'}>
                    <Link to ={'/dashboard/photos'}>
                    <i className="fa-regular fa-images"></i>
                    </Link>
                </div>
                <div className ={'smallActivity'}>
                    <Link to ={'/dashboard/people'}>
                    <i className="fa-solid fa-user-group"></i>
                    </Link>
                </div>
                <div className ={'smallActivity'}>
                    <Link to ={'/dashboard/groups'}>
                    <i className="fa-solid fa-users"></i>
                    </Link>
                </div>
                <div className ={'smallActivity'}>
                    <Link to ={'/dashboard/watch'}>
                    <i className="fa-solid fa-play"></i>
                    </Link>
                </div>
                <div className ={'smallActivity'}>
                    <Link to ={'/dashboard/forums'}>
                    <i className="fa-solid fa-comments"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}
