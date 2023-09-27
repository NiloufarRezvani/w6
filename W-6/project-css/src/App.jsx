import { useState } from 'react'
import logo from './pictures/logo.png';
import profileimg from './pictures/User profile img 1.png';
import profileIcon1 from './components/Contacts/profilecontact/profile1.png'
import profileIcon2 from './components/Contacts/profilecontact/profile2.png'
import profileIcon3 from './components/Contacts/profilecontact/profile3.png'
import profileIcon4 from './components/Contacts/profilecontact/profile4.png'
import profileIcon5 from './components/Contacts/profilecontact/profile5.png'
import profileIcon6 from './components/Contacts/profilecontact/profile6.png'
import icon1 from './components/Contacts/pages/p1.png'
import icon2 from './components/Contacts/pages/p2.png'
import icon3 from './components/Contacts/pages/p3.png'
import icon4 from './components/Contacts/pages/p4.png'
import icon5 from './components/Contacts/pages/p5.png'
import icon6 from './components/Contacts/pages/p6.png'
import  Navbar from './components/Navbar/Navbar';
import StoryList from './components/Story/StoryList';
import profilePic1 from "./components/Story/images/pic1.png";
import profilePic2 from "./components/Story/images/pic2.png";
import profilePic3 from "./components/Story/images/pic3.png";
import profilePic4 from "./components/Story/images/pic4.png";
import profilePic5 from "./components/Story/images/pic5.png";
import LeftButtons from './components/leftbar/LeftButtons';
import Contacts from './components/Contacts/Contacts';
import './App.css'



function App (){
const menuList = [
  {text:"Explore",link:"#"},
  {text:"Community post",link:"#"},
  {text:"Pages",link:"#"},
  ]
  const profileInfo = {
    nickname: "Chandan S",
    username: "uiuxchandan",
    profileimg: profileimg,
  }
  const stories = [{
    profileURL: profilePic1,
    username:"Esther Howard",
    id:"1",
    content:profilePic1,
   
},{
    profileURL: profilePic2,
    username:"Arlene McCoy",
    id:"2",
    content:profilePic2,
   
},{
    profileURL: profilePic3,
    username:"Robert Fox",
    id:"3",
    content:profilePic3,
   
},{
    profileURL: profilePic4,
    username:"Albert Flores",
    id:"4",
    content:profilePic4,
    
},{
    profileURL: profilePic5,
    username:"Annette Black",
    id:"5",
    content:profilePic5,
    
}]  

const contacts ={
  title:"Contacts",
  list:[
      {name:"Bessie Cooper",imgURL:profileIcon1},
      {name:"Savannah Nguyen",imgURL:profileIcon2},
      {name:"Ralph Edwards",imgURL:profileIcon3},
      {name:"Jerome Bell",imgURL:profileIcon4},
      {name:"Ronald Richards",imgURL:profileIcon5},
      {name:"Dianne Russell",imgURL:profileIcon6},
      
  ]
  ,
}

const suggestedPages ={
  title:"Soggested Pages",
  list:[
      {name:"Graphic design",imgURL:icon1},
      {name:"Technology news update",imgURL:icon2},
      {name:"Freelancing tips",imgURL:icon3},
      {name:"Marketing",imgURL:icon4},
      {name:"Blender tutorials",imgURL:icon5},
      {name:"Power of learning",imgURL:icon6},
  ]
  ,

}
  const [selectedView,setSelectedView] = useState(0)
  function showStory() {
    console.log("ok")
}
function addStory() {
  
}
function viewHandler(){
  console.log('ok')
}

  return (
    <>
      <div className="hole-page">
        <div className="left-bar">
          <div className='text-header'>
            <div><img src={logo}></img></div>
            <h1>My Social</h1>
            

          </div>
          <LeftButtons/>
        </div>
        <div className="main-content">
          <div className="nav">
            <Navbar menuList={menuList} selectedView={selectedView} profileInfo={profileInfo} setSelectedView={setSelectedView} />
          </div>
          <div className='main-content-section'>
            <div className="left-side">
              <div className="stories">
              <StoryList showStory={showStory} stories={stories} addStory={addStory}/>
              </div>


            </div>
            <div className="create-post">
              
            </div>
            <div className="posts"></div>
            <div className="right-side">
            <Contacts key={contacts.title} contacts={contacts} onClick={viewHandler}/>
            <Contacts  key={suggestedPages.title} contacts={suggestedPages} onClick={viewHandler}/>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
