import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {useState} from "react";
import Menu from './components/Menu/Menu';
import Account from './components/Account/Account'
import Video from './components/Video/Video';
import Settings from './components/Settings/Settings'
import Contacts from './components/Contacts/Contacts'


function App() {
  const myVids = [
    "//www.w3schools.com/html/mov_bbb.mp4",
    "//www.w3schools.com/html/movie.mp4"
  ];
  const [menuActive, setMenuActive]=useState(false)
  const items = [{value:"Account",to:'/main',icon:"account_circle"},
    {value:"Video",to:'/video',icon:"airplay"},
    {value:"Settings",to:'/settings',icon:"build"},
    {value:"Contacts",to:'/contacts',icon:"contacts"}]
  return (
    <div className="App">
       <nav>
         <div className="burger-btn" onClick={()=>setMenuActive(!menuActive)}>
           <span className="burger-btn-span"/>
         </div>
       </nav>
       <Menu
         header={"Burger menu"}
         items = {items}
         active = {menuActive}
         setActive = {setMenuActive}
       />
      <Routes>
        <Route path="/main" element={<Account/>}/>
        <Route path="/video" element={<Video myVids={myVids}/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="*" elements={<Account/>}/>
      </Routes>
    </div>
  );
}

export default App;
