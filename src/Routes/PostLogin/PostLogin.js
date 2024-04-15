import React, { useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import InsightPage from '../../pages/Insights-page/Insight-main-page';
import SideBar from '../../component/side-bar/Side-bar';
import Errorpage from '../../component/404/Errorpage';

const PostLogin = () => {

  const [clickOutSide, setClickOutSide] = useState(false);

  const clickOutSideHandler = () => {
    setClickOutSide(!clickOutSide);
  }

  return (
    <div className='flex h-screen ' onClick={clickOutSideHandler}>
      <SideBar clickOutSide={clickOutSide}/>
      <Routes>
        <Route path="/:id?" element={<InsightPage clickOutSide={clickOutSide}/>}/>
        <Route path="/check/:fakeId?" element={<InsightPage clickOutSide={clickOutSide}/>}/>
        <Route path="/insights" element={<InsightPage clickOutSide={clickOutSide}/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
      
    </div>
  )
}

export default PostLogin;
