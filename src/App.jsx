import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ErrorPage from './components/errorPage';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import ActivityTabs from './components/activityTabs';
import PhotosPageBody from './components/photos-page-body';
import PeoplePageBody from './components/people-page-body';
import VideoPageBody from './components/video-page-body';
import Tweets from './components/tweets';
import UserProfile from './components/user-profile';
import Activity from './components/activity';
import AllMembersActivity from './components/allmembersactivity';
import ViewProfile from './components/view-profile';
import ChangingProfile from './components/changing-profile';
import EditProfile from './components/edit-profile';
import ActivityHeader from './components/activity_header';
import AllMemberComponent from './components/allmembercomponent';
import MakePost from './components/makePost';
import BackgroundUploader from './components/edit-background-picture';
import ProfileUploader from './components/edit-profile-picture';
import UserFriends from './components/user-friends';
import Friendships from './components/friendships';
import FriendRequests from './components/friendrequests';
import UserMedia from './components/user-media';
import MyVideos from './components/myvideos';
import MyPhotos from './components/myphotos';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/home'} element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='activity' element={<Activity />}>
              <Route index element={<AllMembersActivity />} />
              <Route path=':route' element={<ActivityTabs />} />
            </Route>
            <Route path='photos' element={< PhotosPageBody />} />
            <Route path='people' element={< PeoplePageBody />} />
            <Route path='watch' element={< VideoPageBody />} />
          </Route>




          <Route path='/user-profile' element={<UserProfile />} >
            <Route index element={<ActivityHeader />} />
            <Route path='activity' element={<ActivityHeader />}>
              <Route index element={<AllMemberComponent />} />
              <Route path='my-posts' element={<AllMemberComponent />} />
              <Route path='my-friends' element={<AllMemberComponent />} />
              <Route path='my-groups' element={<AllMemberComponent />} />
            </Route>
            <Route path='profile' element={<ChangingProfile />}>
              <Route index element={<ViewProfile />}></Route>
              <Route path='view-profile' element={<ViewProfile />}></Route>
              <Route path='edit-profile' element={<EditProfile />}></Route>
              <Route path='edit-profile-picture' element={<ProfileUploader />}></Route>
              <Route path='edit-background-picture' element={<BackgroundUploader />}></Route>
            </Route>
            <Route index element={<UserFriends />}/>
            <Route path='friends' element={<UserFriends />}>
            <Route index element={<Friendships />}/>
              <Route path='friendships' element={<Friendships />}></Route>
              <Route path='friendship-requests' element={<FriendRequests />}></Route>

            </Route>
            <Route index element={<UserMedia />}/>
            <Route path='user-media' element={<UserMedia />}>
            <Route index element={<MyPhotos />}/>
              <Route path='myphotos' element={<MyPhotos />}></Route>
              <Route path='myvideos' element={<MyVideos />}></Route>

            </Route>

          </Route>
          <Route path='/tweets' element={<Tweets />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
