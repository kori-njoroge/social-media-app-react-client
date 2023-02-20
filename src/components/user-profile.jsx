import  '../styles/user-profile.css';
import  React  from  'react';
import Navbar from './navbar'
import SideBar from './sideBar';
import img_bck from '../images/chelsea.jpg'
import img_profile from '../images/john-doedp.jpg'
import img1 from '../images/member.jpg'
import img2 from '../images/messibanner.jpg'
import UserPost from './user-posts'


function userProfile(){


return(
<div className='profile_page'>

<div className='profile_side'>
<SideBar/>
</div>
<div className='profile_main'>
<Navbar />


<div className='profile_main_content_header'>
<div className='background_image'>
<img src={img_bck} alt='background'  height ="400px"  width ="100%"/>

</div>
<div className='profile_main_content_header_nav'>
<div className='profile_image'>

<img className='img_profile' src={img_profile} alt='profile'  />
<p>john doe</p>

</div>

<div className='profile_main_content_header_nav_bar'>
    <span className='nav_con'> <i className="fa-solid fa-list-check"></i><p>activity</p></span>
    <span className='nav_con'> <i className="fa-solid fa-user-group"></i><p>profile</p></span>
    <span className='nav_con'> <i className="fa-solid fa-users"></i><p>friends</p></span>
    <span className='nav_con'><i className="fa-solid fa-user-group"></i><p>groups</p></span>
    <span className='nav_con'><i className="fa-regular fa-images"></i><p>media</p></span>
</div>   
</div>
</div>



<div className='profile_main_content'>
<div className='profile_main_content_left'>
<div className='MyGrpsnFri'>
<span className='GrpsnFri'>
<h2>4</h2>
<p>Friends</p>
</span>
<span  className='GrpsnFri'>
<h2>3</h2>
<p>Groups</p>
</span>
</div>
<hr ></hr>

<div className='MyPhotos'>
<h2>My Photos</h2>
<div className='MyPhotos_content'>
<img className= "MyphotosPic"src={img1}></img>
<img className= "MyphotosPic"src={img2}></img>
<img className= "MyphotosPic"src={img2}></img>
<img className= "MyphotosPic"src={img1}></img>
</div>

</div>
</div>
<div className='profile_main_content_center'>
<div className='profile_main_content_center_header'>    
<span className='profile_nav_con'>My Posts</span>
<span className='profile_nav_con'>Friends</span>
<span className='profile_nav_con'>Groups</span>
</div>
{/* footers outlet */}
<UserPost/>
</div>
<div className='profile_main_content_right'>
 <h2>Recent Activity</h2> 
<span className='recent_activity'> 
<p>Gideon posted a new picture</p>
<p>2 hours ago</p>
</span>  
</div>

</div>
</div>


</div>
)



}
export  default userProfile;