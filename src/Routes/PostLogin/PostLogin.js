import React from 'react'
import { Route, Routes } from 'react-router-dom';
import InsightPage from '../../pages/Insights-page/Insight-main-page';
import SideBar from '../../component/side-bar/Side-bar';

const PostLogin = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Routes>
        <Route path="/insights" element={<InsightPage />}/>
      </Routes>
      
    </div>
  )
}

export default PostLogin;
